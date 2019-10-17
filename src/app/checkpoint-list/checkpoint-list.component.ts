import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Checkpoint} from '../models/checkpoint';
import {CheckpointService} from '../models/checkpoint.service';
import {Router} from '@angular/router';
import {Team} from '../models/team';

@Component({
  selector: 'app-checkpoint-list',
  templateUrl: './checkpoint-list.component.html',
  styleUrls: ['./checkpoint-list.component.scss']
})
export class CheckpointListComponent implements OnInit {
  checkpoints: Checkpoint[];
  error: any;
  teams: Team[];
  constructor(private checkpointService: CheckpointService, private router: Router) { }

  ngOnInit(): void {
    this.getCheckpoints();
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
  getCheckpoints(): void {
    this.checkpointService
      .getCheckpoints()
      .subscribe(
        checkpoints => (this.checkpoints = checkpoints),
        error => (this.error = error)
      );
  }

  getCheckpoint(id: string) {
    this.checkpointService
      .getCheckpoint(id)
      .subscribe(
        checkpoints => (checkpoints = checkpoints),
        error => (this.error = error)
      );
  }
  gotoDetail(id: string): void {
    this.router.navigate(['/checkpoints', id]);
  }
}

