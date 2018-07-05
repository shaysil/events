import { Component } from '@angular/core'
import {Router} from '@angular/router'
import { EventService } from '../shared';

@Component({
templateUrl:'./create-event.component.html'

})

export class createEventComponent {
    newEvent
    isDirty:boolean=false;
    constructor(private router:Router,private eventService:EventService)  {}
    Cancel(){
        this.router.navigate(['/events'])
    } 
    saveEvent(formValues){
            this.eventService.saveEvent(formValues)
            this.router.navigate(['/events'])
    }


}
 