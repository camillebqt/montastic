import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckpointComponent } from './checkpoint/checkpoint.component';
import {CheckpointListComponent} from './checkpoint-list/checkpoint-list.component';

const routes: Routes = [
  { path: '', component: CheckpointComponent },
  { path: 'checkpoints', component: CheckpointListComponent },
  { path: 'checkpoints/:id', component: CheckpointListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
