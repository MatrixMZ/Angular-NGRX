import { Pizza } from './models/pizza.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pizzas$: Observable<Pizza[]>;

  constructor(private store: Store<fromStore.ProductsState>) {

  }

  ngOnInit() {
    this.pizzas$ = this.store.select<any>(fromStore.getAllPizzas);
    this.store.dispatch(new fromStore.LoadPizzas());
  }
}
