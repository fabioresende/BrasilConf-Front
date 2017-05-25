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
var router_1 = require('@angular/router');
var dashboard_routes_1 = require('./dashboard.routes');
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var auth_service_1 = require("./autentication/auth.service");
var angular2_jwt_1 = require("angular2-jwt");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(dashboard_routes_1.MODULE_ROUTES),
                http_1.HttpModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule, forms_1.ReactiveFormsModule
            ],
            declarations: [
                dashboard_routes_1.MODULE_COMPONENTS
            ],
            providers: [
                auth_service_1.AuthService,
                angular2_jwt_1.AuthHttp,
                angular2_jwt_1.JwtHelper,
                angular2_jwt_1.provideAuth({
                    headerName: 'Authorization',
                    headerPrefix: 'bearer',
                    tokenName: 'token',
                    tokenGetter: (function () { return localStorage.getItem('id_token'); }),
                    globalHeaders: [{ 'Content-Type': 'application/json' }],
                    noJwtError: true
                })
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map