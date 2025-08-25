from typing import Annotated, Literal

import hanlp
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, RootModel

HanLP = hanlp.load(hanlp.pretrained.mtl.CLOSE_TOK_POS_NER_SRL_DEP_SDP_CON_ELECTRA_BASE_ZH)


app = FastAPI()

origins = [
    "*",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Annotated[str | None, Query(max_length=50)] = None):
    return {"item_id": item_id, "q": q}


@app.get("/items/")
async def read_items(q: Annotated[str | None, Query(max_length=50)] = None):
    results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
    if q:
        results.update({"q": q})
    return results


class Item(BaseModel):
    name: str
    description: str | None = None
    price: float
    tax: float | None = None


@app.post("/items/")
async def create_item(item: Item) -> Item:
    return item


type TaskType = Literal["tok/fine", "tok/coarse", "pos/pku", "ner", "srl", "dep", "sdp", "con"]


class NLPTask(BaseModel):
    text: str
    tasks: list[TaskType]


class NLPTaskResult(RootModel[dict[TaskType, list[str]]]):
    pass


@app.post("/hanlp", response_model=NLPTaskResult)
def hanlp(task: NLPTask):
    result = HanLP(task.text, tasks=task.tasks)
    return NLPTaskResult(result)
