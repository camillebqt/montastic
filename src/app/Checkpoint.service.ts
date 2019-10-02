import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Checkpoint } from './Checkpoint';

@Injectable()
export class CheckpointService {
  private CheckpointUrl = 'https://www.montastic.com/checkpoints'; // URL to web api

  constructor(private http: HttpClient) {}

  getCheckpoints() {
    return this.http
      .get<Checkpoint[]>(this.CheckpointUrl)
      .pipe(map(data => data), catchError(this.handleError));
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
  private post(checkpoint: Checkpoint) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Checkpoint>(this.CheckpointUrl, checkpoint)
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
