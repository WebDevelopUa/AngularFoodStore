# HFS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


=================================================================================

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
    

               
#### Create **Home** component 

    ng g component home
                    
                  
#### Create **Contact** component 

    ng g component contact
    
                         
#### Create & Use **Router** Module

    ng g module app-routing
    
    
   Create a new file named *routes.ts* in the *app-routing* folder and update it as follows:
    
    import { Routes } from '@angular/router';
    
    import { MenuComponent } from '../menu/menu.component';
    import { HomeComponent } from '../home/home.component';
    import { AboutComponent } from '../about/about.component';
    import { ContactComponent } from '../contact/contact.component';
    
    export const routes: Routes = [
      { path: 'home',  component: HomeComponent },
      { path: 'menu',     component: MenuComponent },
      { path: 'about',     component: AboutComponent },
      { path: 'contact',     component: ContactComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ];
    
    
       
   Update the *app-routing.module.ts* file to make use of the routes defined above as follows:
    
    import {NgModule} from '@angular/core';
    import {CommonModule} from '@angular/common';
    
    import {RouterModule, Routes} from '@angular/router';
    
    import {routes} from './routes';
    
    @NgModule({
      imports: [
        CommonModule,
        RouterModule.forRoot(routes)
      ],
      exports: [RouterModule],
      declarations: []
    })
    
    export class AppRoutingModule {
    }

     
     
   Update the *app.component.html* file as follows:
    
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>

     
     
   Update the *app.module.ts* file to use the **Routing Module** as follows:
    
    import { AppRoutingModule } from './app-routing/app-routing.module';
    
    @NgModule({
      . . .
      
        imports: [
        . . .,
        AppRoutingModule
      ],
      
      . . .
      
    })


    
   Update the Toolbar in the *header.component.html* file as follows:
    
    <mat-toolbar color="primary">
      <span><img src="/assets/images/logo.png" height=30 width=41></span>
        <a mat-button routerLink="/home" routerLinkActive="active"><span class="fa fa-home fa-lg"></span> Home</a>
        <a mat-button routerLink="/about" routerLinkActive="active"><span class="fa fa-info fa-lg"></span> About</a>
        <a mat-button routerLink="/menu" routerLinkActive="active"><span class="fa fa-list fa-lg"></span> Menu</a>
        <a mat-button routerLink="/contact" routerLinkActive="active"><span class="fa fa-address-card fa-lg"></span> Contact</a>
    </mat-toolbar>



   Update the **Header**'s style *header.component.scss* file as follows:
    
     .active,
     a:active {
       color: $lts-gray;
       background-color: $lt-gray;
     }
     
    
####  Update the **Contact** component *contact.component.html* file:
    
    <div class="container"
         fxLayout="column"
         fxLayoutGap="10px">
    
      <div fxFlex>
        <div>
          <h3 class="text-center">Contact Us</h3>
          <hr>
        </div>
      </div>
    
      <div fxFlex class="margin-40">
        <h3>Location Information</h3>
        <div fxLayout="column" fxLayout.gt-sm="row">
          <div fxFlex="50" fxFlexOffset="20px">
            <h4>Our Address</h4>
            <address>
              5022, 445 Mount Eden Road,<br> Mount Eden, Auckland<br> New Zealand<br>
              <i class="fa fa-phone"></i>: +64 9 977 0102<br>
              <i class="fa fa-fax"></i>: 0800 501 501<br>
              <i class="fa fa-envelope"></i>:
              <a href="mailto:hfs@food.net">hfs@food.net</a>
            </address>
            <p></p>
            <div>
              <a mat-raised-button href="tel:+6499770102"><i class="fa fa-phone"></i> Call</a>
              <a mat-raised-button><i class="fa fa-skype"></i> Skype</a>
              <a mat-raised-button href="mailto:hfs@food.net"><i class="fa fa-envelope-o"></i> Email</a>
            </div>
          </div>
    
          <div fxFlex="40">
            <h4>Map of our Location</h4>
          </div>
    
        </div>
    
      </div>
    </div>

     
    
####  Update the **About** component *about.component.html* file:
    
    <div class="container"
         fxLayout="column"
         fxLayoutGap="10px">
    
      <div fxFlex>
        <div>
          <h3 class="text-center">About Us</h3>
          <hr>
        </div>
      </div>
    
      <div class="margin-40"
           fxLayout="row"
           fxLayout.sm="column"
           fxLayout.xs="column"
           fxLayoutAlign.xs="start center"
           fxLayoutAlign.sm="start center"
           fxLayoutAlign.gt-sm="center center"
           fxLayoutGap="10px">
    
    
        <div fxFlex fxFlex.gt-sm="50%">
          <h1 class="welcome" title="Health Food Store">Welcome to HFS! <i class="material-icons md-48">face</i></h1>
          <p class="text-justify">
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
    
      </div>
    </div>

                 
####  Update the **Home** component *home.component.html* file:
    
   Update *dish.ts* file as follows:
   
    export class Dish {
        id: number;
        name: string;
        image: string;
        category: string;
        label: string;
        price: string;
        featured: boolean;
        description: string;
    }
    
    
   Update the *DISHES* constant in *dishes.ts* to add an id to each element, and also add a *Featured property* to each dish as follows:

    [
        {
            id: 0,
            name: 'Uthappizza',
            . . .
            featured: true,
            
            . . .
        },
                                       
     
        
   Update the dish **Service** in *dish.service.ts* to return a *Featured dish* as follows:

      getDish(id: number): Dish {
        return DISHES.filter((dish) => (dish.id === id))[0];
      }
    
      getFeaturedDish(): Dish {
        return DISHES.filter((dish) => dish.featured)[0];
      }
                                       
          
        
   Update the *home.component.html* file as follows to add cards to show the *Featured dish* in the Home page:

    <div class="container"
         fxLayout="row"
         fxLayout.sm="column"
         fxLayout.xs="column"
         fxLayoutAlign.gt-md="space-around center"
         fxLayoutGap="10px">
    
        <mat-card *ngIf="dish" fxFlex>
          <mat-card-header>
            <div mat-card-avatar></div>
            <mat-card-title>
              <h3>{{dish.name | uppercase}}</h3>
            </mat-card-title>
          </mat-card-header>
          <img mat-card-image src={{dish.image}} alt={{dish.name}}>
          <mat-card-content>
            <p>{{dish.description}}
            </p>
          </mat-card-content>
        </mat-card>
    </div>
                                       
     
    
            
   Update the *home.component.ts* file to fetch and provide the *Featured dish* for the view:

    import { Dish } from '../shared/dish';
    import { DishService } from '../services/dish.service';
    
    . . .
    
    export class HomeComponent implements OnInit {
    
      dish: Dish;
    
      constructor(private dishservice: DishService) { }
    
      ngOnInit() {
        this.dish = this.dishservice.getFeaturedDish();
      }

                                       
     
               
####  Add **Promo** component to **Homepage**  *home.component.html* file:
    
    
   Create *promotion.ts* file in *shared* folder as follows:
   
    export class Promotion {
      id: number;
      name: string;
      image: string;
      category: string;
      label: string;
      price: string;
      featured: boolean;
      description: string;
    }

   
       
   Create *promotions.ts* file in *shared* folder as follows:
   
    export const PROMOTIONS = [
      
      {
        id: 2,
        name: 'Chinese Cabbage',
        image: '/assets/images/cabbage.png',
        category: 'vegetables',
        label: 'New',
        price: '0.55',
        featured: true,
        description: 'Fresh green organic Chinese Cabbage'
      }
    
    ];

   
           
   Create promotion **Service**  *promotion.service.ts* to return a *Promotion dish* as follows:

    ng g service services/promotion
    
    import {Promotion} from "../shared/promotion";
    import {PROMOTIONS} from "../shared/promotions";
       
           
   Create promotion **Service**  *promotion.service.ts* to return a *Promotion dish* as follows:

    ng g service services/promotion
    
    import {Promotion} from "../shared/promotion";
    import {PROMOTIONS} from "../shared/promotions";
    
    @Injectable({
      providedIn: 'root'
    })
    
    
    export class PromotionService {
    
      constructor() {
      }
    
      getPromotions(): Promotion[] {
        return PROMOTIONS;
      }
      getPromotion(id: number): Promotion {
        return PROMOTIONS.filter((promo) => (promo.id === id))[0]
      }
    
      getFeaturedPromotion(): Promotion {
        return PROMOTIONS.filter((promotion) => (promotion.featured))[0]
      }
    
    }

    
              
   Import promotion **Service**  *promotion.service.ts* to AppModule *app.module.ts*:


    import {PromotionService} from "./services/promotion.service";
    
    @NgModule({
      declarations: [
      ],
      imports: [
      ],
      providers: [DishService, PromotionService],
    })

     
  Update the *home.component.html* file as follows to add cards to show the *Promo dish* in the Home page:

    <div class="container"
         fxLayout="row"
         fxLayout.sm="column"
         fxLayout.xs="column"
         fxLayoutAlign.gt-md="space-around center"
         fxLayoutGap="10px">
    
    <mat-card *ngIf="promotion" fxFlex>
      <mat-card-header>
        <div mat-card-avatar></div>
        <mat-card-title>
          <h3>{{promotion.name | uppercase}}</h3>
        </mat-card-title>
      </mat-card-header>
      
      <img mat-card-image src={{promotion.image}} alt={{promotion.name}}>
      
      <mat-card-content>
        <p>{{promotion.description}}
        </p>
      </mat-card-content>
    </mat-card>
    
    </div>
   
   
       
  Update the *home.component.ts* file to fetch and provide promotion for the view:

    import {Promotion} from "../shared/promotion";
    import {PromotionService} from "../services/promotion.service";
    
    
    export class HomeComponent implements OnInit {
      promotion: Promotion;
    
      constructor(private promotionservice: PromotionService) {
      }
    
      ngOnInit() {
        this.promotion = this.promotionservice.getFeaturedPromotion();
      }
    
    }


               
#### Create **DishDetail** component 

    ng g component dishdetail
           
  
   Open the *routes.ts and* add the following route to it (TO THE END):
   
    { path: 'dishdetail/:id',     component: DishdetailComponent }
     
     
       
   Open *menu.component.html* and update it as follows:
   
    <mat-grid-tile *ngFor="let dish of dishes" [routerLink]="['/dishdetail', dish.id]">
     
     
            
   Open *dishdetail.component.ts* and update it as follows:
   
    import { DishService } from '../services/dish.service';
    
    import { Params, ActivatedRoute } from '@angular/router';
    import { Location } from '@angular/common';
    
    . . .
    
    export class DishdetailComponent implements OnInit {
    
      dish: Dish;
    
      constructor(private dishservice: DishService,
        private route: ActivatedRoute,
        private location: Location) { }
    
      ngOnInit() {
        const id = +this.route.snapshot.params['id'];
        this.dish = this.dishservice.getDish(id);
      }
    
      goBack(): void {
        this.location.back();
      }
    
    }
     
     
     
   Open *dishdetail.component.html* and update it as follows:
   
    <div class="container text-center"
         fxLayout="column"
         fxLayoutGap="10px">
    
      <div fxFlex>
        <mat-card>
          <mat-card-header class="center">
            <mat-card-title>
              <h3>{{dish.name | uppercase}}</h3>
            </mat-card-title>
          </mat-card-header>
          <img height="auto" width="50%" src={{dish.image}} alt={{dish.name}}>
          <mat-card-content>
            <p>{{dish.description}}
            </p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button (click)="goBack()">BACK</button>
            <button mat-button>LIKE</button>
            <button mat-button>SHARE</button>
          </mat-card-actions>
        </mat-card>
      </div>
    
    </div>
      
      
   mp3   - >   https://youtu.be/fFng8VhutKc https://youtu.be/HAWm0hIYeOI
    
               
#### Create **SideBar** & **LoginForm** component 

    ng g component login
           
  
   Import the **Forms Module** in *app.module.ts* by adding the following import:
   
    import {MatIconModule, MatSidenavModule} from "@angular/material";
    import {FormsModule} from "@angular/forms";
    
    @NgModule({
      declarations: [
      ],
      imports: [
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        FormsModule
      ],
   
   
   Open *header.component.html* & add **Login** button:
   
    <div style="height: 100vh;">
    
      <!-- #1 Navigation bar -->
      <mat-toolbar>
        <mat-toolbar-row>
    
          <!-- Toggle button -->
          <button mat-icon-button (click)="sidenav.toggle()" fxShow="true" fxHide.gt-sm>
            <mat-icon>menu</mat-icon>
          </button>
    
          <!-- Logo -->
          <a routerLink="/home" title="Health Food Store">
            <img src="/assets/images/logo.svg" alt="Logo" height=30 width=auto>
          </a>
    
          <!-- Fill space between logo and buttons -->
          <span class="fill-space"></span>
    
          <!-- The following menu items will be hidden on both SM and XS screen sizes -->
          <div fxShow="true" fxHide.lt-md="true">
    
            <a mat-button routerLink="/home" routerLinkActive="active"><span class="fa fa-home fa-lg"></span> Home </a>
            <a mat-button routerLink="/about" routerLinkActive="active"><span class="fa fa-info fa-lg"></span> About </a>
            <a mat-button routerLink="/menu" routerLinkActive="active"><span class="fa fa-list fa-lg"></span> Menu </a>
            <a mat-button routerLink="/contact" routerLinkActive="active"><span class="fa fa-address-card fa-lg"></span>
              Contact </a>
            <a mat-button (click)="openLoginForm()"><span class="fa fa-sign-in fa-lg"></span> Login </a>
    
          </div>
    
        </mat-toolbar-row>
      </mat-toolbar>
    
      <!-- #2 Sidebar https://material.angular.io/components/sidenav/overview -->
      <!--<mat-sidenav-container  >-->
      <!--<mat-sidenav-container autosize>-->
      <mat-sidenav-container fxFlexFill>
        <mat-sidenav #sidenav>
    
          <mat-nav-list>
    
            <a mat-list-item routerLink="/home" routerLinkActive="active">
              <mat-icon>home</mat-icon> &nbsp;
              Home
            </a>
    
            <a mat-list-item routerLink="/about" routerLinkActive="active">
              <mat-icon>info</mat-icon> &nbsp;
              About
            </a>
    
            <a mat-list-item routerLink="/menu" routerLinkActive="active">
              <mat-icon>list</mat-icon> &nbsp;
              Menu
            </a>
    
            <a mat-list-item routerLink="/contact" routerLinkActive="active">
              <span class="fa fa-address-card fa-lg"></span> &nbsp;
              Contact
            </a>
    
            <a (click)="openLoginForm()" mat-list-item>
              <mat-icon> input</mat-icon> &nbsp;
              Login / SignIn
            </a>
    
            <a (click)="sidenav.toggle()" mat-list-item>
              <mat-icon>close</mat-icon> &nbsp;
              Close
            </a>
    
          </mat-nav-list>
    
        </mat-sidenav>
    
        <!-- Main content Alternative position -->
        <!--<mat-sidenav-content fxFlexFill>Main content</mat-sidenav-content>-->
        <mat-sidenav-content fxFlexFill>
          <router-outlet></router-outlet>
        </mat-sidenav-content>
    
    
      </mat-sidenav-container>
    
    </div>
     
        
  
   Open the template *login.component.html* and adding the following code:
   
    <mat-toolbar>
        Login
      <span class="flex-spacer"></span>
      <button mat-button mat-dialog-close>&times;</button>
    </mat-toolbar>

               
  
   Open *login.component.ts* and adding the following code:
   
    import {MatDialog, MatDialogRef} from '@angular/material';

       
  
   To make this component be opened from another component, you need to declare this as an **EntryComponent** in the **AppModule** *app.module.ts*, by adding the following to the **NgModule** decorator:
   
    import { MatDialogModule } from '@angular/material/dialog';
    
    @NgModule({
    
      imports: [
        MatDialogModule,
      ],
      
    entryComponents: [LoginComponent], 
      
    })

       
   To trigger the Dialog view of the **Login component**, open *header.component.ts* and update it as follows:
   
    import { MatDialog, MatDialogRef } from '@angular/material';
    import { LoginComponent } from '../login/login.component';
    
    export class HeaderComponent implements OnInit {
    
      constructor(public dialog: MatDialog ) { }
    
      ngOnInit() {
      }
    
      openLoginForm() {
        this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
      }
    
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

    
    

