import { Component, OnInit } from '@angular/core';
import { QuestionDifficultyService } from '../service/questiondifficulty.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-question-difficulty-create',
  templateUrl: './question-difficulty-create.component.html',
  styleUrls: ['./question-difficulty-create.component.css']
})
export class QuestionDifficultyCreateComponent implements OnInit {

	addForm: FormGroup;

  constructor(private questionDifficultyService : QuestionDifficultyService, private formBuilder: FormBuilder,private router : Router) { }

  ngOnInit() {
  	this.addForm = this.formBuilder.group({
      id: [],
      question_difficulty_name: ['', Validators.required],
    });
  }
    onSubmit() {
    this.questionDifficultyService.createQuestionDifficulty(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['question-difficulty']);
      });
  }

}
