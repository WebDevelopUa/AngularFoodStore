import {Injectable} from '@angular/core';

// import Dish class & DISHES constant:
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})

export class DishService {

  constructor() {
  }

  // add method that return an array of Dishes & DISHES constant / supply data to parts of App that requires it
  getDishes(): Dish[] {
    return DISHES;
  }
}
