import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Checkpoint } from './Checkpoint';

@Injectable()
export class TicketsService {
  private ticketsUrl = 'app/tickets'; // URL to web api

  constructor(private http: HttpClient) {}

  getTickets() {
    return this.http
      .get<Ticket[]>(this.ticketsUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getTicket(id: number): Observable<Ticket> {
    return this.getTickets().pipe(
      map(tickets => tickets.find(ticket => ticket.id === id))
    );
  }

  save(ticket: Ticket) {
    if (ticket.id) {
      return this.put(ticket);
    }
    return this.post(ticket);
  }

  delete(ticket: Ticket) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.ticketsUrl}/${ticket.id}`;

    return this.http.delete<Ticket>(url).pipe(catchError(this.handleError));
  }

  // Add new Ticket
  private post(ticket: Ticket) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Ticket>(this.ticketsUrl, ticket)
      .pipe(catchError(this.handleError));
  }

  // Update existing Ticket
  private put(ticket: Ticket) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = `${this.ticketsUrl}/${ticket.id}`;

    return this.http.put<Ticket>(url, ticket).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
