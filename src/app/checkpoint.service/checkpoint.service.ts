import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of, throwError as observableThrowError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Checkpoint } from '../checkpoint-feature/checkpoint';

const checkpointMock: Checkpoint[] = [
  {
    id: 1,
    url: 'google.com'
  },
  {
    id: 2,
    url: 'daskeyboard.com'
  }
] as Checkpoint[];
@Injectable()
export class CheckpointService {
  private CheckpointUrl = 'https://montastic.com/checkpoints'; // URL to web api
  constructor(private http: HttpClient) {}

  getCheckpoints() {
    /*const headers = new HttpHeaders({'X-API-KEY': '61029b064c0491d0ef5ea6b2e1b8df2b995af5a2', Accept: 'application/json'});
    return this.http
      .get<Checkpoint[]>(this.CheckpointUrl, {
        headers
      })
      .pipe(map(data => data), catchError(this.handleError));*/
    return of(checkpointMock);
  }

  getCheckpoint(id: number): Observable<Checkpoint> {
    return this.getCheckpoints().pipe(
      map(checkpoints => checkpoints.find(checkpoint => checkpoint.id === id))
    );
  }

  save(checkpoint: Checkpoint) {
    if (checkpoint.id) {
      return this.put(checkpoint);
    }
    return this.post(checkpoint);
  }

  delete(checkpoint: Checkpoint) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.CheckpointUrl}/${checkpoint.id}`;

    return this.http.delete<Checkpoint>(url).pipe(catchError(this.handleError));
  }

  // Add new Checkpoint
  post(checkpoint: Checkpoint) {
    const headers = new HttpHeaders({
      'X-API-KEY': '61029b064c0491d0ef5ea6b2e1b8df2b995af5a2', Accept: 'application/json', 'Content-type': 'application/json'
    });
    return this.http
      .post<Checkpoint>(this.CheckpointUrl, checkpoint, {
        headers
      })
      .pipe(catchError(this.handleError));
  }

  // Update existing Checkpoint
  private put(checkpoint: Checkpoint) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.CheckpointUrl}/${checkpoint.id}`;

    return this.http.put<Checkpoint>(url, checkpoint).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
