import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeIndexComponent } from './challenge-index.component';

describe('ChallengeIndexComponent', () => {
  let component: ChallengeIndexComponent;
  let fixture: ComponentFixture<ChallengeIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
