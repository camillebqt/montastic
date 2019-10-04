import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckpointComponent } from './checkpoint/checkpoint.component';
import {CheckpointService} from './checkpoint.service/checkpoint.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { CheckpointListComponent } from './checkpoint-list/checkpoint-list.component';

const appRoutes: Routes = [
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
  declarations: [
    AppComponent,
    CheckpointComponent,
    CheckpointListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [CheckpointService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
