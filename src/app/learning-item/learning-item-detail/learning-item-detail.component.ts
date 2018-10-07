import { LearningitemService } from '../../service/learningitem.service';
import { LearningItem } from '../../model/learning-item';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-learning-item-detail',
  templateUrl: './learning-item-detail.component.html',
  styleUrls: ['./learning-item-detail.component.css']
})
export class LearningItemDetailComponent implements OnInit {

  @Input() learningItem: LearningItem;

  constructor(
    private route: ActivatedRoute,
  	private learningItemService : LearningitemService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getLearningItem();
  }

  getLearningItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.learningItemService.getLearningItem(id)
      .subscribe(learningItem => this.learningItem = learningItem);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.learningItemService.updateLearningItem(this.learningItem)
      .subscribe(() => this.goBack());
  }
}
