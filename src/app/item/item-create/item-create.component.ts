import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Location } from '@angular/common';
import { ItemsService } from '../../service/items.service';
import { HttpClient } from '@angular/common/http';
import { ItemcategoryService } from '../../service/itemcategory.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  addForm: FormGroup;
  selectedImage: File = null;
  selectedSnippet: File = null;
  public itemCategories = [];

  constructor(
    private itemsService: ItemsService,
    private itemCategory: ItemcategoryService,
    private formBuilder: FormBuilder,
    private location: Location,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.itemCategory.getItemCategories()
    .subscribe(itemCategories => this.itemCategories = itemCategories);
    
    this.addForm = this.formBuilder.group({
      id: [],
      item_category_id: ['', Validators.required],
      name: ['', Validators.required],
      item_desc: ['', Validators.required],
      star: ['', Validators.required],
      gender: ['', Validators.required],
      // inventories: [''],
    });
  }
  onSubmit() {
    this.itemsService.createItem(this.addForm.value)
      .subscribe(data => {
        this.goBack();
      });
  }
  goBack(): void {
    this.location.back();
  }
  uploadImage(event) {
    this.selectedImage = event.target.files[0];
    console.log(event);
  }
  uploadSnippet(event) {
    this.selectedSnippet = event.target.files[0];
    console.log(event);
  }
  onUpload(){
    const uploadData = new FormData();
    uploadData.append('item_category_id', this.addForm.get('item_category_id').value);
    uploadData.append('name', this.addForm.get('name').value);
    uploadData.append('item_desc', this.addForm.get('item_desc').value);
    uploadData.append('star', this.addForm.get('star').value);
    uploadData.append('gender', this.addForm.get('gender').value);
    // uploadData.append('inventories', this.addForm.get('inventories').value);
    uploadData.append('image', this.selectedImage, this.selectedImage.name);
    uploadData.append('snippet', this.selectedSnippet, this.selectedSnippet.name);

    this.http.post('http://ekita-api.herokuapp.com/api/items', uploadData)
    .subscribe( res => {console.log(res); this.goBack();}
    );
  }

}
