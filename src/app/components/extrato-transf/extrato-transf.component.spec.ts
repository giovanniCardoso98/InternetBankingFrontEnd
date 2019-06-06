import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoTransfComponent } from './extrato-transf.component';

describe('ExtratoTransfComponent', () => {
  let component: ExtratoTransfComponent;
  let fixture: ComponentFixture<ExtratoTransfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtratoTransfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtratoTransfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
