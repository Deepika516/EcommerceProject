import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }
  onUserLogin() {
    debugger;
    {
      if (this.loginform.invalid) {
        return;
      }
      this.authService
        .onLogin()
        .pipe(take(1))
        .subscribe((resp: IUser[]) => {
          const mail = this.loginform.value.email;
          const pass = this.loginform.value.password;
          const check = resp.find((e: IUser) => {
            return e.email === mail && e.password === pass;
          });
          if (check) {
            alert('login successfull');
            localStorage.setItem('currentUser', mail);
          } else {
            alert('User Not found please try again');
          }
        });
    }
  }
}
