import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckpointComponent } from './checkpoint/checkpoint.component';
import {CheckpointListComponent} from './checkpoint-list/checkpoint-list.component';

const routes: Routes = [
  { path: 'checkpoint', component: CheckpointComponent },
  {
    path: '',
    component: CheckpointComponent,
    children: [
      { path: 'checklist', component: CheckpointListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
