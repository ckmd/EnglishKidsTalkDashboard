import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../Item';
import { ItemsService } from '../service/items.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input() item: Item;
  selectedFile: File = null;
  selectedSnippet: File = null;
  public id = this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemsService,
    private location: Location,
    private http: HttpClient
  ) { }


  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.onUpload();
    this.itemService.updateItem(this.item)
      .subscribe(() => this.goBack());
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(event);
  }
  onSnippetChanged(event) {
    this.selectedSnippet = event.target.files[0];
    console.log(event);
  }
  onUpload() {
    const uploadData = new FormData();
    uploadData.append('image', this.selectedFile, this.selectedFile.name);
    uploadData.append('snippet', this.selectedSnippet, this.selectedSnippet.name);

    this.http.patch('http://ekita-api.herokuapp.com/api/items/' + this.id, uploadData)
      .subscribe(res => { console.log(res); }
      );
  }
}
