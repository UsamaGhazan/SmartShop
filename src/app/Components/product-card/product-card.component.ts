import { Component, inject } from '@angular/core';
import { ReviewsComponent } from '../reviews/reviews.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ReviewsComponent,CommonModule,AsyncPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  http=inject(HttpClient)
  products$=this.http.get('https://fakestoreapi.com/products') as Observable<any[]>
  rating!:number
  imgSrc!:string
  

}
