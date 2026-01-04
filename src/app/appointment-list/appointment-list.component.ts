import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core'; //Life cycle hook used to perform component initialization tasks.
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
// export class AppointmentListComponent {

//   appointment: Appointment = {
//     id: 1,
//     title: "Take dog for a walk",
//     date: new Date('2023-07-30')
//   } 
// }

export class AppointmentListComponent implements OnInit { // implement OnInit interface to use ngOnInit lifecycle hook
  

  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = []

  ngOnInit(): void {
    // console.log("got loaded");
    let savedAppointments = localStorage.getItem("appointments")
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [] // do we have something in local storage? and parse it back to array of objects : if nothing is there, initialize it to an empty array.
  } // load something from the local storage when the component initializes but if nothing is there, initialize it to an empty array.

  //Angular calls ngOnInit() automatically after the component is created and its input properties are bound. You don't manually call it.
  //ngOnInit() should load appointments from local storage when the component initializes.
  // addAppointment(){
  //   alert(this.newAppointmentTitle + " " + this.newAppointmentDate); //small window opens at alert
  // }
  addAppointment(){
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate){ // create an appointent only if title is not empty and date is valid
      let newAppointment: Appointment = {
        id: Date.now(), // unique id based on timestamp
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      } 
      this.appointments.push(newAppointment);
      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();
      // alert(this.appointments.length); // to check how many appointments are there
      localStorage.setItem("appointments", JSON.stringify(this.appointments)); // store appointments array in local storage as a string
    }
  }
  deleteAppointment(index: number){
    this.appointments.splice(index, 1); // remove 1 element at the given index
    localStorage.setItem("appointments", JSON.stringify(this.appointments)); //update local storage(session storage) after deletion
  }
}
// class property or class field or class member variable is a variable under a class defined for a data type
// Here above it is a string, but generally in real world applications, it can be an object or array of objects representing appointments with multiple properties like date, time, description, etc.
// In interface, its more of a contract on how an object has to look like in the end.
