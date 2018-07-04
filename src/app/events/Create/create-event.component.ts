import { Component } from '@angular/core'
import {Router} from '@angular/router'
@Component({
templateUrl:'./create-event.component.html'

})

export class createEventComponent {
    isDirty:boolean=false;
    constructor(private router:Router)  {}
    Cancel(){
        this.router.navigate(['/events'])
    } 
}
 