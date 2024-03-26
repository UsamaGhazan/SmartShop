import { addToCart } from './../../states/cart/cart.actions';
import { Component, OnInit, inject } from '@angular/core';
import { ReviewsComponent } from '../reviews/reviews.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ProductApiService } from '../../services/product-api.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ReviewsComponent,CommonModule,AsyncPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {
  http=inject(HttpClient)
  productApi=inject(ProductApiService)
  products$=this.http.get('https://fakestoreapi.com/products') as Observable<any[]>
  rating!:number
  imgSrc!:string
  addToCart(){
    
  }
  ngOnInit(): void {
    // this.http.get('https://fakestoreapi.com/products').subscribe(data=>{
    //   console.log(data)
    // })
    // this.productApi.getProducts().subscribe(data=>{
    //   console.log(data)
    // })
  }

}
