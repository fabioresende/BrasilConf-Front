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
var http_1 = require("@angular/http");
require('rxjs/add/operator/toPromise');
var angular2_jwt_1 = require("angular2-jwt");
var AuthService = (function () {
    function AuthService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        this.jwtHelper = new angular2_jwt_1.JwtHelper();
        this.headers = new http_1.Headers;
        this.URLBASE = 'http://localhost:8000/api';
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }
    AuthService.prototype.login = function (email, senha) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/auth/login', 'usuario=' + email + '&senha=' + senha, {
                headers: _this.headers
            }).subscribe(function (res) {
                localStorage.setItem('id_token', res.json().access_token);
                localStorage.setItem('token_type', res.json().token_type);
                localStorage.setItem('expires_in', res.json().expires_in);
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthService.prototype.getEmailUserLogged = function () {
        this.authHttp.get('http://localhost:8080/token')
            .subscribe(function (data) {
            console.log(data);
            localStorage.setItem('id_token', data.json().token);
        }, function (err) { return console.log(err); }, function () { return console.log('Complete'); });
    };
    AuthService.prototype.tokenSubscription = function () {
        this.authHttp.tokenStream
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Complete'); });
    };
    AuthService.prototype.useJwtHelper = function () {
        var token = localStorage.getItem('id_token');
        var info = {
            'decoded': this.jwtHelper.decodeToken(token),
            'expiration_date': this.jwtHelper.getTokenExpirationDate(token),
            'is_expired': this.jwtHelper.isTokenExpired(token)
        };
        console.log(info);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('id_token');
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('id_token');
        return this.jwtHelper.isTokenExpired(token);
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map