import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service'
import {ActivatedRoute} from '@angular/router'
import { IEvent } from '../shared';
@Component({

    templateUrl: './event-details.component.html',
    styles: [`
  .container{paddgin-left:20px; padding-right:20px;}
  .event-image{height:100px;}
  `]
})
export class EventsDetailsComponent implements OnInit {
    event: IEvent;
    constructor(private eventservice: EventService, private activeroute:ActivatedRoute) {

    }
    ngOnInit() {
        this.event = this.eventservice.getEvent(+this.activeroute.snapshot.params['id'])
    }
}


