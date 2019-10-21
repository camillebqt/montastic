import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, of, throwError as observableThrowError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Checkpoint } from './checkpoint';
import {API_URL, API_BASE_URL} from './global';
import {Team} from './team';
import { delay } from 'rxjs/operators';

@Injectable()
export class CheckpointService {
  // private CheckpointUrl = 'https://api.bamzoogle.com/api/v1/workspaces/JK6PWOCMNL7ISQZ';
  readonly API_KEY = 'BAM-d4942cc2205c473abda2bfc4b7e884768229d73262384d4aad75f6ca262e9037';

  constructor(private http: HttpClient) {}

  getTeams(): Observable<Team[]> {
    const URL = API_BASE_URL + '/all_my_teams';
    const headers = new HttpHeaders({'X-API-KEY': this.API_KEY});
    return this.http
      .get<Team[]>(URL, {
        headers
      })
      .pipe(map(data => data), catchError(this.handleError));
  }
  getTeam(id: string): Observable<Team> {
    const URL = API_BASE_URL + `/all_my_teams/${id}`;
    const headers = new HttpHeaders({'X-API-KEY': this.API_KEY});
    return this.http
      .get<Team>(URL, {
        headers
      })
      .pipe(map(data => data), catchError(this.handleError));
  }

  getCheckpoints(): Observable<Checkpoint[]> {
    const URL = API_BASE_URL + '/checklists';
    const headers = new HttpHeaders({'X-API-KEY': this.API_KEY});
    return this.http
      .get<Checkpoint[]>(URL, {
        headers
      })
      .pipe(map(data => data), catchError(this.handleError));

/*    return this.http
      .get<Checkpoint[]>(this.CheckpointUrl)
      .pipe(map(data => data), catchError(this.handleError));*/
  }

  getCheckpoint(id: string): Observable<Checkpoint> {
    const URL = API_URL + `/checklists/${id}`;
    const headers = new HttpHeaders({'X-API-KEY': this.API_KEY});
    return this.http
      .get<Checkpoint>(URL, {
        headers
      })
      .pipe(map(data => data), catchError(this.handleError));

    /*    return this.http
          .get<Checkpoint[]>(this.CheckpointUrl)
          .pipe(map(data => data), catchError(this.handleError));*/
  }

  save(checkpoint: Checkpoint) {
    if (checkpoint.id) {
      return this.put(checkpoint);
    }
    return this.post(checkpoint);
  }


  // Delete existing Checkpoint
  delete(checkpoint: Checkpoint) {
    const URL = API_URL + `/checklists/${checkpoint.id}`;
    const headers = new HttpHeaders({'X-API-KEY': this.API_KEY});
    return this.http
      .delete<Checkpoint>(URL, {
        headers
      })
      .pipe(map(data => data), catchError(this.handleError));
  }

  // Add new Checkpoint
  private post(checkpoint: Checkpoint) {
    const URL = API_BASE_URL + `/checklists`;
    const headers = new HttpHeaders({'X-API-KEY': this.API_KEY});
    return this.http
      .post<Checkpoint>(URL, checkpoint, {
        headers
      })
      .pipe(map(data => data), catchError(this.handleError));
  }
/*  private post(checkpoint: Checkpoint) {
    const URL = API_BASE_URL + '/checklists';
    const headers = new HttpHeaders({'X-API-KEY': this.API_KEY});
    // 'Content-Type': 'application/json'
    return this.http
      .post<Checkpoint>(URL, checkpoint, {
        headers
      })
      .pipe(catchError(this.handleError));
  }*/

  // Update existing Checkpoint
  private put(checkpoint: Checkpoint) {
    const URL = API_URL + `/checklists/${checkpoint.id}`;
    const headers = new HttpHeaders({'X-API-KEY': this.API_KEY});
    return this.http
      .patch<Checkpoint>(URL, checkpoint, {
        headers
      })
      .pipe(map(data => data), catchError(this.handleError));
  }
  loadCheckpoint(checkpoint: Checkpoint) {
    return of<Checkpoint>(checkpoint).pipe(
      delay(10000)
    );
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
