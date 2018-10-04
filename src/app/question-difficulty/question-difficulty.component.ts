import { Component, OnInit } from '@angular/core';
import { QuestionDifficultyService } from '../service/questiondifficulty.service';
import { QuestionDifficulty } from '../model/QuestionDifficulty';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-question-difficulty',
  templateUrl: './question-difficulty.component.html',
  styleUrls: ['./question-difficulty.component.css']
})
export class QuestionDifficultyComponent implements OnInit {

	public levels = [];
  constructor(private questionDifficultyService : QuestionDifficultyService) { }

  ngOnInit() {
  	this.questionDifficultyService.getQuestionDifficulties()
  	.subscribe(data => this.levels = data);
  }
}
