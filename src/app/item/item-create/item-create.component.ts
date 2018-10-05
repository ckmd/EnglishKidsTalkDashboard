import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Location } from '@angular/common';
import { ItemsService } from '../../service/items.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

	addForm: FormGroup;

  constructor(
    private itemsService : ItemsService,
    private formBuilder: FormBuilder,
    private location : Location
) { }

  ngOnInit() {
  	  this.addForm = this.formBuilder.group({
      id: [],
      item_category_id: ['', Validators.required],
      name: ['', Validators.required],
      item_desc: ['', Validators.required],
      star: ['', Validators.required],
      image: ['', Validators.required],
      x_coordinate: ['', Validators.required],
      y_coordinate: ['', Validators.required],
      itemCategory: ['', Validators.required],
    });
  }
    onSubmit() {
    this.itemsService.createItem(this.addForm.value)
      .subscribe( data => {
      	this.goBack();
      });
  }
  goBack(): void {
    this.location.back();
  }
}
