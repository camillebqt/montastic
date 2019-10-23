import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError as observableThrowError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Checkpoint } from './checkpoint';
import {API_URL, API_BASE_URL, API_KEY} from './global';
import {Team} from './team';

@Injectable()
export class CheckpointService {
  constructor(private http: HttpClient) {}
  getTeams(): Observable<Team[]> {
    const URL = this.baseUrl + '/all_my_teams';
    const headers = new HttpHeaders({'X-API-KEY': sessionStorage.getItem('API_KEY')});
    return this.http
      .get<Team[]>(URL, {
        headers
      })
      .pipe(map(data => data), catchError(this.handleError));
  }
  getTeam(id: string): Observable<Team> {
    const URL = this.baseUrl + `/all_my_teams/${id}`;
    const headers = new HttpHeaders({'X-API-KEY': sessionStorage.getItem('API_KEY')});
    return this.http
      .get<Team>(URL, {
        headers
      })
      .pipe(map(data => data), catchError(this.handleError));
  }
  getWorkspace() {
    const URL = API_URL + '/current_api_key';
    const headers = new HttpHeaders({'X-API-KEY': sessionStorage.getItem('API_KEY')});
    console.log('<<<<<<<API KEY:', sessionStorage.getItem('API_KEY'));
    return this.http
      .get<any>(URL, {
        headers
      })
      .pipe(map(data => data), catchError(this.handleError));
  }
  get baseUrl() {
    return API_BASE_URL + '/' + sessionStorage.getItem('workspace_id');
  }
  getCheckpoints(): Observable<Checkpoint[]> {
    const URL = this.baseUrl + '/checklists';
    const headers = new HttpHeaders({'X-API-KEY': sessionStorage.getItem('API_KEY')});
    console.log('<<<<<<<API KEY:', sessionStorage.getItem('API_KEY'));
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
    const headers = new HttpHeaders({'X-API-KEY': sessionStorage.getItem('API_KEY')});
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
    const headers = new HttpHeaders({'X-API-KEY': sessionStorage.getItem('API_KEY')});
    return this.http
      .delete<Checkpoint>(URL, {
        headers
      })
      .pipe(map(data => data), catchError(this.handleError));
  }

  // Add new Checkpoint
  private post(checkpoint: Checkpoint) {
    const URL = this.baseUrl + `/checklists`;
    const headers = new HttpHeaders({'X-API-KEY': sessionStorage.getItem('API_KEY')});
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
    const headers = new HttpHeaders({'X-API-KEY': sessionStorage.getItem('API_KEY')});
    return this.http
      .patch<Checkpoint>(URL, checkpoint, {
        headers
      })
      .pipe(map(data => data), catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
