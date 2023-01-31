import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  defaultGender = 'Male';
  gender = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
    { id: '3', value: 'Others' },
  ];

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      first_name: [''],
      last_name: [''],
      gender: [''],
      email: [''],
      password: [''],
    });
  }
  onSubmit(form: NgForm) {
    debugger;
    const firstName = form.value.first_name;
    const lastName = form.value.last_name;
    const gen = form.value.gender;
    const email = form.value.email;
    const pass = form.value.password;
    this.authService
      .onsignUp(firstName, lastName, gen, email, pass)
      .subscribe((resp: IUser[]) => {
        alert('Signup Successfull');
        console.log(resp);
      });
  }
}
