import {Component, OnInit} from '@angular/core';
import {Checkpoint} from '../models/checkpoint';
import {CheckpointService} from '../services/checkpoint.service';
import {Router} from '@angular/router';
import {Team} from '../models/team';
import {faPen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkpoint-list',
  templateUrl: './checkpoint-list.component.html',
  styleUrls: ['./checkpoint-list.component.scss']
})
export class CheckpointListComponent implements OnInit {
  checkpoints: Checkpoint[];
  error: any;
  teams: Team[];
  faPen = faPen;
  constructor(private checkpointService: CheckpointService, private router: Router) {
  }

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

  gotoDetail(id: string): void {
    this.router.navigate(['/checkpoints', id]);
  }
  onListe(checkpoint: Checkpoint): void {
    this.checkpoints.push(checkpoint);

  }


}

