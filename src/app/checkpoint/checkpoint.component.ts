import { Component, OnInit } from '@angular/core';
import {Checkpoint} from '../Checkpoint';

@Component({
  selector: 'app-checkpoint',
  templateUrl: './checkpoint.component.html',
  styleUrls: ['./checkpoint.component.scss']
})
export class CheckpointComponent implements OnInit {
  checkpoints = Checkpoint;
selectedCheckpoint: Checkpoint;
onSelect(checkpoint: Checkpoint): void {
  this.selectedCheckpoint = checkpoint;
}
  constructor() { }

  ngOnInit() {
  }

}
