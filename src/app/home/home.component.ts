import {Component, OnInit} from '@angular/core';
import {DishService} from "../services/dish.service";
import {Dish} from "../shared/dish";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  dish: Dish;

  constructor(private dishservice: DishService) {
  }

  ngOnInit() {
    this.dish = this.dishservice.getFeaturedDish();
  }


}

