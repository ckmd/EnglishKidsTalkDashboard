import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LearningitemService } from '../../service/learningitem.service';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-learning-item-create',
  templateUrl: './learning-item-create.component.html',
  styleUrls: ['./learning-item-create.component.css']
})
export class LearningItemCreateComponent implements OnInit {

  constructor(
  	private formBuilder: FormBuilder,
  	private learningItemService: LearningitemService, 
  	private location : Location,
    private http : HttpClient) { }

  addForm: FormGroup;
  selectedFile: File = null;
  
  ngOnInit() {
  	this.addForm = this.formBuilder.group({
    id: [],
		learning_topic_id: ['', Validators.required],
		learning_item_xp: ['', Validators.required],
		learning_item_title: ['', Validators.required],
    });
  }
  onSubmit() {
    this.learningItemService.createLearningItem(this.addForm.value)
      .subscribe( data => {
      	this.goBack();
      });
  }
  goBack(): void {
    this.location.back();
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(event);
  }
  onUpload(){
    const uploadData = new FormData();
    uploadData.append('learning_topic_id', this.addForm.get('learning_topic_id').value);
    uploadData.append('learning_item_xp', this.addForm.get('learning_item_xp').value);
    uploadData.append('learning_item_title', this.addForm.get('learning_item_title').value);
    uploadData.append('learning_item_image', this.selectedFile, this.selectedFile.name);

    this.http.post('http://ekita-api.herokuapp.com/api/learning-items', uploadData)
    .subscribe( res => {console.log(res); this.goBack();}
    );
  }
}
