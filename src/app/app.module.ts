import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckpointComponent } from './checkpoint/checkpoint.component';
import {CheckpointService} from './Checkpoint.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CheckpointComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CheckpointService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
