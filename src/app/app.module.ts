import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CheckpointComponent } from './checkpoint/checkpoint.component';
import {CheckpointService} from './models/checkpoint.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CheckpointListComponent } from './checkpoint-list/checkpoint-list.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { InMemoryDataService } from './models/in-memory-data.service';
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { NgModule } from '@angular/core';
import { CheckpointInfoComponent } from './checkpoint-info/checkpoint-info.component';



@NgModule({
  declarations: [
    AppComponent,
    CheckpointComponent,
    CheckpointListComponent,
    CheckpointInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 300,
      passThruUnknownUrl: true
    }),
  ],
  providers: [CheckpointService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
