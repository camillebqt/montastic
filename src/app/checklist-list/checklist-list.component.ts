import { Component, OnInit } from '@angular/core';
import {Checkpoint} from '../Checkpoint';
import {CheckpointService} from '../Checkpoint.service';

@Component({
  selector: 'app-checklist-list',
  templateUrl: './checklist-list.component.html',
  styleUrls: ['./checklist-list.component.scss']
})
export class ChecklistListComponent implements OnInit {

  checkpoints: Checkpoint[];
  selectedCheckpoint: Checkpoint;
  error: any;
  addingCheckpoint = false;
  constructor(private checkpointService: CheckpointService) { }

  ngOnInit() {
    this.getCheckpoints ();
  }
  getCheckpoints(): void {
    this.checkpointService
      .getCheckpoints()
      .subscribe(
        checkpoints => (this.checkpoints = checkpoints),
        error => (this.error = error)
      );
  }
  onSelect(checkpoint: Checkpoint): void {
    this.selectedCheckpoint = checkpoint;
    this.addingCheckpoint = false;
  }
}
