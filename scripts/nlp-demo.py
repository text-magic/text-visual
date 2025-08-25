import pprint

import hanlp

pprint.pprint(hanlp.pretrained.mtl.ALL)

HanLP = hanlp.load(hanlp.pretrained.mtl.CLOSE_TOK_POS_NER_SRL_DEP_SDP_CON_ELECTRA_BASE_ZH)

print(HanLP.device)
pprint.pprint(HanLP.tasks)

result = HanLP("阿婆主来到北京立方庭参观自然语义科技公司。", tasks=["tok/coarse", "pos/pku"])
print(result)

# HanLP2 = hanlp.load(hanlp.pretrained.mtl.UD_ONTONOTES_TOK_POS_LEM_FEA_NER_SRL_DEP_SDP_CON_XLMR_BASE)
# pprint.pprint(HanLP2.tasks)
