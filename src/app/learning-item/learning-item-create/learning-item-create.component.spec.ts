import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningItemCreateComponent } from './learning-item-create.component';

describe('LearningItemCreateComponent', () => {
  let component: LearningItemCreateComponent;
  let fixture: ComponentFixture<LearningItemCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningItemCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
