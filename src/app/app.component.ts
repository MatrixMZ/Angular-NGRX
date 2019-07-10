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
  pizzas: Pizza[];

  constructor(private store: Store<fromStore.ProductsState>) {

  }

  ngOnInit() {
    this.store.select<any>('products').subscribe(state => {
      console.log(state);
    });
  }
}
