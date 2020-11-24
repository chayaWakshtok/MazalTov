import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuamadRegisterComponent } from './muamad-register.component';

describe('MuamadRegisterComponent', () => {
  let component: MuamadRegisterComponent;
  let fixture: ComponentFixture<MuamadRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuamadRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuamadRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
