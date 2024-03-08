import { Component } from '@angular/core';
import { SearchBoxComponent } from '../search-box/search-box.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SearchBoxComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  

}
