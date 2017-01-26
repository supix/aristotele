import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayDateComponent } from './calendar/day-date/day-date.component';
import { ArrangementComponent } from './calendar/arrangement/arrangement.component';
import { VehicleComponent } from './calendar/arrangement/vehicle/vehicle.component';
import { UnallocatedComponent } from './calendar/arrangement/unallocated/unallocated.component';
import { DriverFormComponent } from './driver-form/driver-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayDateComponent,
    ArrangementComponent,
    VehicleComponent,
    UnallocatedComponent,
    DriverFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
