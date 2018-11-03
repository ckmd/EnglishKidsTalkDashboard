import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCategoryCreateComponent } from './item-category-create.component';

describe('ItemCategoryCreateComponent', () => {
  let component: ItemCategoryCreateComponent;
  let fixture: ComponentFixture<ItemCategoryCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCategoryCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCategoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
