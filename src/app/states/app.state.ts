// Global Store

import { CartState } from "./cart/cart.reducers";
import { CounterState } from "./counter/counter.reducer";

export interface AppState {
    counter:CounterState
    cart:CartState
}
