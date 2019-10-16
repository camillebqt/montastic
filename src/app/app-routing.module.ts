import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CheckpointListComponent} from './checkpoint-list/checkpoint-list.component';
import {CheckpointInfoComponent} from './checkpoint-info/checkpoint-info.component';
import {AddChecklistComponent} from './add-checklist/add-checklist.component';

const routes: Routes = [
  { path: '', component: AddChecklistComponent },
  { path: 'checkpoints', component: CheckpointListComponent },
  { path: 'checkpoints/:id', component: CheckpointInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
