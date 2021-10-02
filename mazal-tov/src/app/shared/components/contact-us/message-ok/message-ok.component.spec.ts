import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageOkComponent } from './message-ok.component';

describe('MessageOkComponent', () => {
  let component: MessageOkComponent;
  let fixture: ComponentFixture<MessageOkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageOkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
