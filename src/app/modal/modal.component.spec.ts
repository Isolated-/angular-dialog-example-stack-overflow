import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let activeModal: NgbActiveModal;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent],
      providers: [NgbActiveModal],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    activeModal = TestBed.inject(NgbActiveModal);
  });

  it('should create', () => {
    expect(activeModal).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('.accept() should call activeModal with true', async () => {
    spyOn(activeModal, 'close').and.returnValue(null);

    expect(component.accept()).toBeUndefined();

    expect(activeModal.close).toHaveBeenCalledTimes(1);
    expect(activeModal.close).toHaveBeenCalledWith(true);
  });

  it('.reject() should call activeModal with false', async () => {
    spyOn(activeModal, 'close').and.returnValue(null);

    expect(component.decline()).toBeUndefined();

    expect(activeModal.close).toHaveBeenCalledTimes(1);
    expect(activeModal.close).toHaveBeenCalledWith(false);
  });
});
