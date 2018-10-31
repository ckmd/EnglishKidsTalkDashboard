import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { QuestioncategoryService } from '../../service/questioncategory.service';
import { Location } from '@angular/common';
import { QuestionDifficultyService } from 'src/app/service/questiondifficulty.service';

@Component({
  selector: 'app-question-category-create',
  templateUrl: './question-category-create.component.html',
  styleUrls: ['./question-category-create.component.css']
})
export class QuestionCategoryCreateComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private qd : QuestionDifficultyService,
  	private questionCategoryService: QuestioncategoryService, 
  	private location : Location) { }
  addForm: FormGroup;
  public questionDifficulties = [];
  
  ngOnInit() {
    this.qd.getQuestionDifficulties()
    .subscribe(questionDifficulties => this.questionDifficulties = questionDifficulties);

  	this.addForm = this.formBuilder.group({
      id: [],
      question_difficulty_id: ['', Validators.required],
      question_category_name: ['', Validators.required],
      star_needed: ['', Validators.required],
	  });
  }
  onSubmit() {
    this.questionCategoryService.createQuestionCategory(this.addForm.value)
      .subscribe( data => {
      	this.goBack();
      });
  }
  goBack(): void {
    this.location.back();
  }
}
