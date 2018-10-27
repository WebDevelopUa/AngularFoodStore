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


===================================================================


![Angular App](https://next.angular.io/assets/images/logos/angular/logo-nav@2x.png "Angular App")    [Application](https://next.angular.io/docs)
==========
##### Angular requires Node.js version 8.x or 10.x.

* To check your version, run in a terminal/console window: 

    ``` node -v ``` 

  
* To get Node.js, go to:

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
    
#### Edit Angular component (root component)

    cd health-food-store/src/app/
    
    
    
#### .gitignore file

    template
    
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

    
    
