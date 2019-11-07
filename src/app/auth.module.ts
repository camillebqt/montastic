import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';


@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [

  ],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        { provide: AuthService},
      ]
    };
  }

}
