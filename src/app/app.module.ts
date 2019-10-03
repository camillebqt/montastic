import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckpointComponent } from './checkpoint/checkpoint.component';
import {CheckpointService} from './Checkpoint.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ChecklistListComponent } from './checklist-list/checklist-list.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'checklist', component: ChecklistListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CheckpointComponent,
    ChecklistListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [CheckpointService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
