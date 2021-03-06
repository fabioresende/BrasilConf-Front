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
var UsuarioService = (function () {
    function UsuarioService(http) {
        this.http = http;
        this.teste = null;
    }
    UsuarioService.prototype.getUsuarios = function () {
        return this.http.get("/usuarios")
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    ;
    UsuarioService.prototype.getUsuario = function (idUsuario) {
        return this.http.get("/usuario/buscar/" + idUsuario)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    UsuarioService.prototype.salvarUsuario = function (usuario) {
        return this.http.post("/usuario/salvar", usuario)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    UsuarioService.prototype.buscarTiposUsuario = function () {
        return this.http.get("/usuario/tipo-usuarios")
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    UsuarioService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    UsuarioService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UsuarioService);
    return UsuarioService;
}());
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=user.service.js.map