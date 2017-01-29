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
  nameCtrl: AbstractControl;
  studentNameCtrl: AbstractControl;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'name': ['', Validators.required],
      'studentName': ['', Validators.required],
      
    });
    this.nameCtrl = this.myForm.controls['name'];
    this.studentNameCtrl = this.myForm.controls['studentName'];
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('submitted: ' + JSON.stringify(value));
  }
}
