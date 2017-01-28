import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent implements OnInit {
  myForm: FormGroup;
  studentNameCtrl: AbstractControl;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'name': ['', Validators.required],
      'studentName': ['', Validators.required],
      'male': [true, Validators.required],
      'address': ['', Validators.required]
    });
    this.studentNameCtrl = this.myForm.controls['studentName'];
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('submitted: ' + JSON.stringify(value));
  }
}
