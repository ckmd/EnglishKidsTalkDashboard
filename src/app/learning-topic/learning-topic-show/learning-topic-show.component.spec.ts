import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningTopicShowComponent } from './learning-topic-show.component';

describe('LearningTopicShowComponent', () => {
  let component: LearningTopicShowComponent;
  let fixture: ComponentFixture<LearningTopicShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningTopicShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningTopicShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
