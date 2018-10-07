import { Component, OnInit } from '@angular/core';
import { LearningitemService } from '../../service/learningitem.service';
import { LearningItem } from '../../model/learning-item';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learning-item-index',
  templateUrl: './learning-item-index.component.html',
  styleUrls: ['./learning-item-index.component.css']
})
export class LearningItemIndexComponent implements OnInit {

	public learningItems = [];

  constructor(
  	private learningItemService : LearningitemService,
  	 private router : Router) { }

  ngOnInit() {
  	this.learningItemService.getLearningItems()
  	.subscribe(learningItems => this.learningItems = learningItems);

  }

  delete(learningItem: LearningItem): void {
    this.learningItemService.deleteLearningItem(learningItem.id)
      .subscribe( data => {
        this.learningItems = this.learningItems.filter(u => u !== learningItem);
      });
  }
}
