import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {AuthService} from "../dashboard/autentication/auth.service";
import {Login} from "./Login";
import {Router} from "@angular/router";
@Component({
    selector: 'login',
    moduleId: module.id,
    templateUrl: 'login.component.html',
    providers: [AuthService],
    styleUrls: [ 'login.component.css' ]
})

export class LoginComponent implements OnInit {
    private login : Login[];
    constructor(
        private authService: AuthService,
        private location: Location,
        private router:Router
    ){};
    ngOnInit() {
        // // $.getScript('../../../assets/js/material-dashboard.js');
    }
    logar(login){
        this.router.navigate(['/home']);
    }

}
