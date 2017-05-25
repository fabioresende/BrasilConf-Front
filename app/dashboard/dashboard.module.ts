import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import {HttpModule} from "@angular/http"
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./autentication/auth.service";
import {AuthConfig, AuthHttp, JwtHelper, provideAuth} from "angular2-jwt";
@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        HttpModule,
        BrowserModule,
        FormsModule,ReactiveFormsModule
    ],
    declarations: [
        MODULE_COMPONENTS
    ],
    providers: [
        AuthService,
        AuthHttp,
        JwtHelper,
        provideAuth({
            headerName: 'Authorization',
            headerPrefix: 'bearer',
            tokenName: 'token',
            tokenGetter: (() => localStorage.getItem('id_token')),
            globalHeaders: [{ 'Content-Type': 'application/json' }],
            noJwtError: true
        })
    ]

})

export class DashboardModule{}
