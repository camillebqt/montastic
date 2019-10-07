import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {CheckpointService} from '../models/checkpoint.service';
import {Checkpoint} from '../models/checkpoint';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkpoint',
  templateUrl: './checkpoint.component.html',
  styleUrls: ['./checkpoint.component.scss']
})
export class CheckpointComponent implements OnInit {
  @Input() checkpoint: Checkpoint;
  private check: Checkpoint;
  error: any;
  navigated = false;
  checkpoints: Checkpoint[];
  @Output() close = new EventEmitter();
  constructor(private checkpointService: CheckpointService, private router: Router) {
    /*checkpointService.getCheckpoints().subscribe(res => {
      console.log(res);
    });
    checkpointService.post(this.check).subscribe(res => {
      console.log(res);
    });*/
  }
/*  addCheckpoints() {
    this.checkpointService
      .post(this.check)
      .subscribe(
        checkpoints => (this.checkpoints),
        error => (this.error = error)
      );
  }*/

  save(): void {
    this.checkpointService.save(this.checkpoint).subscribe(checkpoint => {
      this.checkpoint = checkpoint; // saved ticket, w/ id if new
      this.goBack(checkpoint);
    }, error => (this.error = error));
  }
  goBack(savedCheckpoint: Checkpoint = null): void {
    this.close.emit(savedCheckpoint);
    if (this.navigated) {
      window.history.back();
    }
  }
  ngOnInit(): void {
  }
}
