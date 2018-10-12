import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Location } from '@angular/common';
import { LearningtopicService } from '../../service/learningtopic.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-learning-topic-create',
  templateUrl: './learning-topic-create.component.html',
  styleUrls: ['./learning-topic-create.component.css']
})

export class LearningTopicCreateComponent implements OnInit {

  constructor(
  	private formBuilder: FormBuilder,
  	private learningTopicService: LearningtopicService, 
  	private location : Location,
    private http : HttpClient) { }
  
  addForm: FormGroup;
  selectedFile: File = null;

  ngOnInit() {
  	this.addForm = this.formBuilder.group({
	  id: [],
		question_category_id: '',
		learning_topic_name: '',
    });
  }
  onSubmit() {
    this.onUpload();
    this.learningTopicService.createLearningTopic(this.addForm.value)
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
    uploadData.append('question_category_id', this.addForm.get('question_category_id').value);
    uploadData.append('learning_topic_name', this.addForm.get('learning_topic_name').value);
    uploadData.append('learning_topic_image', this.selectedFile, this.selectedFile.name);

    this.http.post('http://ekita-api.herokuapp.com/api/learning-topics', uploadData)
    .subscribe( res => {console.log(res); this.goBack();}
    );
  }
}