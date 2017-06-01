import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {Http, HttpModule, RequestOptions, XHRBackend} from '@angular/http';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {DashboardModule} from './dashboard/dashboard.module';
import {SidebarModule} from './sidebar/sidebar.module';
import {FooterModule} from './shared/footer/footer.module';
import {NavbarModule} from './shared/navbar/navbar.module';

import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {httpFactory} from "./http.factory";
import {AplicationComponent} from "./aplication/aplication.component";
import {APP_MODULE_ROUTES} from "./app.routes";
import {LoginComponent} from "./login/login.component";

@NgModule({
    imports: [
        BrowserModule,
        DashboardModule,
        SidebarModule,
        NavbarModule,
        HttpModule,
        FooterModule,
        RouterModule.forRoot(APP_MODULE_ROUTES)
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        AplicationComponent,
        LoginComponent
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: Http,useFactory: httpFactory,deps: [XHRBackend, RequestOptions]},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}