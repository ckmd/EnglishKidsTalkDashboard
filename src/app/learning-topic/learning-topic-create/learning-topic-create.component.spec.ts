import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningTopicCreateComponent } from './learning-topic-create.component';

describe('LearningTopicCreateComponent', () => {
  let component: LearningTopicCreateComponent;
  let fixture: ComponentFixture<LearningTopicCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningTopicCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningTopicCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
