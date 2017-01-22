import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayDateComponent } from './calendar/day-date/day-date.component';
import { ArrangementComponent } from './calendar/arrangement/arrangement.component';
import { VehicleComponent } from './calendar/arrangement/vehicle/vehicle.component';
import { UnallocatedComponent } from './calendar/arrangement/unallocated/unallocated.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayDateComponent,
    ArrangementComponent,
    VehicleComponent,
    UnallocatedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
