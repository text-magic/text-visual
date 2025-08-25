import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import type { NLPTaskResult } from "../../apiTypes";

export const Route = createFileRoute("/visual")({
  component: RouteComponent,
});

function RouteComponent() {
  const [text, setText] = useState("");

  const [NLPResult, setNLPResult] = useState<NLPTaskResult>({});

  useEffect(() => {
    if (!text) return;
    fetch("http://localhost:8000/hanlp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, tasks: ["pos/pku"] }),
    })
      .then((response) => response.json())
      .then((data) => {
        setNLPResult(data);
        console.log(data); // log the actual result
      });
  }, [text]);

  return (
    <div className="max-w-4xl mx-auto m-6">
      <h1 className="text-3xl font-bold text-center">Text Visual</h1>

      <div>Tasks: tok</div>
      <textarea
        name="text"
        id=""
        rows={10}
        cols={100}
        value={text}
        className="w-full h-full border"
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <div className="flex flex-wrap">
        {NLPResult?.["tok/fine"]?.map((w: string, i: number) => (
          <div
            key={i}
            className="m-1 p-1 border rounded border-gray-300 text-center"
          >
            <div className="word border-b">{w}</div>
            <div className="pos">{NLPResult?.["pos/pku"]?.[i]}</div>
          </div>
        ))}
      </div>

      <details>
        <summary>HanLP Debug Info</summary>
        <pre>{JSON.stringify(NLPResult, null, 2)}</pre>
      </details>
    </div>
  );
}
