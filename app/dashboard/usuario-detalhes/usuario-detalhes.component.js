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
var common_1 = require('@angular/common');
var UsuarioDetalhesComponent = (function () {
    function UsuarioDetalhesComponent(usuarioService, route, location) {
        this.usuarioService = usuarioService;
        this.route = route;
        this.location = location;
        this.usuario = null;
    }
    ;
    UsuarioDetalhesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // $.getScript('../../../assets/js/material-dashboard.js');
        this.route.params
            .switchMap(function (params) { return _this.usuarioService.getUsuario(+params['id']); })
            .subscribe(function (usuario) { return _this.usuario = usuario; });
    };
    UsuarioDetalhesComponent.prototype.goBack = function () {
        this.location.back();
    };
    UsuarioDetalhesComponent = __decorate([
        core_1.Component({
            selector: 'usuario-detalhes',
            moduleId: module.id,
            templateUrl: 'usuario-detalhes.component.html',
            providers: [user_service_1.UsuarioService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UsuarioService, router_1.ActivatedRoute, common_1.Location])
    ], UsuarioDetalhesComponent);
    return UsuarioDetalhesComponent;
}());
exports.UsuarioDetalhesComponent = UsuarioDetalhesComponent;
//# sourceMappingURL=usuario-detalhes.component.js.map