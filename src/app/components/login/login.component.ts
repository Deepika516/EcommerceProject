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
  user: IUser | undefined;
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
      const email = this.loginform.value.email;
      const password = this.loginform.value.password;
      this.authService
        .onLogin(email, password)
        .pipe(take(1))
        .subscribe((resp: IUser[]) => {
          const user = resp.find((e: IUser) => {
            alert('login successfull');
          });
        });
    }
  }
}

//   if (user) {
//     debugger;
//     console.log(user);
//     localStorage.setItem('User', JSON.stringify(user));
//     this.authService.setCurrentUser(user);
//     alert('login successfull');
//   } else {
//     alert('User Not found please try again');
//   }
//   this.user = this.authService.getCurrentUser();
//   console.log(this.user);
// });
// }
// this.authService;
