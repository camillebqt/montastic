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
import { AuthService } from './models/auth.service';
import {AuthGuard} from './models/auth-guard.service';
import { HttpConfigInterceptor} from './models/httpconfig.interceptor';


import { AppComponent } from './app.component';
import {CheckpointService} from './models/checkpoint.service';
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
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import {ErrorDialogService} from './models/errordialog.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {
  Overlay,
  OverlayContainer, OverlayKeyboardDispatcher,
  OverlayPositionBuilder,
  ScrollDispatcher,
  ScrollStrategyOptions,
  ViewportRuler
} from '@angular/cdk/overlay';
import {Platform} from '@angular/cdk/platform';
import {Directionality} from '@angular/cdk/bidi';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';





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
    ErrorDialogComponent,
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
    AuthRoutingModule,
    MatDialogModule
  ],
  providers: [CheckpointService, HttpClient,  AuthService, AuthGuard, ErrorDialogService, MatDialog,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
