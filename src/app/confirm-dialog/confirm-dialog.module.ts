import { ConfirmDialogComponent } from './confirm-dialog.component';
import {ConfirmationDialogService} from './confirmation-dialog.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    ConfirmDialogComponent
  ],
  imports: [
    NgbModule
  ],
  providers: [ConfirmationDialogService
  ],
  entryComponents: [ ConfirmDialogComponent ]
})
export class ConfirmDialogModule { }
