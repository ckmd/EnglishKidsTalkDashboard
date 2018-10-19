import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerUpdateComponent } from './answer-update.component';

describe('AnswerUpdateComponent', () => {
  let component: AnswerUpdateComponent;
  let fixture: ComponentFixture<AnswerUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
