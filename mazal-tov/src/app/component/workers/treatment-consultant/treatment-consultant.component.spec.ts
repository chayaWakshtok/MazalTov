import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentConsultantComponent } from './treatment-consultant.component';

describe('TreatmentConsultantComponent', () => {
  let component: TreatmentConsultantComponent;
  let fixture: ComponentFixture<TreatmentConsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentConsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
