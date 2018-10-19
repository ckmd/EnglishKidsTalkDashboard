import { Component, Input, OnInit } from '@angular/core';
import { QuestionDifficultyService } from '../../service/questiondifficulty.service';
import { QuestionDifficulty } from '../../model/QuestionDifficulty';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-question-difficulty-detail',
  templateUrl: './question-difficulty-detail.component.html',
  styleUrls: ['./question-difficulty-detail.component.css']
})
export class QuestionDifficultyDetailComponent implements OnInit {

  @Input() questionDifficulty: QuestionDifficulty;
  constructor(
  	private questionDifficultyService : QuestionDifficultyService,
    private route : ActivatedRoute,
    private location: Location,
  	) { }

  ngOnInit() {
    this.getQuestionDifficulty();
  }

  getQuestionDifficulty(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.questionDifficultyService.getQuestionDifficulty(id)
      .subscribe(questionDifficulty => this.questionDifficulty = questionDifficulty);
  }

 save(): void {
    this.questionDifficultyService.updateQuestionDifficulty(this.questionDifficulty)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
  // onSubmit(){
  // 	this.questionDifficultyService.updateQuestionDifficulty()
  // 	.subscribe(data=>{});
  // }
}
