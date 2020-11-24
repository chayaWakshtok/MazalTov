import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchmarkerHomeComponent } from './matchmarker-home.component';

describe('MatchmarkerHomeComponent', () => {
  let component: MatchmarkerHomeComponent;
  let fixture: ComponentFixture<MatchmarkerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchmarkerHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchmarkerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
