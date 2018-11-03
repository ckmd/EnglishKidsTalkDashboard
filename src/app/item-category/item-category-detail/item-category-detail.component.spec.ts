import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCategoryDetailComponent } from './item-category-detail.component';

describe('ItemCategoryDetailComponent', () => {
  let component: ItemCategoryDetailComponent;
  let fixture: ComponentFixture<ItemCategoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCategoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
