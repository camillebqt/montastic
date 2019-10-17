import {Component, OnInit} from '@angular/core';
import {CheckpointService} from '../models/checkpoint.service';
import {Checkpoint} from '../models/checkpoint';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {Team} from '../models/team';
import {FormControl, FormGroup} from '@angular/forms';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-add-checklist',
  templateUrl: './add-checklist.component.html',
  styleUrls: ['./add-checklist.component.scss']
})
export class AddChecklistComponent implements OnInit {
  checkpointsForm = new FormGroup({
    title: new FormControl(''),
    project_id: new FormControl('')
  });
  error: any;
  navigated = false;
  teams: Team[];
  checkpoint: Checkpoint;
  private updateSubscription: Subscription;
  constructor(private checkpointService: CheckpointService, private router: Router, private route: ActivatedRoute) {}

  save(): void {
    this.checkpointService.save(this.checkpoint).subscribe(checkpoint => {
      this.checkpoint = checkpoint;
      this.router.navigate(['/checkpoints']);
    }, error => (this.error = error));
  }
  getTeams(): void {
    this.checkpointService
      .getTeams()
      .subscribe(
        teams => (this.teams = teams),
        error => (this.error = error)
      );
  }
  ngOnInit(): void {
    this.getTeams();
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
  }
}
