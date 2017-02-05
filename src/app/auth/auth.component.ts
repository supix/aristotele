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
  email: string;
  form: FormGroup;

  constructor(fb: FormBuilder) { 
    this.email = '';

    this.form = fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])]
    });
  }

  ngOnInit() {
  }

  onSubmit(value): void {
    this.email = value.email;
    //console.log(this.getEmail(), " ", this.isLoggedIn());
  }

  ctrl(name: string): AbstractControl {
    return this.form.controls[name];
  }

  public isLoggedIn(): boolean {
    return this.email != '';
  }

  public getEmail(): string {
    return this.email;
  }
}
