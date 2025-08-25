/* tslint:disable */
/* eslint-disable */
/**
/* This file was automatically generated from pydantic models by running pydantic2ts.
/* Do not modify it by hand - just update the pydantic models and then re-run the script
*/

export type TaskType = "tok/fine" | "tok/coarse" | "pos/pku" | "ner" | "srl" | "dep" | "sdp" | "con";

export interface Item {
  name: string;
  description?: string | null;
  price: number;
  tax?: number | null;
}
export interface NLPTask {
  text: string;
  tasks: TaskType[];
}
export interface NLPTaskResult {
  [k: string]: string[];
}
