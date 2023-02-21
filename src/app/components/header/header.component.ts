import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxRolesService, NgxPermissionsService } from 'ngx-permissions';
import { Observable } from 'rxjs/internal/Observable';
import { AutherizationService } from 'src/app/services/autherization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn$!: Observable<boolean>;

  constructor(
    private router: Router,
    private authorizationService: AutherizationService,
    private rolesService: NgxRolesService,
    private permissionsService: NgxPermissionsService
  ) {}

  ngOnInit(): void {
    this.isUserLoggedIn$ = this.authorizationService.IsLoggedIn;
  }
  // for logout it remove the currentUser from local storage
  onLogout() {
    this.authorizationService.logout();
    localStorage.removeItem('currentUser');
  }
}
