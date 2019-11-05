import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError as observableThrowError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Checkpoint } from '../models/checkpoint';
import {API_URL, API_BASE_URL, API_KEY} from '../models/global';
import {Team} from '../models/team';
import {Interceptor} from './httpconfig.interceptor';
import {error} from 'util';

@Injectable()
export class CheckpointService {
  constructor(private http: HttpClient) {}
  getTeams(): Observable<Team[]> {
    const URL = this.baseUrl + '/all_my_teams';
    return this.http
      .get<Team[]>(URL)
      .pipe(map(data => data), catchError(this.handleError));
  }
  getTeam(id: string): Observable<Team> {
    const URL = this.baseUrl + `/all_my_teams/${id}`;
    return this.http
      .get<Team>(URL)
      .pipe(map(data => data), catchError(this.handleError));
  }
  getWorkspace() {
    const URL = API_URL + '/current_api_key';
    console.log('<<<<<<<API KEY:', sessionStorage.getItem('API_KEY'));
    return this.http
      .get<any>(URL)
      .pipe(map(data => data), catchError(this.handleError));
  }
  get baseUrl() {
    return API_BASE_URL + '/' + sessionStorage.getItem('workspace_id');
  }
  getCheckpoints(): Observable<Checkpoint[]> {
    const URL = this.baseUrl + '/checklists';
    console.log('<<<<<<<API KEY:', sessionStorage.getItem('API_KEY'));
    return this.http
      .get<Checkpoint[]>(URL)
      .pipe(map(data => data), catchError(this.handleError));

    /*    return this.http
          .get<Checkpoint[]>(this.CheckpointUrl)
          .pipe(map(data => data), catchError(this.handleError));*/
  }

  getCheckpoint(id: string): Observable<Checkpoint> {
    const URL = API_URL + `/checklists/${id}`;
    return this.http
      .get<Checkpoint>(URL)
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
    return this.http
      .delete<Checkpoint>(URL)
      .pipe(map(data => data), catchError(this.handleError));
  }

  // Add new Checkpoint
  private post(checkpoint: Checkpoint) {
    const URL = this.baseUrl + `/checklists`;
    return this.http
      .post<Checkpoint>(URL, checkpoint)
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
    return this.http
      .patch<Checkpoint>(URL, checkpoint)
      .pipe(map(data => data), catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.log(res);
    return observableThrowError(res.error || 'Server error');
  }
}
