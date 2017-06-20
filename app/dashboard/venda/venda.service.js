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
var VendaService = (function () {
    function VendaService(http) {
        this.http = http;
        this.teste = null;
    }
    VendaService.prototype.getProdutos = function () {
        return this.http.get("/produtos/venda")
            .toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    ;
    // stub
    VendaService.prototype.getProduto = function (idProduto) {
        return this.http.get("/produto/buscar/" + idProduto)
            .toPromise()
            .then(function (response) {
            return response.json();
        });
    };
    VendaService.prototype.salvarProduto = function (produto) {
        return this.http.post("/produto/salvar", produto)
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    VendaService.prototype.buscarDepartamentos = function () {
        return this.http.get("/produto/departamentos")
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    VendaService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    VendaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], VendaService);
    return VendaService;
}());
exports.VendaService = VendaService;
//# sourceMappingURL=venda.service.js.map