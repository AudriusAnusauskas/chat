import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteMessagesComponent } from './write-messages.component';

describe('WriteMessagesComponent', () => {
  let component: WriteMessagesComponent;
  let fixture: ComponentFixture<WriteMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
