import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LearningTopic } from '../model/LearningTopic';

@Injectable({
  providedIn: 'root'
})
export class LearningtopicService {

	private url = 'http://ekita-api.herokuapp.com/api/learning-topics';

  constructor(private http : HttpClient) { }

  public getLearningTopics(): Observable<LearningTopic[]>{
    	return this.http.get<LearningTopic[]>(this.url);
    }
}
