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
var user_service_1 = require('../user/user.service');
var Usuario_1 = require("../user/Usuario");
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var UsuarioDetalhesComponent = (function () {
    function UsuarioDetalhesComponent(usuarioService, route, location, fb) {
        this.usuarioService = usuarioService;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.events = [];
        this.usuario = null;
        this.usuarioSelecionado = this.routerParams(this.location.path());
    }
    ;
    UsuarioDetalhesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.usuarioSelecionado != 0) {
            this.route.params
                .switchMap(function (params) { return _this.usuarioService.getUsuario(+params['id']); })
                .subscribe(function (usuario) { return _this.usuario = usuario; });
        }
        else {
            this.usuario = new Usuario_1.Usuario();
        }
        this.formulario = new forms_1.FormGroup({
            nome: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            cpf: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            telefone: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            usuario: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            senha: new forms_1.FormControl('', [forms_1.Validators.minLength(8)]),
        });
        this.buscarTiposUsuarios();
    };
    UsuarioDetalhesComponent.prototype.goBack = function () {
        this.location.back();
    };
    UsuarioDetalhesComponent.prototype.salvarUsuario = function (usuario, isValid) {
        console.log(usuario, isValid);
        if (isValid) {
            this.usuarioService.salvarUsuario(usuario);
        }
    };
    UsuarioDetalhesComponent.prototype.buscarTiposUsuarios = function () {
        this.tiposUsuario = this.usuarioService.buscarTiposUsuario();
    };
    // subcribeToFormChanges() {
    //     const formularioChange$ = this.formulario.statusChanges;
    //     const formularioValueChanges$ = this.formulario.valueChanges;
    //
    //     formularioChange$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
    //     formularioValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    // }
    UsuarioDetalhesComponent.prototype.routerParams = function (params) {
        var parametros = params.split("/");
        var parametro = parametros[2];
        return parametro;
    };
    UsuarioDetalhesComponent = __decorate([
        core_1.Component({
            selector: 'usuario-detalhes',
            moduleId: module.id,
            templateUrl: 'usuario-detalhes.component.html',
            providers: [user_service_1.UsuarioService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UsuarioService, router_1.ActivatedRoute, common_1.Location, forms_1.FormBuilder])
    ], UsuarioDetalhesComponent);
    return UsuarioDetalhesComponent;
}());
exports.UsuarioDetalhesComponent = UsuarioDetalhesComponent;
//# sourceMappingURL=usuario-detalhes.component.js.map