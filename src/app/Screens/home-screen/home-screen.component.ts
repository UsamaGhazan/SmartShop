import { Component } from '@angular/core';
import { ProductCardComponent } from '../../Components/product-card/product-card.component';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './home-screen.component.html',
  styleUrl: './home-screen.component.css'
})
export class HomeScreenComponent {

}
