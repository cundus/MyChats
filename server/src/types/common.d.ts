import { Request } from "express";

export interface TypedRequestBody<T> extends Request {
   body: T;
}

export enum EStatus {
   SUCCESS = "SUCCESS",
   NOT_FOUND = "NOT_FOUND",
   ERROR = "ERROR",
}
