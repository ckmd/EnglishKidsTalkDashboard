import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCategoryIndexComponent } from './item-category-index.component';

describe('ItemCategoryIndexComponent', () => {
  let component: ItemCategoryIndexComponent;
  let fixture: ComponentFixture<ItemCategoryIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCategoryIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCategoryIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
