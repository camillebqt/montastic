import {Component, OnInit} from '@angular/core';
import {CheckpointService} from '../checkpoint.service/checkpoint.service';
import {Checkpoint} from '../checkpoint-feature/checkpoint';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkpoint',
  templateUrl: './checkpoint.component.html',
  styleUrls: ['./checkpoint.component.scss']
})
export class CheckpointComponent implements OnInit {
  id: number;
  title = 'montastic';
  private check: Checkpoint;
  checkpoints: Checkpoint[];
  error: any;
  constructor(private checkpointService: CheckpointService, private router: Router) {
    checkpointService.getCheckpoints().subscribe(res => {
      console.log(res);
    });
    checkpointService.post(this.check).subscribe(res => {
      console.log(res);
    });
  }
  addCheckpoints() {
    this.checkpointService
      .post(this.check)
      .subscribe(
        checkpoints => (this.checkpoints),
        error => (this.error = error)
      );
  }
  ngOnInit(): void {
    this.addCheckpoints();
  }
}
