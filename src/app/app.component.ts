import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //we export to make the class accessible outside this file
  title = 'appointment-app';
}

// /// Learning Typescript
// export class AppsComponent { //we export to make the class accessible outside this file
//   title = 'appointment-app'; // Title property for the component i.e string
//   items = ['Item 1', 'Item 2', 'Item 3']; // Sample array of items of type string
//   log(text: string): void { // Method to log text to the console (function that we have on method is log, has parameter of type string). Void is the return type of the function i.e it does not return anything.
//     var message = 'Message' + text; // Message + parameter of the function i.e 'text'
//     console.log(message); // Log the message to the console
//   } 
// }
//The methods are public in typescript by default. Hence we do not need to explicitly specify the access modifier as public.
// To make the method private we can use the private access modifier before the method name.
// private log(text: string): void {...} // return type is void but you can omit these if they are inferable from what the method returns.
// sum (a: number, b: number): number { return a + b; } // Method to sum two numbers and return the result (return type is number but you can omit it if inferable).

// export class AppsComponent {
// // Remember that 'this' keyword is used to access class properties and methods within the class.
//   f() {
//     this.log('Hello World'); // Calling the private log method within the class
//     this.log('b')
//   }
// }
// You van omit semicolon if you write one statement per line.
//Primitive types in Typescript
// var a: number
// var a: string
// var a: boolean
// var app: AppComponent = new AppComponent(); // create an instance of AppComponent class
// var a: number[] // array of numbers
// var a: string[] // array of strings
// var a: boolean[] // array of booleans
// var app : AppComponent[]


// you can create instances of custom classes by declaring variables with a class type and using the new keyword.

export class AppsComponent {
  title = 'appointment-app';
  
  log(text: string): void {
    console.log(text);
  }
}

// Create a variable of type AppsComponent
var appComponent: AppsComponent = new AppsComponent();
//var appComponent -> Declare a variable named appComponent
// : AppsComponent -> Type annotation - variable must be of type AppsComponent
// = new AppsComponent(); -> Instantiate a new AppsComponent object(instance of AppsComponent class) and assign it to the variable

//This creates an object with all the properties and methods of the AppsComponent class. TypeScript ensures type safety—you can't assign something else to appComponent unless it's an AppsComponent instance.


// Now you can use it
appComponent.log('Hello');  // calls the method
console.log(appComponent.title);  // accesses the property