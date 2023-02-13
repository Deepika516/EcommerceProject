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
  onUserLogin() {
    debugger;
    {
      if (this.loginform.invalid) {
        return;
      } else if (this.loginform.valid) {
        this.autherizationService.login(this.loginform.value);
      }
      debugger;
      this.authService
        .onLogin()
        .pipe(take(1))
        .subscribe((resp: IUser[]) => {
          console.log(resp);
          const mail = this.loginform.value.email;
          const pass = this.loginform.value.password;
          localStorage.setItem('currentUser', mail);
          const check = resp.find((e: IUser) => {
            return e.email === mail && e.password === pass;
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

  // this.authService.login().pipe(take(1)).subscribe((respData:IUser[])=>
  //   {
  //    const email_value=this.loginform.value.email;
  //    const password_value=this.loginform.value.password;
  //    localStorage.setItem("currentUser",email_value)
  //       const check_user=respData.find((u:IUser)=>{
  //         return u.email===email_value && u.password===password_value
  //       })
  //       if(check_user)
  //       {
  //         alert("Login Successfull");
  //       }
  //       else
  //       alert("User Not Found");
  //   })
  // }
  // }
}
