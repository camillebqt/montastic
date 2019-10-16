import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {CheckpointService} from './models/checkpoint.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CheckpointListComponent } from './checkpoint-list/checkpoint-list.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CheckpointInfoComponent } from './checkpoint-info/checkpoint-info.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { AddChecklistComponent } from './add-checklist/add-checklist.component';



@NgModule({
  declarations: [
    AppComponent,
    CheckpointListComponent,
    CheckpointInfoComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    AddChecklistComponent
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
