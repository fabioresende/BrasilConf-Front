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
var sidebar_routes_config_1 = require('./sidebar-routes.config');
var auth_service_1 = require("../dashboard/autentication/auth.service");
var Usuario_1 = require("../dashboard/user/Usuario");
var SidebarComponent = (function () {
    function SidebarComponent(authService) {
        this.authService = authService;
        this.usuario = new Usuario_1.Usuario();
        this.menuItems = new Array();
    }
    ;
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUsuarioLogado().then(function (usuario) {
            _this.usuario = usuario;
            _this.menuItems = sidebar_routes_config_1.ROUTES.filter(mostrarMenu(_this.usuario));
            function mostrarMenu(usuario) {
                return function (menuItem) {
                    if ($.inArray(usuario.tipo_empresa.toString(), menuItem.permissao) != -1) {
                        return menuItem;
                    }
                };
            }
            $.getScript('../../assets/js/sidebar-moving-tab.js');
        });
    };
    SidebarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sidebar-cmp',
            templateUrl: 'sidebar.component.html',
            styleUrls: ['sidebar.component.css'],
            providers: [auth_service_1.AuthService]
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map