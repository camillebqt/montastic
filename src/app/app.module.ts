import { BrowserModule } from '@angular/platform-browser';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularDropdownModule } from 'angular-dropdown';


import { AppComponent } from './app.component';
import {CheckpointService} from './models/checkpoint.service';
import { CheckpointListComponent } from './checkpoint-list/checkpoint-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CheckpointInfoComponent } from './checkpoint-info/checkpoint-info.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { AddChecklistComponent } from './add-checklist/add-checklist.component';
import { ChecklistTeamComponent } from './checklist-team/checklist-team.component';





@NgModule({
  declarations: [
    AppComponent,
    CheckpointListComponent,
    CheckpointInfoComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    AddChecklistComponent,
    ChecklistTeamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    DropDownsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AngularDropdownModule,
    ReactiveFormsModule
  ],
  providers: [CheckpointService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
