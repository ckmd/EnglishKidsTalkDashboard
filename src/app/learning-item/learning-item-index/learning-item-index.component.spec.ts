import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningItemIndexComponent } from './learning-item-index.component';

describe('LearningItemIndexComponent', () => {
  let component: LearningItemIndexComponent;
  let fixture: ComponentFixture<LearningItemIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningItemIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningItemIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
