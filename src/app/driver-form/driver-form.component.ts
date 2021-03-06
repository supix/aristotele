import { Input, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  FormControl,
  Validators
} from '@angular/forms';

import { dayOfWeekNames } from '../utils/dayOfWeekNames';
import { DayOfWeek } from '../utils/day-of-week.enum';
import { Driver } from './driver.model';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent implements OnInit {
  @Input() driver: Driver = new Driver();

  myForm: FormGroup;
  nameCtrl: AbstractControl;
  studentNameCtrl: AbstractControl;
  defaultExitTimeCtrl: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'name': [this.driver.name, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      'studentName': [this.driver.studentName, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      'defaultExitTime': [this.driver.defaultExitTime, Validators.required]
    });

    dayOfWeekNames.forEach(
      (d, i) => 
        this.myForm.addControl('wd_' + i,
          new FormControl(this.driver.defaultDaysOfAvailability.indexOf(i) >= 0))
    );

    //shortcut to control references
    this.nameCtrl = this.myForm.controls['name'];
    this.studentNameCtrl = this.myForm.controls['studentName'];
    this.defaultExitTimeCtrl = this.myForm.controls['defaultExitTime'];
  }

  ngOnInit() {
  }

  onSubmit(value): void {
    //construct array of DayOfWeek from received input
    let days: DayOfWeek[] = [];
    dayOfWeekNames.forEach((d, idx) => {
      let name = 'wd_' + idx;
      if (value[name])
        days.push(idx);
    });

    var driver = new Driver(
      value.name,
      value.studentName,
      value.defaultExitTime,
      days);

    console.log("Submitted: ", JSON.stringify(driver));
  }

  getDaysOfWeek(): string[] {
      return dayOfWeekNames;
  }
}
