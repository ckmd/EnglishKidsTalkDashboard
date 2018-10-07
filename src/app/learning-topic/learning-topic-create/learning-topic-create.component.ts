import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Location } from '@angular/common';
import { LearningtopicService } from '../../service/learningtopic.service';

@Component({
  selector: 'app-learning-topic-create',
  templateUrl: './learning-topic-create.component.html',
  styleUrls: ['./learning-topic-create.component.css']
})
export class LearningTopicCreateComponent implements OnInit {

  constructor(
  	private formBuilder: FormBuilder,
  	private learningTopicService: LearningtopicService, 
  	private location : Location) { }
  addForm: FormGroup;
  
  ngOnInit() {
  	this.addForm = this.formBuilder.group({
	    id: [],
		question_difficulty_id: ['', Validators.required],
		question_category_id: ['', Validators.required],
		learning_topic_name: ['', Validators.required],
		learning_topic_image: ['', Validators.required],
    });
  }
  onSubmit() {
    this.learningTopicService.createLearningTopic(this.addForm.value)
      .subscribe( data => {
      	this.goBack();
      });
  }
  goBack(): void {
    this.location.back();
  }
}