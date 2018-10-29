import {Component, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';

// bad way of fetching data:
// import {DISHES} from "../shared/dishes";
// use Service instead:
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit {

  // dishes = DISHES;
  dishes: Dish[];
  // dishes: Dish[] = DISHES;

  // selectedDish = DISHES[0];
  // selectedDish: Dish = DISHES[6];
  selectedDish: Dish;


  constructor(private dishService: DishService) {
  }

  // fetch Data from Service using .getDishes() method from dish.service.ts
  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
