import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import {HttpModule} from "@angular/http"
import {BrowserModule} from "@angular/platform-browser";
@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES),
        HttpModule,
        BrowserModule
    ],
    declarations: [
        MODULE_COMPONENTS
    ],

})

export class DashboardModule{}
