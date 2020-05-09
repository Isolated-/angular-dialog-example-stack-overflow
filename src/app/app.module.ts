import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from './modal.service';

@NgModule({
  declarations: [AppComponent, ModalComponent],
  imports: [BrowserModule, NgbModule],
  providers: [ModalService],
  bootstrap: [AppComponent, ModalComponent],
})
export class AppModule {}
