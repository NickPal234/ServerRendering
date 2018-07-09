import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ServerTransferStateModule } from '../modules/transfer-state/server-transfer-state.module';
import { TransferState } from '../modules/transfer-state/transfer-state';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
  constructor(private transferState: TransferState) { }

  ngOnBootstrap = () => {
    this.transferState.inject();
  }
}
