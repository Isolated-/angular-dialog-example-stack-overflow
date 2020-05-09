import { TestBed } from '@angular/core/testing';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalService } from './modal.service';
import { ModalComponent } from './modal/modal.component';

describe('ModalService', () => {
  let service: ModalService;
  let modal: NgbModal;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalService);
    modal = TestBed.inject(NgbModal);
  });

  it('should be created', () => {
    expect(modal).toBeDefined();
    expect(service).toBeDefined();
  });

  it('should return the correct result of a Modal (object is correct, calls internal modal)', async () => {
    const mock = {
      componentInstance: {
        title: 'Are you sure?',
        message: 'Are you actually sure though?',
        btnOkText: 'OK',
        btnCancelText: 'Cancel',
      },
      result: true,
    };

    spyOn(modal, 'open').and.returnValue(mock as any);

    const result = await service.confirm(
      mock.componentInstance.title,
      mock.componentInstance.message
    );

    expect(result).toBe(mock.result);

    expect(modal.open).toHaveBeenCalledTimes(1);
    expect(modal.open).toHaveBeenCalledWith(ModalComponent, { size: 'sm' });
  });
});
