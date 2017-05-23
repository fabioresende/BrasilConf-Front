import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import {HttpModule} from "@angular/http"
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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

})

export class DashboardModule{}
