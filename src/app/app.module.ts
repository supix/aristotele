import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DayDateComponent } from './calendar/day-date/day-date.component';
import { ArrangementComponent } from './calendar/arrangement/arrangement.component';
import { VehicleComponent } from './calendar/arrangement/vehicle/vehicle.component';
import { UnallocatedComponent } from './calendar/arrangement/unallocated/unallocated.component';
import { DriverFormComponent } from './driver-form/driver-form.component';
import { AuthComponent } from './auth/auth.component';
import { MustBeLoggedIn } from './activation/must-be-logged-in';

const routes: Routes = [
  { path: '', redirectTo: 'calendar', pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent },
  { path: 'signIn', component: DriverFormComponent, canActivate: [MustBeLoggedIn] },
  { path: 'login', component: AuthComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DayDateComponent,
    ArrangementComponent,
    VehicleComponent,
    UnallocatedComponent,
    DriverFormComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    Ng2DatetimePickerModule
  ],
  providers: [MustBeLoggedIn],
  bootstrap: [AppComponent]
})
export class AppModule { }
