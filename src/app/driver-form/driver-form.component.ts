import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators
} from '@angular/forms';
import { dayOfWeekNames } from '../utils/dayOfWeekNames';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent implements OnInit {
  myForm: FormGroup;
  nameCtrl: AbstractControl;
  studentNameCtrl: AbstractControl;
  defaultExitTimeCtrl: AbstractControl;
  availDays: string[];

  constructor(fb: FormBuilder) {
    this.availDays = [];
    this.myForm = fb.group({
      'name': ['', Validators.required],
      'studentName': ['', Validators.required],
      'defaultExitTime': ['', Validators.required]
    });
    
    //shortcut to control references
    this.nameCtrl = this.myForm.controls['name'];
    this.studentNameCtrl = this.myForm.controls['studentName'];
    this.defaultExitTimeCtrl = this.myForm.controls['defaultExitTime'];
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('submitted: ' + JSON.stringify(value));
  }

  daysOfWeekNames(): string[] {
    return dayOfWeekNames;
  }

  clickAvailDay(day) {
    let idx = this.availDays.indexOf(day);
    if (idx >= 0)
      this.availDays.splice(idx, 1);
    else
      this.availDays.push(day);
  }

  isSelectedDay(day): boolean {
    return this.availDays.indexOf(day) >= 0;
  }
}
