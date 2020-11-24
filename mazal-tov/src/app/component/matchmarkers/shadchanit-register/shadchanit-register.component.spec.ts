import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadchanitRegisterComponent } from './shadchanit-register.component';

describe('ShadchanitRegisterComponent', () => {
  let component: ShadchanitRegisterComponent;
  let fixture: ComponentFixture<ShadchanitRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadchanitRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadchanitRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
