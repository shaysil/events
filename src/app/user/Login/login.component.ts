import { Component, OnInit } from '@angular/core'
import { AuthService } from '../auth.service';
import {Router} from '@angular/router'

@Component({

    templateUrl: './login.component.html',
    styles:[`
    em{float:right; color:red; padding-left:10px}
    `]
})

export class LoginComponent{

    username
    password   
    mouseoverLogin
    constructor (private authService:AuthService,private router:Router){

    }
    login(fromValues){
        this.authService.loginUser(fromValues.username,fromValues.password)
        this.router.navigate(['events'])
    }
    cancel(){
        this.router.navigate(['events'])
    }
}