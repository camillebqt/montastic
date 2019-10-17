import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CheckpointListComponent} from './checkpoint-list/checkpoint-list.component';
import {CheckpointInfoComponent} from './checkpoint-info/checkpoint-info.component';
import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';

const routes: Routes = [
  { path: 'checkpoints', component: CheckpointListComponent},
  { path: 'checkpoints/:id', component: CheckpointInfoComponent}
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
