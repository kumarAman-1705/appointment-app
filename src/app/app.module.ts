import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent //appointment list component is the part of or related to app-module now.
  ],
  imports: [
    BrowserModule,
    FormsModule // to use forms and two way data binding in angular for all under the declarations above.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
