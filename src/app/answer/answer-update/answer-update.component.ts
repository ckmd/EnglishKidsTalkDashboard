import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from 'src/app/service/answer.service';
import { Answer } from 'src/app/model/answer';
import { Location } from '@angular/common';

@Component({
  selector: 'app-answer-update',
  templateUrl: './answer-update.component.html',
  styleUrls: ['./answer-update.component.css']
})
export class AnswerUpdateComponent implements OnInit {

  @Input() answer: Answer;
  constructor(
    private route: ActivatedRoute,
    private answerService: AnswerService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getAnswer();
  }

  getAnswer(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.answerService.getAnswer(id)
    .subscribe(answer => this.answer = answer);
  }

  goBack(): void{
    this.location.back();
  }

  save(): void{
    this.answerService.updateAnswer(this.answer)
    .subscribe(() => this.goBack());
  }
}
