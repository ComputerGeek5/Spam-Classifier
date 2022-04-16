import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import {HttpInterceptorService} from './security/interceptor/http-interceptor.service';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {AuthLayoutModule} from './layouts/auth-layout/auth-layout.module';
import {UserService} from './service/user/user.service';
import {MailService} from './service/mail/mail.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MailComponent } from './pages/mail/mail.component';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ComponentsModule,
        NgbModule,
        RouterModule,
        AppRoutingModule,
        ToastrModule.forRoot(),
        MDBBootstrapModule.forRoot(),
        AuthLayoutModule
    ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, MailComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    UserService,
    MailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
