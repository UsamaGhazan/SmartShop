import { Routes } from '@angular/router';
import { HomeScreenComponent } from './Screens/home-screen/home-screen.component';
import { CounterComponent } from './counter/counter.component';

export const routes: Routes = [{
    path:'',component:HomeScreenComponent,
},
{
    path:'counter',component:CounterComponent

}];
