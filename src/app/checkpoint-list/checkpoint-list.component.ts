import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Checkpoint} from '../models/checkpoint';
import {CheckpointService} from '../models/checkpoint.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-checkpoint-list',
  templateUrl: './checkpoint-list.component.html',
  styleUrls: ['./checkpoint-list.component.scss']
})
export class CheckpointListComponent implements OnInit {
  checkpoints: Checkpoint[];
  selectedCheckpoint: Checkpoint;
  error: any;
  addingCheckpoint = false;
  constructor(private checkpointService: CheckpointService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCheckpoints();

  }
  getCheckpoints(): void {
    this.checkpointService
      .getCheckpoints()
      .subscribe(
        checkpoints => (this.checkpoints = checkpoints),
        error => (this.error = error)
      );
  }
/*  onSelect(checkpoint: Checkpoint): void {
    this.selectedCheckpoint = checkpoint;
    this.addingCheckpoint = false;
  }*/
  getCheckpoint(id: string){
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

