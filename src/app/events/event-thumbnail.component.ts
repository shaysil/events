import { Component, Input } from '@angular/core';
import { IEvent } from './shared';

@Component({
  selector: 'events-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
  .pad-left{margin-left:10px;}
  .well div {color:#bbb;}
  .thumbnail{ min-height:210px;}
  `]
})
export class EventsThumbnailComponent {
  @Input() event: IEvent
  getstartTimeStyle() {
    if (this.event && this.event.time === '8:00 am')
      return { color: '#003300', 'font-weight': 'bold' }
    return []
  }

}
