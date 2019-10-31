import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService} from '../services/auth.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {

  authStatus: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
    this.router.navigate(['']);
  }
}
