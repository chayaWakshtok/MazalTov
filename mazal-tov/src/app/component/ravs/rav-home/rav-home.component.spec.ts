import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RavHomeComponent } from './rav-home.component';

describe('RavHomeComponent', () => {
  let component: RavHomeComponent;
  let fixture: ComponentFixture<RavHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RavHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RavHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
