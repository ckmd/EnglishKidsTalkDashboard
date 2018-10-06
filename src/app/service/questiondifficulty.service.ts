import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionDifficulty } from '../model/questionDifficulty';

@Injectable({
  providedIn: 'root'
})
export class QuestionDifficultyService {
	private url = 'http://ekita-api.herokuapp.com/api/question-difficulties';

  constructor(private http : HttpClient) { }

  public getQuestionDifficulties(): Observable<QuestionDifficulty[]>{
    	return this.http.get<QuestionDifficulty[]>(this.url);
    }

  getQuestionDifficulty(id: number) {
    return this.http.get<QuestionDifficulty>(this.url + '/' + id);
  }
    
	createQuestionDifficulty(questionDifficulty: QuestionDifficulty) {
    	return this.http.post<QuestionDifficulty[]>(this.url, questionDifficulty);
  }

    deleteQuestionDifficulty(id: number) {
    	return this.http.delete(this.url + '/' + id);
  }

  updateQuestionDifficulty(questionDifficulty: QuestionDifficulty){
      return this.http.put<any>(this.url, questionDifficulty);
  }
}
