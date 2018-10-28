import {Component, OnInit} from '@angular/core';
import {Dish} from '../shared/dish';
import {DISHES} from "../shared/dishes";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit {

  // dishes = DISHES;
  // dishes: Dish[];
  dishes: Dish[] = DISHES;

  // selectedDish = DISHES[0];
  // selectedDish: Dish = DISHES[6];
  selectedDish: Dish;


  constructor() {
  }

  ngOnInit() {
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
