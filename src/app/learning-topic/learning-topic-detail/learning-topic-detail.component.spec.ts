import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningTopicDetailComponent } from './learning-topic-detail.component';

describe('LearningTopicDetailComponent', () => {
  let component: LearningTopicDetailComponent;
  let fixture: ComponentFixture<LearningTopicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningTopicDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningTopicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
