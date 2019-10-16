import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CheckpointListComponent} from './checkpoint-list/checkpoint-list.component';
import {CheckpointInfoComponent} from './checkpoint-info/checkpoint-info.component';
import {AddChecklistComponent} from './add-checklist/add-checklist.component';
import {ChecklistTeamComponent} from './checklist-team/checklist-team.component';
import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';

const routes: Routes = [
  { path: '', component: AddChecklistComponent },
  { path: 'checkpoints', component: CheckpointListComponent },
  { path: 'checkpoints/:id', component: CheckpointInfoComponent },
  { path: 'all_my_teams', component: ChecklistTeamComponent },
  { path: 'all_my_teams/:id', component: CheckpointListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
