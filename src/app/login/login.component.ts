import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AuthService} from '../services/auth.service';
import {API_KEY} from '../models/global';
import {CheckpointService} from '../services/checkpoint.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() apiKeyInput: string = API_KEY;
  authStatus: boolean;
  constructor(private authService: AuthService, private router: Router, private checkpointService: CheckpointService) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }
  onSignIn() {
    sessionStorage.setItem('API_KEY', this.apiKeyInput);
    this.checkpointService.getWorkspace().subscribe(
      data => {
        sessionStorage.setItem('workspace_id', data.workspace_id);
        this.authService.signIn().subscribe(
          (value) => {

            this.authStatus = this.authService.isAuth;
            // this.router.navigate(['checkpoints']);this.redirectUrl
            this.router.navigate([this.authService.redirectUrl]);
          }
        );
      },
    );
  }
}
