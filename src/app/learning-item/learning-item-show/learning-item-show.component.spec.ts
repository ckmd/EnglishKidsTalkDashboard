import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningItemShowComponent } from './learning-item-show.component';

describe('LearningItemShowComponent', () => {
  let component: LearningItemShowComponent;
  let fixture: ComponentFixture<LearningItemShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningItemShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningItemShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
