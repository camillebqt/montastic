import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { AuthService} from '../models/auth.service';
import {API_KEY} from '../models/global';
import {CheckpointService} from '../models/checkpoint.service';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  @Input() apiKeyInput: string = API_KEY;
  authStatus: boolean;
  constructor(private authService: AuthService, private router: Router, private checkpointService: CheckpointService) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn() {
    sessionStorage.setItem('API_KEY', this.apiKeyInput);
    this.checkpointService.getWorkspace().subscribe(
      data => (sessionStorage.setItem('workspace_id', data.workspace_id))
    );
    this.authService.signIn().then(

      () => {

        this.authStatus = this.authService.isAuth;
        this.router.navigate(['checkpoints']);
      }
    );
  }


}
