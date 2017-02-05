import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder,
  FormGroup,
  AbstractControl,
  Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loggedIn: boolean;
  form: FormGroup;

  constructor(fb: FormBuilder) { 
    this.loggedIn = !!localStorage.getItem('username');

    this.form = fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])]
    });
  }

  ngOnInit() {
  }

  onSubmit(value): void {
    localStorage.setItem('username', value.email);
  }

  ctrl(name: string): AbstractControl {
    return this.form.controls[name];
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
