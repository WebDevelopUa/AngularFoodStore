import {Component, OnInit} from '@angular/core';

// Gives access to the Router parameters that is available
import { Params, ActivatedRoute } from '@angular/router';

// Enables to track the location the history of browser
import {Location} from '@angular/common';

import {Dish} from "../shared/dish";
import {DishService} from "../services/dish.service";

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})


export class DishdetailComponent implements OnInit {

  dish: Dish;

  // make all Services available
  constructor(private dishservice: DishService,
              private route: ActivatedRoute,
              private location: Location) {
  }


  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id);
  }

  goBack(): void {
    this.location.back();
  }

}
