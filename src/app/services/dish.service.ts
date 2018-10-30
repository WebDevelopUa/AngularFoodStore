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

  getDish(id: number): Dish {
    return DISHES.filter((dish) => (dish.id === id))[0];
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured)[0];
  }
}
