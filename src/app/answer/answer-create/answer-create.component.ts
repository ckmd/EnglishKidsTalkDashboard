import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AnswerService } from '../../service/answer.service';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-answer-create',
  templateUrl: './answer-create.component.html',
  styleUrls: ['./answer-create.component.css']
})
export class AnswerCreateComponent implements OnInit {
constructor(
  private formBuilder: FormBuilder,
  private answerService: AnswerService, 
  private location : Location,
  private http : HttpClient) { }

addForm: FormGroup;
  
  ngOnInit() {
  	this.addForm = this.formBuilder.group({
    id: [],
	challenge_id: ['', Validators.required],
	answer_text: ['', Validators.required],
	is_correct: ['', Validators.required],
	});

  }
  onSubmit() {
    this.answerService.createAnswer(this.addForm.value)
      .subscribe( data => {
      	this.goBack();
      });
  }
  goBack(): void {
    this.location.back();
  }
}
