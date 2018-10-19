import { LearningtopicService } from '../../service/learningtopic.service';
import { LearningTopic } from '../../model/LearningTopic';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-learning-topic-detail',
  templateUrl: './learning-topic-detail.component.html',
  styleUrls: ['./learning-topic-detail.component.css']
})
export class LearningTopicDetailComponent implements OnInit {

  @Input() learningTopic: LearningTopic;
  selectedFile: File = null;
  public id = this.route.snapshot.paramMap.get('id');

  constructor(
    private route: ActivatedRoute,
    private learningTopicService: LearningtopicService,
    private location: Location,
    private http: HttpClient
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
    this.onUpload();
    this.learningTopicService.updateLearningTopic(this.learningTopic)
      .subscribe(() => this.goBack());
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log(event);
  }
  onUpload() {
    const uploadData = new FormData();
    uploadData.append('learning_topic_image', this.selectedFile, this.selectedFile.name);

    this.http.patch('http://ekita-api.herokuapp.com/api/learning-topics/' + this.id, uploadData)
      .subscribe(res => { console.log(res); }
      );
  }
}
