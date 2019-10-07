import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Checkpoint} from '../models/checkpoint';
import {CheckpointService} from '../models/checkpoint.service';

@Component({
  selector: 'app-infocheckpoint',
  templateUrl: './infocheckpoint.component.html',
  styleUrls: ['./infocheckpoint.component.scss']
})
export class InfocheckpointComponent implements OnInit {
  @Input() checkpoint: Checkpoint;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here


  constructor(private checkpointService: CheckpointService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params.id !== undefined) {
        const id = +params.id;
        this.navigated = true;
        this.checkpointService.getCheckpoint(id).subscribe(checkpoint => (this.checkpoint = checkpoint));
      } else {
        this.navigated = false;
        this.checkpoint = new Checkpoint();
      }
    });
  }

/*  save(): void {
    this.ticketsService.save(this.ticket).subscribe(ticket => {
      this.ticket = ticket; // saved ticket, w/ id if new
      this.goBack(ticket);
    }, error => (this.error = error));
    this.agentsService.save(this.agent).subscribe(agent => {
      this.agent = agent; // saved ticket, w/ id if new
    }, error => (this.error = error));
    this.prioritysService.save(this.priority).subscribe(priority => {
      this.priority = priority; // saved ticket, w/ id if new
    }, error => (this.error = error));
    this.statutsService.save(this.statut).subscribe(statut => {
      this.statut = statut; // saved ticket, w/ id if new
    }, error => (this.error = error));
  }

  goBack(savedTicket: Ticket = null, savedAgent: Agent = null): void {
    this.close.emit(savedTicket);
    if (this.navigated) {
      window.history.back();
    }
    this.close.emit(savedAgent);
    if (this.navigated) {
      window.history.back();
    }
  }*/
}
