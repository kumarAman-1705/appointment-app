# AppointmentApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Angular course udemy
Install specific version of angular
Install angular CLI of the same version
node -v --> check the version of node js installed

ng new --> To create a new angular application
ng serve --> To start and explore the application


Note --> As soon as we are performing changes in our codebase,the hot reload mechanism will simply update the page,and we dont need to restart the app all the time in local server we are setting up.

# 3 building blocks:-->
#Component --> what the user can actually see and interact with. There is a data binding happening b/w the input fields for ex:- that we display to user and the data that gets stored in the components associated code and storage. We can have many components. Lets say --> one component for listing , one component for creating.

Services --> To handle our data, communicate with RestAPIs and to load data via DB and then they can spread all
of those loaded data and information to all of our components.

Modules --> To structure our angular application and is used for encapsulation, so that our entire application is nice and well structured.

For ex--> lets suppose inside our app --> we are handling employees and invoices.
we would have tons of components. some of them for employee management, some of them for the invoices. And 
then we could create a module for employee and a module for invoices. And each of those modules has well declared or defined those components.

# Angular app is Single Page App (SPA):
Means when we first load the page, we load it one time the entire application but then afterwards as soon
as well go to another url(route) of the same application or we add something to our app, only the changes are 
getting updated. So in that whay we heavily reduce the loading times because we do not have to reload the
entire application and therefore we also reduce the server load because we dont have to update so much data.

Note -> Our angular application runs on a web server --> Requires node.js and npm

Requires --> 
1.angular cli (it is node package) and therefore we have to install node.js->(which is the way
we can run javascript and typescript on web servers), this is why we need it. To host the angular project, we need the angular cli.

2.NPM (Node package manager) --> Comes automatically with node.js

###
in terminal(CMD) --> 1. node -v (to check node.js version) (if not then install --> from https://nodejs.org)-> for this app it is "v16.16.0"
                     2. npm i @angular/cli or npm i @angular/cli@16.1.6 --location = global (version specific ang globally on local)
                     3. ng v (to check the version of angular which we are using)
                     4. ng new appointment-app (to create new application named appointment-app) --> only for new    application
                     5. cd appointment-app
                     6. ng serve

##
node_modules --> has all of our packages and dependencies (real packages with all of its content)
index.html --> main page or home page and we are injecting <app-root> into the <body>.
<app-root> -->(custom html tag) is a selector and all of the action takes place here.
app.compoment.ts --> (first component) is our first building block.

@Component({
  selector: 'app-root', --> the html tag that you can now use to render this component.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
''' 
The selector for this component(appcomponent.ts) here for the app component is called the app root.
Inside index.html we are showing app-root component.
'''
### angular.json
It has configurations for maybe different envs like development, staging, uat, production etc.

# package.json
Related to nodejs or to npm, we have some other infos here for ng serve or building and the most
important part is the dependencies. So if we would hand this over to another developer, we would not 
send all the node modules, we would simply send a very clean version of our application and he will then use
node js and write down 'npm install' basically to install all of the dependencies.

# app-module.ts
The main module for our application.

## one way data binding
To display the content of the property which is 'Hello World' or the title of the application or whatsoever and to show it to our template.

## to create new component
ng g component appointment-list (example)

## Note
1. Later on for big apps, we can attach components in a different way. Maybe if we have invoices and employees etc, we could attach invoices component to the  invoices module and employees component to the employees module.But this local app is quite small, we could just pull all the componens inside of the app-module.
A component is declared inside of a single module.

2. In example in our appointment management system,the appointment itself is a so called model.If we would have
a employee management system, our model would be an employee and if we would also manage invoices inside of that one , we would have two models --> invoice and employee model. 

3. Typically we call this models and therefore we create the folder inside our applications(app) which we call Models.


