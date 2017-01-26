import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'name': ['', Validators.required],
      'studentName': ['', Validators.required],
      'male': [true, Validators.required],
      'address': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('submitted: ' + JSON.stringify(value));
  }
}
