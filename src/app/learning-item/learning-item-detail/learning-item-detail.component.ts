import { LearningitemService } from '../../service/learningitem.service';
import { LearningItem } from '../../model/learning-item';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-learning-item-detail',
  templateUrl: './learning-item-detail.component.html',
  styleUrls: ['./learning-item-detail.component.css']
})
export class LearningItemDetailComponent implements OnInit {

  @Input() learningItem: LearningItem;
  selectedFile: File = null;
  public id = this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
  	private learningItemService : LearningitemService,
    private location: Location,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.getLearningItem();
  }

  getLearningItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.learningItemService.getLearningItem(id)
      .subscribe(learningItem => this.learningItem = learningItem);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
   this.onUpload();
    this.learningItemService.updateLearningItem(this.learningItem)
      .subscribe(() => this.goBack());
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(event);
  }
  onUpload(){
    const uploadData = new FormData();
    uploadData.append('learning_item_image', this.selectedFile, this.selectedFile.name);

    this.http.patch('http://ekita-api.herokuapp.com/api/learning-items/'+ this.id, uploadData)
    .subscribe( res => {console.log(res);}
    );
  }
}
