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
var auth_service_1 = require("../autentication/auth.service");
var UserComponent = (function () {
    function UserComponent(usuarioService, route, router, authService) {
        this.usuarioService = usuarioService;
        this.route = route;
        this.router = router;
        this.authService = authService;
    }
    ;
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUsuarioLogado().then(function (usuario) {
            if (usuario.id_tipo_usuario != 1) {
                _this.router.navigate(['/aplication/usuario-detalhes', usuario.id]);
            }
        });
        this.route.params
            .switchMap(function (params) { return _this.usuarioService.getUsuarios(); })
            .subscribe(function (usuarios) { return _this.usuarios = usuarios; });
    };
    UserComponent.prototype.editarUsuario = function (idUsuario) {
        this.router.navigate(['/aplication/usuario-detalhes', idUsuario]);
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user-cmp',
            moduleId: module.id,
            templateUrl: 'user.component.html',
            providers: [user_service_1.UsuarioService, auth_service_1.AuthService],
            styleUrls: ['user.component.css']
        }), 
        __metadata('design:paramtypes', [user_service_1.UsuarioService, router_1.ActivatedRoute, router_1.Router, auth_service_1.AuthService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map