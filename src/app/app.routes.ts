import { Routes } from '@angular/router';
import { HomeScreenComponent } from './Screens/home-screen/home-screen.component';
import { CounterComponent } from './counter/counter.component';
import { CartComponent } from './Components/cart-component/cart-component.component';

export const routes: Routes = [{
    path:'',component:HomeScreenComponent,
},
{
    path:'counter',component:CounterComponent


},
{
    path:'cart',component:CartComponent

}];
