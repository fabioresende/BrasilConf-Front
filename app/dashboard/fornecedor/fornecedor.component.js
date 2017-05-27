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
var user_service_1 = require("./user.service");
var router_1 = require("@angular/router");
var common_1 = require('@angular/common');
var UserComponent = (function () {
    function UserComponent(usuarioService, route, location, router) {
        this.usuarioService = usuarioService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    ;
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        // // $.getScript('../../../assets/js/material-dashboard.js');
        this.route.params
            .switchMap(function (params) { return _this.usuarioService.getUsuarios(); })
            .subscribe(function (usuarios) { return _this.usuarios = usuarios; });
    };
    UserComponent.prototype.editarUsuario = function (idUsuario) {
        this.router.navigate(['/usuario-detalhes', idUsuario]);
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user-cmp',
            moduleId: module.id,
            templateUrl: 'user.component.html',
            providers: [user_service_1.UsuarioService],
            styleUrls: ['user.component.css']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof user_service_1.UsuarioService !== 'undefined' && user_service_1.UsuarioService) === 'function' && _a) || Object, router_1.ActivatedRoute, common_1.Location, router_1.Router])
    ], UserComponent);
    return UserComponent;
    var _a;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=fornecedor.component.js.map