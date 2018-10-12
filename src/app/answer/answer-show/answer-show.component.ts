import { Component, OnInit } from '@angular/core';
import { Answer } from '../../model/answer';
import { AnswerService } from '../../service/answer.service';

@Component({
  selector: 'app-answer-show',
  templateUrl: './answer-show.component.html',
  styleUrls: ['./answer-show.component.css']
})
export class AnswerShowComponent implements OnInit {
  answers: Answer[];

  constructor(private answerService: AnswerService) { }

  ngOnInit() {
    this.getAnswers();
  }

  getAnswers(): void {
    this.answerService.getAnswers()
    .subscribe(answers => this.answers = answers);
  }
    
  delete(answer: Answer): void {
    this.answers = this.answers.filter(h => h !== answer);
    this.answerService.deleteAnswer(answer).subscribe();
  }
}
