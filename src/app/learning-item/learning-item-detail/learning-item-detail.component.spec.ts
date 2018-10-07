import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningItemDetailComponent } from './learning-item-detail.component';

describe('LearningItemDetailComponent', () => {
  let component: LearningItemDetailComponent;
  let fixture: ComponentFixture<LearningItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
