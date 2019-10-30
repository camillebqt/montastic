import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Checkpoint} from '../models/checkpoint';
import {CheckpointService} from '../models/checkpoint.service';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
import {MatDialog} from '@angular/material/dialog';

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
    private dialog: MatDialog
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
  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: 'Do you confirm the deletion of this data?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        this.delete();
      }
    });
  }
}
