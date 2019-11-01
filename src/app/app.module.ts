import { BrowserModule } from '@angular/platform-browser';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularDropdownModule } from 'angular-dropdown';
import { AuthService } from './services/auth.service';
import {AuthGuard} from './services/auth-guard.service';


import { AppComponent } from './app.component';
import {CheckpointService} from './services/checkpoint.service';
import { CheckpointListComponent } from './checkpoint-list/checkpoint-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CheckpointInfoComponent } from './checkpoint-info/checkpoint-info.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { AddChecklistComponent } from './add-checklist/add-checklist.component';
import { ChecklistTeamComponent } from './checklist-team/checklist-team.component';
import { LoginComponent } from './login/login.component';
import {AuthModule} from './auth.module';
import {AuthRoutingModule} from './auth-module.routing';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {ConfirmationDialogService} from './services/confirmation-dialog.service';


@NgModule({
  declarations: [
    AppComponent,
    CheckpointListComponent,
    CheckpointInfoComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    AddChecklistComponent,
    ChecklistTeamComponent,
    LoginComponent,
    ConfirmDialogComponent
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
    ReactiveFormsModule,
    AuthModule,
    AuthRoutingModule
  ],
  providers: [CheckpointService, HttpClient,  AuthService, AuthGuard, ConfirmationDialogService
    ],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmDialogComponent ] ,
  exports: [ ConfirmDialogComponent ]

})
export class AppModule { }
