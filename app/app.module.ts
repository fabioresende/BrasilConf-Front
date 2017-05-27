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

@NgModule({
    imports: [
        BrowserModule,
        DashboardModule,
        SidebarModule,
        NavbarModule,
        HttpModule,
        FooterModule,
        RouterModule.forRoot([])
    ],
    declarations: [AppComponent, DashboardComponent],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: Http,useFactory: httpFactory,deps: [XHRBackend, RequestOptions]}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
