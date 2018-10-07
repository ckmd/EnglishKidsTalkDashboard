import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningItemUpdateComponent } from './learning-item-update.component';

describe('LearningItemUpdateComponent', () => {
  let component: LearningItemUpdateComponent;
  let fixture: ComponentFixture<LearningItemUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningItemUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningItemUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
