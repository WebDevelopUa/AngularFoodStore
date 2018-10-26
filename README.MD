![Angular App](https://next.angular.io/assets/images/logos/angular/logo-nav@2x.png "Angular App")    [Application](https://next.angular.io/docs)
==========
##### Angular requires Node.js version 8.x or 10.x.

* To check your version, run node -v in a terminal/console window.
  
* To get Node.js, go to [nodejs.org](https://nodejs.org).

##Install/Upgrade NPM & Angular CLI globally

    npm install npm@latest -g
    npm install -g @angular/cli

##App Installing process / Create a workspace and initial application

    node -v
    npm -v
    ng v
    
    npm init (if package.json is absent)
    npm install lite-server --save-dev
    
    ng new my-app  (if App is not created)
    
    
####Start the development server / Run App

    cd my-app
    
    ng serve --open
    Local: http://localhost:4200/
    
    or
    
    npm start
    Local: http://localhost:3000