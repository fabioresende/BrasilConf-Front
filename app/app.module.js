"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var dashboard_module_1 = require('./dashboard/dashboard.module');
var sidebar_module_1 = require('./sidebar/sidebar.module');
var footer_module_1 = require('./shared/footer/footer.module');
var navbar_module_1 = require('./shared/navbar/navbar.module');
var common_1 = require('@angular/common');
var http_factory_1 = require("./http.factory");
var aplication_component_1 = require("./aplication/aplication.component");
var app_routes_1 = require("./app.routes");
var login_component_1 = require("./login/login.component");
var forms_1 = require("@angular/forms");
var canActiveViaAuthGuard_service_1 = require("./dashboard/autentication/canActiveViaAuthGuard.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                dashboard_module_1.DashboardModule,
                sidebar_module_1.SidebarModule,
                navbar_module_1.NavbarModule,
                http_1.HttpModule,
                footer_module_1.FooterModule,
                router_1.RouterModule.forRoot(app_routes_1.APP_MODULE_ROUTES),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                aplication_component_1.AplicationComponent,
                login_component_1.LoginComponent
            ],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                { provide: http_1.Http, useFactory: http_factory_1.httpFactory, deps: [http_1.XHRBackend, http_1.RequestOptions] },
                canActiveViaAuthGuard_service_1.CanActivateViaAuthGuard
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map