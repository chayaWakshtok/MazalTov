import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRavComponent } from './add-rav.component';

describe('AddRavComponent', () => {
  let component: AddRavComponent;
  let fixture: ComponentFixture<AddRavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
