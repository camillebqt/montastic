import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {CheckpointService} from '../models/checkpoint.service';
import {Checkpoint} from '../models/checkpoint';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-add-checklist',
  templateUrl: './add-checklist.component.html',
  styleUrls: ['./add-checklist.component.scss']
})
export class AddChecklistComponent implements OnInit {
  @Input() checkpoint: Checkpoint;
  error: any;
  navigated = false;
  checkpoints: Checkpoint[];
  @Output() close = new EventEmitter();
  constructor(private checkpointService: CheckpointService, private router: Router, private route: ActivatedRoute) {}

  save(): void {
    this.checkpointService.save(this.checkpoint).subscribe(checkpoint => {
      this.checkpoint = checkpoint;
      this.router.navigate(['']);
    }, error => (this.error = error));
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
