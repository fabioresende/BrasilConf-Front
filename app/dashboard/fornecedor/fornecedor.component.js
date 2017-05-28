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
var router_1 = require("@angular/router");
require('rxjs/add/operator/switchMap');
var fornecedor_service_1 = require('./fornecedor.service');
var Fornecedor_1 = require("./Fornecedor");
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var auth_service_1 = require('../autentication/auth.service');
var FornecedorComponent = (function () {
    function FornecedorComponent(fornecedorService, route, location, fb, authService) {
        this.fornecedorService = fornecedorService;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.authService = authService;
        this.events = [];
        this.fornecedor = null;
        this.fornecedorSelecionado = 1;
    }
    ;
    FornecedorComponent.prototype.ngOnInit = function () {
        if (this.usuarioLogado) {
            this.fornecedorService.getFornecedor(0);
        }
        this.fornecedor = new Fornecedor_1.Fornecedor();
        this.formulario = new forms_1.FormGroup({
            nome: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            cnpj: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            telefone: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            logradouro: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            tipo_logradouro: new forms_1.FormControl('', [forms_1.Validators.required]),
            cep: new forms_1.FormControl('', [forms_1.Validators.required]),
            cidade: new forms_1.FormControl('', [forms_1.Validators.required]),
            estado: new forms_1.FormControl('', [forms_1.Validators.required]),
            url_logo: new forms_1.FormControl('', [forms_1.Validators.required]),
        });
    };
    FornecedorComponent.prototype.goBack = function () {
        this.location.back();
    };
    FornecedorComponent.prototype.salvarFornecedor = function (fornecedor, isValid) {
        if (isValid) {
            this.fornecedorService.salvarFornecedor(fornecedor);
        }
    };
    FornecedorComponent.prototype.buscarUsuarioLogado = function () {
        var idUsuarioLogado = this.authService.getIdUserLogged();
    };
    FornecedorComponent = __decorate([
        core_1.Component({
            selector: 'fornecedor',
            moduleId: module.id,
            templateUrl: 'fornecedor.component.html',
            providers: [fornecedor_service_1.FornecedorService, auth_service_1.AuthService]
        }), 
        __metadata('design:paramtypes', [fornecedor_service_1.FornecedorService, router_1.ActivatedRoute, common_1.Location, forms_1.FormBuilder, auth_service_1.AuthService])
    ], FornecedorComponent);
    return FornecedorComponent;
}());
exports.FornecedorComponent = FornecedorComponent;
//# sourceMappingURL=fornecedor.component.js.map
