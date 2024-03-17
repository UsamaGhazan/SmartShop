import { increment, decrement, reset } from './../states/counter/counter.actions';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { Store } from '@ngrx/store';
import { selectCount } from '../states/counter/counter.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  // if commonmodule is imported no need to import asyncpipe
  imports: [AsyncPipe],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count$:Observable<number>

  constructor(private store:Store<AppState>){
    this.count$=this.store.select(selectCount)
  }
increment(){
  this.store.dispatch(increment())
}

decrement(){
  this.store.dispatch(decrement())
}

reset(){
  this.store.dispatch(reset())
}
}

