import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionCategory } from '../model/questionCategory';

@Injectable({
  providedIn: 'root'
})
export class QuestioncategoryService {

	private url = 'http://ekita-api.herokuapp.com/api/question-categories';

  constructor(private http : HttpClient) { }

  public getQuestionCategories(): Observable<QuestionCategory[]>{
    	return this.http.get<QuestionCategory[]>(this.url);
    }
}
