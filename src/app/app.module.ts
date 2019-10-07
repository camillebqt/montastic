import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckpointComponent } from './checkpoint/checkpoint.component';
import {CheckpointService} from './models/checkpoint.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CheckpointListComponent } from './checkpoint-list/checkpoint-list.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { InfocheckpointComponent } from './infocheckpoint/infocheckpoint.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckpointComponent,
    CheckpointListComponent,
    InfocheckpointComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [CheckpointService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
