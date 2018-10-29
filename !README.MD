![Angular App](https://next.angular.io/assets/images/logos/angular/logo-nav@2x.png "Angular App")    [Application](https://next.angular.io/docs)
==========
##### Angular requires Node.js version 8.x or 10.x.

* To check your version, run in a terminal/console window: 

    ``` node -v ``` 

  
* To get *Node.js*, go to:

[nodejs.org](https://nodejs.org)

## Install/Upgrade NPM & Angular CLI globally

    npm install npm@latest -g
    npm install -g @angular/cli

## App Installing process / Create a workspace and initial application

    node -v
    npm -v
    ng v
    
    ng new health-food-store --style=scss  (if App is not created)
    ng new HFS --dir=./HFS --style=scss (if App is not created)
    ng new HFS --directory=./ --style=scss (if App is not created)
    
#### Start the development server / Run App / Serve the application

    cd health-food-store && ng serve -o
    cd HFS && ng serve -o
    ng serve --open
    
   GoTo=>  [localhost:4200](http://localhost:4200/)
    
#### Edit Angular component *(root component)*

    cd health-food-store/src/app/
    
        
#### Configuring Angular Application

    npm install @angular/material --save
    npm install @angular/cdk --save
    npm install --save @angular/animations
    npm install --save hammerjs
    npm install --save @angular/flex-layout
    
   Next, include the following into the <head> of *index.html* to make use of Material Design icons:
    
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> 
    
   src/app/app.module.ts
    
    . . . 
    
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { MatToolbarModule } from '@angular/material/toolbar'; 
    import { FlexLayoutModule } from '@angular/flex-layout';
    
    . . . 
    
    import 'hammerjs';
    
    @NgModule({
      
      . . . 
      
      imports: [ 
        
        . . .,
        
        BrowserAnimationsModule,
        MatToolbarModule,
        FlexLayoutModule
        
      ], 
        
        . . . 
      
      
    }) 
    
    . . . 
   
   Open *app.component.html*
    
    <mat-toolbar color="primary"> <span>Logo</span> </mat-toolbar>
    
       
   Open *styles.scss* (https://material.angular.io/guide/getting-started)
    
    @import '~@angular/material/prebuilt-themes/deeppurple-amber.css';
    @import '~@angular/material/prebuilt-themes/indigo-pink.css';
    @import '~@angular/material/prebuilt-themes/pink-bluegrey.css';
    @import '~@angular/material/prebuilt-themes/purple-green.css';
    
    
#### Create **Menu component**

    ng generate component menu
    
   Open *app.component.html*
    
    <app-menu></app-menu> 
    
   Create a folder named *shared* under the *src/app* folder. To this folder, add a file named *dish.ts* with the following code:
    
    export class Dish {
        name: string;
        image: string;
        category: string;
        label: string;
        price: string;
        description: string;
    }
    
   Update *menu.component.ts* as follows to add in the data for four menu items:
    
    . . .
    import { Dish } from '../shared/dish';
    . . .
    
    export class MenuComponent implements OnInit {
    
      dishes: Dish[] = [
        {
          name: 'Kiwi',
          image: '/assets/images/kiwi.png',
          category: 'fruits',
          label: '',
          price: '2.99',
          description: 'Delicious eco friendly fruit for your family'
        }
       ];
    . . .
    }
    
   Update *menu.component.html* template as follows:
   
    <div class="container"
         fxLayout="column"
         fxLayoutGap="10px">
    
      <mat-list fxFlex>
        <mat-list-item *ngFor="let dish of dishes">
          <img matListAvatar src={{dish.image}} alt={{dish.name}}>
          <h1 matLine> {{dish.name}} </h1>
          <p matLine>
            <span> {{dish.description}} </span>
          </p>
        </mat-list-item>
      </mat-list>
    
    </div>
    
   Update *app.module.ts* as follows:
   
    . . .
    
    import { MatListModule } from '@angular/material/list';
    
    . . .
    
      imports: [
        . . .,
        MatListModule,
        . . .
      ],
    
    . . .
   
    
    
#### Updating **Menu component**

   Open *menu.component.html* and update its content as follows:
    
    . . .
    
      <div fxFlex>
        <div>
          <h3>Menu</h3>
          <hr>
        </div>
      </div>
    
      <div fxFlex>
        <mat-grid-list cols="2" rowHeight="200px">
          <mat-grid-tile *ngFor="let dish of dishes">
            <img height="200px" src={{dish.image}} alt={{dish.name}}>
            <mat-grid-tile-footer>
              <h1 matLine>{{dish.name | uppercase}}</h1>
            </mat-grid-tile-footer>
          </mat-grid-tile>
        </mat-grid-list>
      </div>
    
    . . .
    
   Open *app.module.ts* and update it as follows:
   
    . . .
    
    import { MatGridListModule } from '@angular/material/grid-list';
    import { MatCardModule } from '@angular/material/card';
    import { MatButtonModule } from '@angular/material/button';
    
    . . .
    
      imports: [
        . . .,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        . . .
      ],
    
    . . .
    
        
        
#### Add a **Card Component**

   Update the *menu.component.ts* file as follows to move the details of the dishes into a constant
    
     . . .
     
     const DISHES: Dish[] = [
     . . .
     
     ];
     
     . . .
     
     export class MenuComponent implements OnInit {
    
      dishes = DISHES;
    
      selectedDish = DISHES[0];
    
     . . .
     
     }       
     
     
   Update the *menu.component.html* template to display the details of a selected dish using the Material Card component as follows:
     
   . . .
   
     <div fxFlex *ngIf="selectedDish">
       <mat-card>
         <mat-card-header>
           <mat-card-title>
             <h3>{{selectedDish.name | uppercase}}</h3>
           </mat-card-title>
         </mat-card-header>
         <img mat-card-image src={{selectedDish.image}} alt={{selectedDish.name}}>
         <mat-card-content>
           <p>{{selectedDish.description}}
           </p>
         </mat-card-content>
         <mat-card-actions>
           <button mat-button>LIKE</button>
           <button mat-button>SHARE</button>
         </mat-card-actions>
       </mat-card>
     </div>  
     
        
#### Refactoring the Code & add select item action

   Create a new file named *dishes.ts* in the *shared* folder to now export the JavaScript object array of dishes:
    
    export const DISHES  = [
      {
        name: 'Apple',
        image: '/assets/images/apple.png',
        category: 'fruits',
        label: 'Hot',
        price: '0.99',
        description: 'Healthy Green Apples'
      },
    
    ];
       
        
   Open *menu.component.ts* file and update its content, first by deleting the *dishes* constant and then make the following changes:
   
    import { Component, OnInit } from '@angular/core';
    import { Dish } from '../shared/dish';
    import { DISHES } from '../shared/dishes';
    
    . . .
    
    export class MenuComponent implements OnInit {
    
      dishes: Dish[] = DISHES;
    
      selectedDish: Dish;
    
    . . .
    
      onSelect(dish: Dish) {
        this.selectedDish = dish;
      }
    
    }       
               
   Update the *menu.component.html* file as follows:
   
    <md-grid-tile *ngFor="let dish of dishes" (click) = "onSelect(dish)">
            
              
                      
        
        
#### Adding a Service

   Create a folder named *services* in the *src/app* folder:
    
    cd src/app && mkdir services


   Add a service to your application using Angular CLI:
    
    ng generate service services/dish

      
   Open *dish.service.ts* and update its contents as shown below:
    
    import { Dish } from '../shared/dish';
    import { DISHES } from '../shared/dishes';
    
    . . .
    
      getDishes(): Dish[] {
        return DISHES;
      }
    . . .

            
              
   Add the **service** to the *app.module.ts* file as follows:
    
    import { DishService } from './services/dish.service';
    
    @NgModule({
    . . .
    
      providers: [DishService],
    
    . . .
 

                      
   Update *menu.component.ts* file to make **Use of the Service** as follows:
    
    import { DishService } from '../services/dish.service';
    
    . . .
    
    export class MenuComponent implements OnInit {
    
      dishes: Dish[];
      selectedDish: Dish;
    
      constructor(private dishService: DishService) { }
      
      ngOnInit() {
        this.dishes = this.dishService.getDishes();
      }
    
    . . .
    
    }
    
 
 

            
        
        
#### *.gitignore* file

    -
    
    node_modules
    .idea
    
    # dependencies
    node_modules
    
    # testing
    coverage
    
    
    # production
    build
    
    
    # misc
    .DS_Store
    .env.local
    .env.development.local
    .env.test.local
    .env.production.local
    
    npm-debug.log*
    yarn-debug.log*
    yarn-error.log*

    
    
