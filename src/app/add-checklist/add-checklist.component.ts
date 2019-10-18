import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CheckpointService} from '../models/checkpoint.service';
import {Checkpoint} from '../models/checkpoint';
import {ActivatedRoute, Router} from '@angular/router';
import {Team} from '../models/team';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-checklist',
  templateUrl: './add-checklist.component.html',
  styleUrls: ['./add-checklist.component.scss']
})
export class AddChecklistComponent implements OnInit {
  error: any;
  newCheckpointForm: FormGroup;
  teams: Team[];
  @Output() newCheckpointSave = new EventEmitter<Checkpoint>();
  constructor(private checkpointService: CheckpointService, private router: Router, private route: ActivatedRoute,
              private fb: FormBuilder) {
    this.createForm();
  }

  onSubmit(): void {
    const newCheckpoint: Checkpoint = this.prepareCheckpointToBeSave();
    this.checkpointService.save(newCheckpoint).subscribe(() => {
      console.log('Success');
    }, (err) => {
      console.log('Error');
    });
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
  }

  private createForm(): void {
    console.log('AddChecklistComponent, createForm()');
    this.newCheckpointForm = this.fb.group({
      title: ['', Validators.required],
      project_id: [Validators.required]
    });
  }
  private prepareCheckpointToBeSave(): Checkpoint {
    const newCheckpoint = new Checkpoint();
    const formValue = this.newCheckpointForm.value;
    newCheckpoint.title = formValue.title;
    newCheckpoint.project_id = formValue.project_id;
    console.log(newCheckpoint);
    return newCheckpoint;
  }
}
