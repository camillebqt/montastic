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
  @Input() checkpoint: Checkpoint;
  @Output() close = new EventEmitter();
  navigated = false; // true if navigated here
  checkpoints: Checkpoint[];
  selectedCheckpoint: Checkpoint;
  error: any;
  addingCheckpoint = false;
  constructor(private checkpointService: CheckpointService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCheckpoints();
    this.route.params.forEach((params: Params) => {
      if (params.id !== undefined) {
        const id = +params.id;
        this.navigated = true;
        this.checkpointService.getCheckpoint(id).subscribe(checkpoint => (this.checkpoint = checkpoint));
      } else {
        this.navigated = false;
        this.checkpoint = new Checkpoint();
      }
    });
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
  gotoDetail(): void {
    this.router.navigate(['/checkpoints', this.selectedCheckpoint.id]);
    this.onSelect(this.checkpoint);
  }
}

