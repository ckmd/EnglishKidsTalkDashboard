import { LearningtopicService } from '../../service/learningtopic.service';
import { LearningTopic } from '../../model/LearningTopic';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-learning-topic-detail',
  templateUrl: './learning-topic-detail.component.html',
  styleUrls: ['./learning-topic-detail.component.css']
})
export class LearningTopicDetailComponent implements OnInit {

  @Input() learningTopic: LearningTopic;

  constructor(
    private route: ActivatedRoute,
  	private learningTopicService : LearningtopicService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getLearningTopic();
  }

  getLearningTopic(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.learningTopicService.getLearningTopic(id)
      .subscribe(learningTopic => this.learningTopic = learningTopic);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.learningTopicService.updateLearningTopic(this.learningTopic)
      .subscribe(() => this.goBack());
  }

}
