import { Component, OnInit } from '@angular/core'

@Component({

    templateUrl: './login.component.html',

})
export class LoginComponent{
    username
    password   

    login(fromValues){
        console.log(fromValues)
    }
}