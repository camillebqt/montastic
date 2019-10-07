import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckpointComponent } from './checkpoint/checkpoint.component';
import {CheckpointListComponent} from './checkpoint-list/checkpoint-list.component';
import {InfocheckpointComponent} from './infocheckpoint/infocheckpoint.component';

const routes: Routes = [
  { path: '', component: CheckpointComponent },
  { path: 'checklist', component: CheckpointListComponent },
  { path: 'info/:id', component: InfocheckpointComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
