import { HttpClient } from "@angular/common/http";
import { Injectable,inject } from "@angular/core";
import { Product } from "../models/product";
import { map } from "rxjs";


@Injectable({
    providedIn:"root"
})

export class ProductApiService{
    http=inject(HttpClient)
    constructor(){}

    getProducts(){
        return this.http.get<Product[]>('http://fakestoreapi.com/products').pipe(
            map((products)=>{
                return products.map((product)=>{
                    return {...product,quantity:1}
                })
            })
        )
    }
}