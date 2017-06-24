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
var pedido_service_1 = require("../pedido-venda/pedido.service");
var PedidoComponent = (function () {
    function PedidoComponent(pedidoService, route, router, authService) {
        this.pedidoService = pedidoService;
        this.route = route;
        this.router = router;
        this.authService = authService;
    }
    ;
    PedidoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.pedidoService.getPedidos(); })
            .subscribe(function (pedidos) { return _this.pedidos = pedidos; });
    };
    PedidoComponent.prototype.editarPedido = function (idPedido) {
        this.router.navigate(['/aplication/pedido-detalhes', idPedido]);
    };
    PedidoComponent = __decorate([
        core_1.Component({
            selector: 'pedido-cmp',
            moduleId: module.id,
            templateUrl: 'pedido.component.html',
            providers: [pedido_service_1.PedidoService, auth_service_1.AuthService],
            styleUrls: ['pedido.component.css']
        }), 
        __metadata('design:paramtypes', [pedido_service_1.PedidoService, router_1.ActivatedRoute, router_1.Router, auth_service_1.AuthService])
    ], PedidoComponent);
    return PedidoComponent;
}());
exports.PedidoComponent = PedidoComponent;
//# sourceMappingURL=pedido.component.js.map