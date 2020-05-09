import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private modalService: ModalService) {}

  public async openConfirmationDialog() {
    await this.modalService.confirm('Are you sure?', 'Actually sure though?');
  }
}
