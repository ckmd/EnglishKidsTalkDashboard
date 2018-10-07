import { QuestioncategoryService } from '../../service/questioncategory.service';
import { QuestionCategory } from '../../model/QuestionCategory';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-category-detail',
  templateUrl: './question-category-detail.component.html',
  styleUrls: ['./question-category-detail.component.css']
})
export class QuestionCategoryDetailComponent implements OnInit {

  @Input() questionCategory: QuestionCategory;

  constructor(
    private route: ActivatedRoute,
  	private questionCategoryService : QuestioncategoryService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getQuestionCategory();
  }

  getQuestionCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.questionCategoryService.getQuestionCategory(id)
      .subscribe(questionCategory => this.questionCategory = questionCategory);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.questionCategoryService.updateQuestionCategory(this.questionCategory)
      .subscribe(() => this.goBack());
  }
}
