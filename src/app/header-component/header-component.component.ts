import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {CheckpointService} from '../models/checkpoint.service';
import {Checkpoint} from '../models/checkpoint';
import {ActivatedRoute, Router, Params} from '@angular/router';
@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {
  @Input() checkpoint: Checkpoint;
  error: any;
  navigated = false;
  checkpoints: Checkpoint[];
  @Output() close = new EventEmitter();
  constructor(private checkpointService: CheckpointService, private router: Router, private route: ActivatedRoute) {
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
      this.checkpoint = checkpoint;
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
