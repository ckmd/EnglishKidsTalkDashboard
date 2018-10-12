import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Answer } from '../model/answer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AnswerService {
  private answersUrl = 'http://ekita-api.herokuapp.com/api/answers';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET answers from the server */
  getAnswers (): Observable<Answer[]> {
    return this.http.get<Answer[]>(this.answersUrl)
      .pipe(
        tap(answers => this.log('fetched answers')),
        catchError(this.handleError('getAnswers', []))
      );
  }

  /** GET answer by id. Return `undefined` when id not found */
  getAnswerNo404<Data>(id: number): Observable<Answer> {
    const url = `${this.answersUrl}/?id=${id}`;
    return this.http.get<Answer[]>(url)
      .pipe(
        map(answers => answers[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} answer id=${id}`);
        }),
        catchError(this.handleError<Answer>(`getAnswer id=${id}`))
      );
  }

  /** GET answer by id. Will 404 if id not found */
  getAnswer(id: number): Observable<Answer> {
    const url = `${this.answersUrl}/${id}`;
    return this.http.get<Answer>(url).pipe(
      tap(_ => this.log(`fetched answer id=${id}`)),
      catchError(this.handleError<Answer>(`getAnswer id=${id}`))
    );
  }

  /* GET answers whose name contains search term */
  searchAnswers(term: string): Observable<Answer[]> {
    if (!term.trim()) {
      // if not search term, return empty answer array.
      return of([]);
    }
    return this.http.get<Answer[]>(`${this.answersUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found answers matching "${term}"`)),
      catchError(this.handleError<Answer[]>('searchAnswers', []))
    );
  }

  //////// Save methods //////////
  createAnswer(answer: Answer) {
    return this.http.post<Answer>(this.answersUrl, answer);
  }
  /** POST: add a new answer to the server */
  addAnswer (answer: Answer): Observable<Answer> {
    return this.http.post<Answer>(this.answersUrl, answer, httpOptions).pipe(
      tap((answer: Answer) => this.log(`added answer w/ id=${answer.id}`)),
      catchError(this.handleError<Answer>('addAnswer'))
    );
  }

  /** DELETE: delete the answer from the server */
  deleteAnswer (answer: Answer | number): Observable<Answer> {
    const id = typeof answer === 'number' ? answer : answer.id;
    const url = `${this.answersUrl}/${id}`;

    return this.http.delete<Answer>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted answer id=${id}`)),
      catchError(this.handleError<Answer>('deleteAnswer'))
    );
  }

  /** PUT: update the answer on the server */
  updateAnswer (answer: Answer): Observable<any> {
    return this.http.put(this.answersUrl+'/'+answer.id, answer, httpOptions).pipe(
      tap(_ => this.log(`updated answer id=${answer.id}`)),
      catchError(this.handleError<any>('updateAnswer'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a AnswerService message with the MessageService */
  private log(message: string) {
  }
}
