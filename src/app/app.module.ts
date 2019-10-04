import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckpointComponent } from './checkpoint/checkpoint.component';
import {CheckpointService} from './checkpoint.service/checkpoint.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CheckpointListComponent } from './checkpoint-list/checkpoint-list.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CheckpointComponent,
    CheckpointListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [CheckpointService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
