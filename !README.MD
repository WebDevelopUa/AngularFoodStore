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
    
   *src/app/app.module.ts*
    
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import { MatToolbarModule } from '@angular/material/toolbar'; 
    import { FlexLayoutModule } from '@angular/flex-layout';
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
    
    import { Dish } from '../shared/dish';
    
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
    
    
        
        
#### Add a **Card Component**

   Update the *menu.component.ts* file as follows to move the details of the dishes into a constant
    
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
    
#### Using Font Awesome Icons
                      
   Use NPM to fetch Font Awesome to the project by typing the following at the prompt:
    
    npm install font-awesome@4.7.0 --save
    
                      
   Add a new file named *_variables.scss* in the *src* folder and add the following to it:
    
    cd src && echo $fa-font-path : '../node_modules/font-awesome/fonts'; > _variables.scss
    $fa-font-path : '../node_modules/font-awesome/fonts';
    
                      
   Open the *styles.scss* file and update it as follows:
    
    @import 'variables';
    @import '../node_modules/font-awesome/scss/font-awesome';
    
                      
   Restart your server by stopping and restarting the:
   
    ng serve --open
    
                          
   Update the Template as follows:
   
      <a href="/"><span class="fa fa-home fa-lg"></span> Home</a>
    
    

#### Install Angular Material, Angular Component Dev Kit (CDK) & Angular Animations - https://material.angular.io/guide/getting-started

    npm install --save @angular/material @angular/cdk @angular/animations
    
    
   Configure animations:
   
    import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
    
    @NgModule({
      ...
      imports: [BrowserAnimationsModule],
      ...
    })
    export class PizzaPartyAppModule { }
            
            
   Import the component modules (*Angular Material modules after Angular's BrowserModule*):
   
    import {MatButtonModule, MatCheckboxModule} from '@angular/material';
    
    @NgModule({
      ...
      imports: [MatButtonModule, MatCheckboxModule],
      ...
    })
    export class PizzaPartyAppModule { }
            
                    
   Include a theme (https://material.angular.io/guide/theming)
   
   (If you're using the Angular CLI, you can add this to your *styles.css*):
   
    @import "~@angular/material/prebuilt-themes/indigo-pink.css";
            
           
   (If you are not using the Angular CLI, you can add this to your *index.html*):
   
    <link rel="stylesheet" type="text/css" href="theme.css">
            
                   
   Gesture Support (mat-slide-toggle, mat-slider, matTooltip) rely on HammerJS for gestures):
   
    npm install --save hammerjs
            
                           
   After installing, import it on your app's entry point (e.g. *src/main.ts*).
   
    import 'hammerjs';
            
                                   
   Add Material Icons (https://material.io/tools/icons/), load the icon font in your *index.html*:
   
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    
    
   Install & Using icons (https://google.github.io/material-design-icons/):
            
    npm install material-design-icons
    
   
   Update the Template as follows:
       
    <i class="material-icons">face</i>
            
        
        
        
        
#### Create *Header* component 

    ng generate component header
    
    
   Update the **Header**'s template *header.component.html* as follows:
    
     <mat-toolbar>
       <span title="Health Food Store"><img src="/assets/images/logo.svg" height=30 width=auto></span>
     
       <span class="fill-space"></span>
     
       <a mat-button><span class="fa fa-home fa-lg"></span> Home</a>
       <a mat-button><span class="fa fa-info fa-lg"></span> About</a>
       <a mat-button><span class="fa fa-list fa-lg"></span> Menu</a>
       <a mat-button><span class="fa fa-address-card fa-lg"></span> Contact</a>
     
     </mat-toolbar>
     
     <div class="container jumbotron"
          fxLayout="row"
          fxLayout.sm="column"
          fxLayout.xs="column"
          fxLayoutAlign.xs="start center"
          fxLayoutAlign.sm="start center"
          fxLayoutAlign.gt-sm="center center"
          fxLayoutGap="10px">
     
       <div fxFlex fxFlex.gt-sm="50%">
         <h1 class="welcome" title="Health Food Store">Welcome to HFS! <i class="material-icons md-48">face</i></h1>
         <p>
           The term health food has been used since the 1920s to refer to specific foods claimed to be especially beneficial
           to health, although the term has no official definition. Some terms that are associated with health food are
           macrobiotics, natural foods, organic foods and whole foods. Macrobiotics is a diet focusing primarily on whole
           cereals. Whole cereals, along with other whole foods, are foods that are minimally processed. Whole cereals have
           their fiber, germ and hull intact and are considered more nutritious. Natural foods are simply foods that contain
           no artificial ingredients. Organic foods are foods that are grown without the use of conventional and artificial
           pesticides and must meet certain organic standards.
         </p>
       </div>
     
       <span class="fill-space"></span>
     
       <div fxFlex fxFlex.gt-sm="40%">
         <img height="auto" width="100%" alt="Logo" src="/assets/images/logo.svg">
       </div>
     
       <div fxFlex></div>
     
     </div>
     
            
            
   Update the **Header**'s style *header.component.scss* file as follows:
    
     $white: floralwhite;
     $lt-gray: #ddd;
     $lts-gray: lightslategrey;
     $green: #7faa61;
     $lt-green: #b6f58c;
     $background-dark: #512DA8;
     $background-light: #9575CD;
     $background-pale: #D1C4E9;
     
     @mixin zero-margin($pad-up-down, $pad-left-right) {
       //margin: 0px auto;
       margin: 20px;
       padding: $pad-up-down $pad-left-right;
     }
     
     .jumbotron {
       @include zero-margin(70px, 30px);
       background: $lts-gray;
       color: $white;
       min-height: 150px;
       text-align: justify;
     }
     
     
     .toolbar {
       display: flex;
       margin: auto;
       border-radius: 40px;
     }
     
     .brand {
       margin: 10px 20px;
     }
     
     .brand:active {
       color: lightslategrey;
     }
     
     .welcome {
       color: $lt-green;
       text-align: center;
     }


        
                    
   Update the **Project**'s style file *styles.scss* with the following:
    
    $lt-gray: #ddd;
    $background-dark: #512DA8;
    $background-light: #9575CD;
    $background-pale: #D1C4E9;
    $primary-color-dark:   #512DA8;
    $primary-color:        #673AB7;
    $primary-color-light:  #D1C4E9;
    $primary-color-text:   #FFFFFF;
    $accent-color:         #FFC107;
    $primary-text-color:   #212121;
    $secondary-text-color: #757575;
    $divider-color:        #BDBDBD;
    
    @mixin zero-margin($pad-up-down, $pad-left-right) {
        margin: 0px auto;
        padding: $pad-up-down $pad-left-right;
    }
    
    . . .
    
    
    .background-primary {
        background-color: $background-dark!important;
      }
    .background-accent {
        background-color: $accent-color!important;
      }
    .text-floral-white {
        color: floralwhite!important;
    }
    
    .flex-spacer {
      flex: 1 1 auto;
    }
    
    
    
                        
   Update the *app.component.html* file to include the **Header** as follows (https://material.angular.io/components/toolbar/overview):
    
    <app-header></app-header>
    <app-menu></app-menu>
    
    
        
        
#### Create **Footer** component 

    ng generate component footer
    
    
   Update the **Footer**'s template *footer.component.html* as follows:
    
     <div class="container footer"
          fxLayout="row wrap"
          fxLayout.lt-md="column"
          fxLayoutAlign="center center"
          fxLayoutGap="10px">
     
       <div fxFlex="100" fxFlex.gt-sm="50">
         <div fxLayout="row">
           <div fxFlex="40" fxFlexOffset="20px">
             <h4>Links</h4>
             <mat-list>
               <mat-list-item><a mat-button>Home</a></mat-list-item>
               <mat-list-item><a mat-button>About</a></mat-list-item>
               <mat-list-item><a mat-button>Menu</a></mat-list-item>
               <mat-list-item><a mat-button>Contact</a></mat-list-item>
             </mat-list>
           </div>
           <div fxFlex="55">
             <h4>Our Address</h4>
             <address style="text-size: 80%">
               5022, 445 Mount Eden Road,<br>  Mount Eden, Auckland<br> New Zealand<br>
               <i class="fa fa-phone"></i>: +64 9 977 0102<br>
               <i class="fa fa-fax"></i>: 0800 501 501<br>
               <i class="fa fa-envelope"></i>:
               <a href="mailto:hfs@food.net">hfs@food.net</a>
             </address>
           </div>
         </div>
       </div>
       <div fxFlex="100" fxFlex.gt-sm="45">
         <div style="text-align:center">
           <a mat-icon-button class="btn-google-plus" href="http://google.com/+"><i class="fa fa-google-plus fa-lg"></i></a>
           <a mat-icon-button class="btn-facebook" href="http://www.facebook.com/profile.php?id="><i class="fa fa-facebook fa-lg"></i></a>
           <a mat-icon-button class="btn-linkedin" href="http://www.linkedin.com/in/"><i class="fa fa-linkedin fa-lg"></i></a>
           <a mat-icon-button class="btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter fa-lg"></i></a>
           <a mat-icon-button class="btn-youtube" href="http://youtube.com/"><i class="fa fa-youtube fa-lg"></i></a>
           <a mat-icon-button class="btn-mail" href="mailto:"><i class="fa fa-envelope-o fa-lg"></i></a>
         </div>
       </div>
       <div>
         <p>© Copyright 2018 HFS</p>
       </div>
     </div>

            
              
   Update the **Footer**'s style *footer.component.scss* file as follows:
    
     $white: floralwhite;
     $lt-gray: #ddd;
     $lts-gray: lightslategrey;
     $green: #7faa61;
     $lt-green: #b6f58c;
     $background-dark: #512DA8;
     $background-light: #9575CD;
     $background-pale: #D1C4E9;
     
     @mixin zero-margin($pad-up-down, $pad-left-right) {
       margin: 0px auto;
       padding: $pad-up-down $pad-left-right;
     }
     
     .footer {
       border-radius: unset;
       color: $white;
       //background-color: $background-pale;
       background-color: $lts-gray;
       @include zero-margin(20px, 0px);
     }
     
     .footer a {
       color: $white;
     }
     
     .btn-facebook {
       color: #fff !important;
       background-color: #3b5998 !important;
     }
     
     .btn-google-plus {
       color: #fff !important;
       background-color: #dd4b39 !important;
     }
     
     .btn-youtube {
       color: #fff !important;
       background-color: #ff4b39 !important;
     }
     
     .btn-linkedin {
       color: #fff !important;
       background-color: #007bb6 !important;
     }
     
     .btn-twitter {
       color: #fff !important;
       background-color: #55acee !important;
     }
     
     .btn-mail {
       color: #fff !important;
       background-color: #512DA8 !important;
     }
     

        
        
                        
   Update the *app.component.html* file to include the **Footer** as follows (https://material.angular.io/components/toolbar/overview):
    
    <app-header></app-header>
    <app-menu></app-menu>
    <app-footer></app-footer>
   
   
        
        
#### Create **About** component 

    ng g component about
    
       
   
            
        
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

    
    
