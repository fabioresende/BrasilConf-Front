import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {AuthService} from "../dashboard/autentication/auth.service";
import {Login} from "./Login";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'login',
    moduleId: module.id,
    templateUrl: 'login.component.html',
    providers: [AuthService],
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    private login: Login;
    private formulario: FormGroup;
    private cardLogin: boolean;

    constructor(private authService: AuthService,
                private location: Location,
                private router: Router) {
        this.login = new Login();
        this.cardLogin = false;
    };

    ngOnInit() {
        this.formulario = new FormGroup({
            usuario: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
            senha: new FormControl('', [<any>Validators.minLength(5)]),
        });
    }

    logar(login: Login, isValid: boolean): void {
        this.login = login;
        if (isValid) {
           this.authService.login(login.usuario, login.senha).then((data) => {
                    if (data.error) {
                        console.log(data.error);
                    }
                    else{
                        this.router.navigate(['aplication/home']);
                    }
                }
            );
        }
    }

    showCardLogin() {
        this.cardLogin = true;
    }

    blurCardLogin() {
        this.cardLogin = false;
    }
}
