import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Checkpoint} from '../models/checkpoint';
import {CheckpointService} from '../models/checkpoint.service';
@Component({
  selector: 'app-checkpoint-info',
  templateUrl: './checkpoint-info.component.html',
  styleUrls: ['./checkpoint-info.component.scss']
})
export class CheckpointInfoComponent implements OnInit {
  @Input() checkpoint: Checkpoint
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here


  constructor(
    private checkpointService: CheckpointService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
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
}
