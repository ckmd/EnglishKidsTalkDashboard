import { Component, OnInit } from '@angular/core';
import { QuestioncategoryService } from '../../service/questioncategory.service';
import { QuestionCategory } from '../../model/QuestionCategory';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-question-category',
  templateUrl: './question-category.component.html',
  styleUrls: ['./question-category.component.css']
})
export class QuestionCategoryComponent implements OnInit {

public categories = [];
  constructor(private questioncategoryService : QuestioncategoryService) { }

  ngOnInit() {
  	  	this.questioncategoryService.getQuestionCategories()
  	.subscribe(categories => this.categories = categories);
  }

  delete(questionCategory: QuestionCategory): void {
    this.questioncategoryService.deleteQuestionCategory(questionCategory.id)
      .subscribe( data => {
        this.categories = this.categories.filter(u => u !== questionCategory);
      });
  }
}
