import { Component, OnInit } from '@angular/core';
import { LearningtopicService } from '../../service/learningtopic.service';
import { LearningTopic } from '../../model/LearningTopic';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-learning-topic-show',
  templateUrl: './learning-topic-show.component.html',
  styleUrls: ['./learning-topic-show.component.css']
})
export class LearningTopicShowComponent implements OnInit {
	public topics = [];
  constructor(private learningtopicService : LearningtopicService) { }

  ngOnInit() {
  	this.learningtopicService.getLearningTopics()
  	.subscribe(data => this.topics = data);

  }

}
