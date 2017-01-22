import { Component, OnInit } from '@angular/core';
import { Calendar } from './calendar.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendar: Calendar;

  constructor() { 
    this.calendar = new Calendar();
  }

  getDates() : Date[] {
    return this.calendar.getVisibleDates();
  }

  ngOnInit() {
  }

}
