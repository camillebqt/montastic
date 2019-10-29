import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CheckpointListComponent} from './checkpoint-list/checkpoint-list.component';
import {CheckpointInfoComponent} from './checkpoint-info/checkpoint-info.component';
import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';
import {AuthGuard} from './models/auth-guard.service';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: 'auth', loadChildren: './auth.module#AuthModule'},
  { path: 'checkpoints', canActivate: [AuthGuard], component: CheckpointListComponent},
  { path: 'checkpoints/:id', canActivate: [AuthGuard], component: CheckpointInfoComponent}
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
