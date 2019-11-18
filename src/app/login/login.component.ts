import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthService} from '../services/auth.service';
import {API_KEY} from '../models/global';
import {CheckpointService} from '../services/checkpoint.service';
import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() apiKeyInput: string = API_KEY;
  authStatus: boolean;
  returnUrl: string;
  constructor(private authService: AuthService, private router: Router, private checkpointService: CheckpointService,
              private route: ActivatedRoute, private storageService: StorageService) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/checkpoints';
    if (this.authService.checkAuth()) {
      this.authStatus = this.authService.isAuth;
      this.router.navigateByUrl(this.returnUrl);
    }
  }
  onSignIn() {
    this.storageService.setStorage('API_KEY', this.apiKeyInput)
    this.checkpointService.getWorkspace().subscribe(
      data => {
        this.storageService.setStorage('workspace_id', data.workspace_id);
        this.authService.signIn().subscribe(
          (value) => {

            this.authStatus = this.authService.isAuth;
            this.router.navigateByUrl(this.returnUrl);
          }
        );
      },
    );
  }
}
