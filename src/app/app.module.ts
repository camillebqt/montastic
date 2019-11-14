import { BrowserModule } from '@angular/platform-browser';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
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
import { LoginComponent } from './login/login.component';
import {AuthModule} from './auth.module';
import {AuthRoutingModule} from './auth-module.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmDialogModule} from './confirm-dialog/confirm-dialog.module';
import {httpInterceptorProviders} from './models/http-interceptor/index-interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    CheckpointListComponent,
    CheckpointInfoComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    AddChecklistComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    DropDownsModule,
    BrowserAnimationsModule,
    AngularDropdownModule,
    ReactiveFormsModule,
    AuthModule,
    AuthRoutingModule,
    NgbModule,
    ConfirmDialogModule,
    FontAwesomeModule
  ],
  providers: [CheckpointService, HttpClient,  AuthService, AuthGuard, httpInterceptorProviders
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
