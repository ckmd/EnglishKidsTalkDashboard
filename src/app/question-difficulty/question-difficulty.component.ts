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

  deleteQuestionDifficulty(questionDifficulty: QuestionDifficulty): void {
    this.questionDifficultyService.deleteQuestionDifficulty(questionDifficulty.id)
      .subscribe( data => {
        this.levels = this.levels.filter(u => u !== questionDifficulty);
      });
  }

  add(question_difficulty_name: string): void {
  question_difficulty_name = question_difficulty_name.trim();
  if (!question_difficulty_name) { return; }
  this.questionDifficultyService.createQuestionDifficulty({ question_difficulty_name } as QuestionDifficulty)
    .subscribe(questionDifficulty => {
      this.levels.push(questionDifficulty);
    });
}

}
