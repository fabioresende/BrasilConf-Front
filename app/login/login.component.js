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
var common_1 = require('@angular/common');
var auth_service_1 = require("../dashboard/autentication/auth.service");
var Login_1 = require("./Login");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var LoginComponent = (function () {
    function LoginComponent(authService, location, router) {
        this.authService = authService;
        this.location = location;
        this.router = router;
        this.login = new Login_1.Login();
        this.cardLogin = false;
    }
    ;
    LoginComponent.prototype.ngOnInit = function () {
        this.formulario = new forms_1.FormGroup({
            usuario: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            senha: new forms_1.FormControl('', [forms_1.Validators.minLength(5)]),
        });
    };
    LoginComponent.prototype.logar = function (login, isValid) {
        var _this = this;
        this.login = login;
        if (isValid) {
            this.authService.login(login.usuario, login.senha).then(function (data) {
                if (data.error) {
                    console.log(data.error);
                }
                else {
                    _this.router.navigate(['aplication/home']);
                }
            });
        }
    };
    LoginComponent.prototype.showCardLogin = function () {
        this.cardLogin = true;
    };
    LoginComponent.prototype.blurCardLogin = function () {
        this.cardLogin = false;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            moduleId: module.id,
            templateUrl: 'login.component.html',
            providers: [auth_service_1.AuthService],
            styleUrls: ['login.component.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, common_1.Location, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map