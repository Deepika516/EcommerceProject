import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { AutherizationService } from 'src/app/services/autherization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginform!: FormGroup;
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private autherizationService: AutherizationService
  ) {}

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }
  // in this function it check if login is invalid it returns
  // then it will check from the api if it matches the email and password it goes in next check
  // then it get the email id n password wat we fill and check if its tru it gives true
  onUserLogin() {
    {
      if (this.loginform.invalid) {
        return;
      } else if (this.loginform.valid) {
        this.autherizationService.login(this.loginform.value);
      }
      this.authService
        .onLogin()
        .pipe(take(1))
        .subscribe((resp: IUser[]) => {
          const mail = this.loginform.value.email;
          const pass = this.loginform.value.password;
          localStorage.setItem('currentUser', mail);
          const check = resp.find((e: IUser) => {
            return e.email == 'tiny123@gmail.com' && e.password == 'tiny1234';
          });
          if (check) {
            alert('login successfull');
          } else {
            alert('User Not found please try again');
          }
        });
    }
    this.authService;
  }
}
