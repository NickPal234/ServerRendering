import { BrowserTransferStateModule } from '../modules/transfer-state/browser-transfer-state.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ORIGIN_URL, REQUEST } from '@nguniversal/aspnetcore-engine';
import { HttpClientModule } from '@angular/common/http';

export function getOriginUrl() {
  return window.location.origin;
}

export function getRequest() {
  return { cookie: document.cookie };
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app-site' }),
    BrowserModule,
    HttpClientModule,
    BrowserTransferStateModule,
    FormsModule
  ],
  providers: [{
    provide: ORIGIN_URL,
    useFactory: getOriginUrl
  }, {

    provide: REQUEST,
    useFactory: getRequest
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }