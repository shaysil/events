import { Component } from '@angular/core'
import {Router} from '@angular/router'
import { EventService } from '../shared';

@Component({
templateUrl:'./edit-event.component.html'

})

export class EditEventComponent {
    event:any
    isDirty:boolean=true;
    constructor(private router:Router,private eventService:EventService)  {}
    
    ngOnInit(){
            this.event = {
                id: 2,
                name: 'ng-nl',
                date: new Date('4/15/2037'),
                time: '9:00 am',
                price: 950.00,
                imageUrl: '/assets/images/ng-nl.png',
                location: {
                    address: 'The NG-NL Convention Center & Scuba Shop',
                    city: 'Amsterdam',
                    country: 'Netherlands'
                },
            }

    }
    
    Cancel(){
        this.router.navigate(['/events'])
    } 
    saveEvent(formValues){
            this.eventService.saveEvent(formValues)
            this.router.navigate(['/events'])
    }


}
 