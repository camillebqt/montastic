import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CheckpointListComponent} from './checkpoint-list/checkpoint-list.component';
import {CheckpointInfoComponent} from './checkpoint-info/checkpoint-info.component';
import {AuthGuard} from './services/auth-guard.service';

const routes: Routes = [
  { path: 'auth', loadChildren: './auth.module#AuthModule'},
  { path: 'checkpoints', canActivate: [AuthGuard], component: CheckpointListComponent},
  { path: 'checkpoints/:id', canActivate: [AuthGuard], component: CheckpointInfoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
