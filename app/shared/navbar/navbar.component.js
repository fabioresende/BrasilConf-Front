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
var sidebar_routes_config_1 = require('../.././sidebar/sidebar-routes.config');
var common_1 = require('@angular/common');
var Usuario_1 = require("../../dashboard/user/Usuario");
var auth_service_1 = require("../../dashboard/autentication/auth.service");
var router_1 = require("@angular/router");
var NavbarComponent = (function () {
    function NavbarComponent(location, authService, router) {
        this.authService = authService;
        this.router = router;
        this.location = location;
        this.usuario = new Usuario_1.Usuario();
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = sidebar_routes_config_1.ROUTES.filter(function (listTitle) { return listTitle; });
        this.authService.getUsuarioLogado().then(function (usuario) {
            _this.usuario = usuario;
        });
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/']);
    };
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navbar-cmp',
            templateUrl: 'navbar.component.html',
            providers: [auth_service_1.AuthService],
            styleUrls: ['navbar.component.css']
        }), 
        __metadata('design:paramtypes', [common_1.Location, auth_service_1.AuthService, router_1.Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map