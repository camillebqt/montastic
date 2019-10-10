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
}
