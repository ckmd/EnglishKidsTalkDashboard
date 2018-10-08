import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LearningitemService } from '../../service/learningitem.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-learning-item-create',
  templateUrl: './learning-item-create.component.html',
  styleUrls: ['./learning-item-create.component.css']
})
export class LearningItemCreateComponent implements OnInit {

  constructor(
  	private formBuilder: FormBuilder,
  	private learningItemService: LearningitemService, 
  	private location : Location) { }
  addForm: FormGroup;
  
  ngOnInit() {
  	this.addForm = this.formBuilder.group({
	    id: [],
		learning_topic_id: ['', Validators.required],
		learning_item_xp: ['', Validators.required],
		learning_item_title: ['', Validators.required],
		learning_item_image: ['', Validators.required],
		learning_item_sound: ['', Validators.required],
		learning_item_answer: ['', Validators.required],
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
}
