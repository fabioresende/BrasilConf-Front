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
var auth_service_1 = require("../autentication/auth.service");
var venda_service_1 = require("./venda.service");
var VendaComponent = (function () {
    function VendaComponent(vendaService, route, router, authService) {
        this.vendaService = vendaService;
        this.route = route;
        this.router = router;
        this.authService = authService;
    }
    ;
    VendaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vendaService.getProdutos().then(function (produtos) {
            _this.produtos = produtos;
        });
    };
    VendaComponent.prototype.compraProduto = function (idProduto) {
        this.router.navigate(['/aplication/venda-detalhes', idProduto]);
    };
    VendaComponent = __decorate([
        core_1.Component({
            selector: 'venda-cmp',
            moduleId: module.id,
            templateUrl: 'venda.component.html',
            providers: [venda_service_1.VendaService, auth_service_1.AuthService],
            styleUrls: ['venda.component.css']
        }), 
        __metadata('design:paramtypes', [venda_service_1.VendaService, router_1.ActivatedRoute, router_1.Router, auth_service_1.AuthService])
    ], VendaComponent);
    return VendaComponent;
}());
exports.VendaComponent = VendaComponent;
//# sourceMappingURL=venda.component.js.map