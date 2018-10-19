import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Challenge } from '../model/challenge';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ChallengeService {

  private challengesUrl = 'http://ekita-api.herokuapp.com/api/challenges';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET challenges from the server */
  getChallenges (): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(this.challengesUrl)
      .pipe(
        tap(challenges => this.log('fetched challenges')),
        catchError(this.handleError('getChallenges', []))
      );
  }

  /** GET challenge by id. Return `undefined` when id not found */
  getChallengeNo404<Data>(id: number): Observable<Challenge> {
    const url = `${this.challengesUrl}/?id=${id}`;
    return this.http.get<Challenge[]>(url)
      .pipe(
        map(challenges => challenges[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} challenge id=${id}`);
        }),
        catchError(this.handleError<Challenge>(`getChallenge id=${id}`))
      );
  }

  /** GET challenge by id. Will 404 if id not found */
  getChallenge(id: number): Observable<Challenge> {
    const url = `${this.challengesUrl}/${id}`;
    return this.http.get<Challenge>(url).pipe(
      tap(_ => this.log(`fetched challenge id=${id}`)),
      catchError(this.handleError<Challenge>(`getChallenge id=${id}`))
    );
  }

  /* GET challenges whose name contains search term */
  searchChallenges(term: string): Observable<Challenge[]> {
    if (!term.trim()) {
      // if not search term, return empty challenge array.
      return of([]);
    }
    return this.http.get<Challenge[]>(`${this.challengesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found challenges matching "${term}"`)),
      catchError(this.handleError<Challenge[]>('searchChallenges', []))
    );
  }

  //////// Save methods //////////
  createChallenge(challenge: Challenge) {
    return this.http.post<Challenge>(this.challengesUrl, challenge);
  }
  /** POST: add a new challenge to the server */
  addChallenge (challenge: Challenge): Observable<Challenge> {
    return this.http.post<Challenge>(this.challengesUrl, challenge, httpOptions).pipe(
      tap((challenge: Challenge) => this.log(`added challenge w/ id=${challenge.id}`)),
      catchError(this.handleError<Challenge>('addChallenge'))
    );
  }

  /** DELETE: delete the challenge from the server */
  deleteChallenge (challenge: Challenge | number): Observable<Challenge> {
    const id = typeof challenge === 'number' ? challenge : challenge.id;
    const url = `${this.challengesUrl}/${id}`;

    return this.http.delete<Challenge>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted challenge id=${id}`)),
      catchError(this.handleError<Challenge>('deleteChallenge'))
    );
  }

  /** PUT: update the challenge on the server */
  updateChallenge (challenge: Challenge): Observable<any> {
    return this.http.patch(this.challengesUrl+'/'+challenge.id, challenge, httpOptions).pipe(
      tap(_ => this.log(`updated challenge id=${challenge.id}`)),
      catchError(this.handleError<any>('updateChallenge'))
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

  /** Log a ChallengeService message with the MessageService */
  private log(message: string) {
  }
}
