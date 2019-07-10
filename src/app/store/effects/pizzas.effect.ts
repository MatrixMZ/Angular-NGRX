import { Injectable } from '@angular/core';
import { Effect, Actions, ofType} from '@ngrx/effects';
import * as pizzasActions from '../actions/pizzas.actions';
import { switchMap, map } from 'rxjs/operators';
import * as fromServices from '../../services';

@Injectable()
export class PizzasEffects {
  constructor(
    private actions$: Actions,
    private pizzaService: fromServices.PizzasService
  ) { }

  @Effect()
  loadPizzas$ = this.actions$.pipe(ofType(pizzasActions.LOAD_PIZZAS))
  .pipe(switchMap(() => {
    return this.pizzaService.getPizzas().pipe(
      map(pizzas => new pizzasActions.LoadPizzasSuccess(pizzas))
    );
  }));
}
