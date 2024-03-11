import { Component } from '@angular/core';
import { ReviewsComponent } from '../reviews/reviews.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ReviewsComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  rating!:number
  imgSrc!:string
  

}
