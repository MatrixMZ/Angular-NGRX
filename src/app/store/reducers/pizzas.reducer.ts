import * as fromPizzas from '../actions/pizzas.actions';
import { Pizza } from '../../models/pizza.model';

export interface PizzaState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  data: [{
    id: 1,
    name: 'Peperoni',
    toppings: [
      { id: 1, name: 'Cucamber' },
      { id: 2, name: 'Tomato' },
      { id: 3, name: 'Olive' },
      { id: 4, name: 'Peperoni' }
    ]
  }],
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: fromPizzas.PizzasAction): PizzaState {

  switch (action.type) {

    case fromPizzas.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
  }

  return state;
}
