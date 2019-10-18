import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CheckpointService} from '../models/checkpoint.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Team} from '../models/team';
@Component({
  selector: 'app-checklist-team',
  templateUrl: './checklist-team.component.html',
  styleUrls: ['./checklist-team.component.scss']
})
export class ChecklistTeamComponent implements OnInit {
  @Input() team: Team;
  @Output() close = new EventEmitter();
  teams: Team[];
  selectedTeam: Team;
  error: any;
  addingTeam = false;
  constructor(private checkpointService: CheckpointService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
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
  onSelect(team: Team): void {
    this.selectedTeam = team;
    this.addingTeam = false;
  }
/*  getTeam(id: string) {
    this.checkpointService
      .getTeam(id)
      .subscribe(
        teams => (teams = teams),
        error => (this.error = error)
      );
  }*/
  gotoCheckpoints(): void {
    this.router.navigate(['/checkpoints', this.selectedTeam.id]);
    this.onSelect(this.team);
  }

}

