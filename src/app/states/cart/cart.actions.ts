import { createAction,props } from "@ngrx/store";
import { Product } from "../../models/product";

export const addToCart=createAction('[Cart Component]',props<{product:Product}>())
export const incrementProduct=createAction('[Cart Component]',props<{productId:number}>())
export const decrementProduct=createAction('[Cart Component]',props<{productId:number}>())
export const removeProduct=createAction('[Cart Component]',props<{productId:number}>())