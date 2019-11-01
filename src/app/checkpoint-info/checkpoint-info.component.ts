import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Checkpoint} from '../models/checkpoint';
import {CheckpointService} from '../services/checkpoint.service';
import {ConfirmationDialogService} from '../services/confirmation-dialog.service';

@Component({
  selector: 'app-checkpoint-info',
  templateUrl: './checkpoint-info.component.html',
  styleUrls: ['./checkpoint-info.component.scss']
})
export class CheckpointInfoComponent implements OnInit {
  @Input() checkpoint: Checkpoint
  error: any;
  navigated = false; // true if navigated here


  constructor(
    private checkpointService: CheckpointService,
    private route: ActivatedRoute,
    private router: Router,
    private confirmationDialogService: ConfirmationDialogService
  ) {}

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

  save(): void {
    this.checkpointService.save(this.checkpoint).subscribe(checkpoint => {
      this.checkpoint = checkpoint;
      this.router.navigate(['/checkpoints']);
    }, error => (this.error = error));
  }

  delete(): void {
    this.checkpointService.delete(this.checkpoint).subscribe(checkpoint => {
      this.checkpoint = checkpoint;
      this.router.navigate(['/checkpoints']);
    }, error => (this.error = error));
  }

  public openConfirmDialog() {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to ... ?')
      .then((confirmed) => console.log('User confirmed:', confirmed))
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
}
