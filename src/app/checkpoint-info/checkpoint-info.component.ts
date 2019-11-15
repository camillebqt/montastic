import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Checkpoint} from '../models/checkpoint';
import {CheckpointService} from '../services/checkpoint.service';
import {ConfirmationDialogService} from '../confirm-dialog/confirmation-dialog.service';
import {Team} from '../models/team';
import {faUsers} from '@fortawesome/free-solid-svg-icons';
import {faFileSignature} from '@fortawesome/free-solid-svg-icons/faFileSignature';

@Component({
  selector: 'app-checkpoint-info',
  templateUrl: './checkpoint-info.component.html',
  styleUrls: ['./checkpoint-info.component.scss']
})
export class CheckpointInfoComponent implements OnInit {
  @Input() checkpoint: Checkpoint
  error: any;
  teams: Team[];
  faUsers = faUsers;
  faFileSignature = faFileSignature;
  navigated = false; // true if navigated here


  constructor(
    private checkpointService: CheckpointService,
    private route: ActivatedRoute,
    private router: Router,
    private confirmationDialogService: ConfirmationDialogService
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params.id !== undefined) {
        const id: string = params.id;
        this.navigated = true;
        this.checkpointService.getCheckpoint(id).subscribe(checkpoint => (this.checkpoint = checkpoint));
      } else {
        this.navigated = false;
        this.checkpoint = new Checkpoint();
      }
    });
    this.getTeams();
  }
  getTeams(): void {
    this.checkpointService
      .getTeams()
      .subscribe(
        teams => (this.teams = teams),
        error => (this.error = error)
      );
  }

  save(): void {
    this.checkpointService.save(this.checkpoint).subscribe(checkpoint => {
      this.checkpoint = checkpoint;
      this.router.navigate(['/checkpoints']);
    }, error => (this.error = error));
  }

  delete(): void {
    this.checkpointService.delete(this.checkpoint).subscribe(checkpoint => {
      this.checkpoint = checkpoint;
      this.router.navigate(['/checkpoints']);
    }, error => (this.error = error));
  }

  public openConfirmDialog() {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => {
        console.log('User confirmed:', confirmed);
        if (confirmed) {
          this.delete();
        }
      })
      .catch((error) => console.log(error));
  }
}
