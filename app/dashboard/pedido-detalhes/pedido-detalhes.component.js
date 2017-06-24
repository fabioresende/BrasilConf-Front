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
var common_1 = require('@angular/common');
var auth_service_1 = require('../autentication/auth.service');
var pedido_service_1 = require("../pedido-venda/pedido.service");
var Pedido_1 = require("../pedido-venda/Pedido");
var Loja_1 = require("../loja/Loja");
var Produto_1 = require("../venda/Produto");
var Mensagem_1 = require("../Mensagem");
var PedidoDetalhesComponent = (function () {
    function PedidoDetalhesComponent(pedidoService, location, router, authService) {
        this.pedidoService = pedidoService;
        this.location = location;
        this.router = router;
        this.authService = authService;
        this.pedido = new Pedido_1.Pedido();
        this.pedido.loja = new Loja_1.Loja();
        this.pedido.produto = new Produto_1.Produto();
        this.pedidoSelecionado = 1;
        this.ehLoja = false;
        this.cardMensagem = false;
        this.mensagem = new Mensagem_1.Mensagem();
    }
    ;
    PedidoDetalhesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var param = this.routerParams(this.location.path());
        this.pedidoService.buscarPedido(param).then(function (data) {
            _this.pedido = data;
        });
        this.authService.getUsuarioLogado().then(function (usuario) {
            if (usuario.tipo_empresa == 2) {
                _this.ehLoja = true;
            }
        });
    };
    PedidoDetalhesComponent.prototype.goBack = function () {
        this.location.back();
    };
    PedidoDetalhesComponent.prototype.confirmarPedido = function () {
        var _this = this;
        this.pedidoService.confirmarPedido(this.pedido).then(function (data) {
            _this.mensagem = data;
            _this.cardMensagem = true;
        });
    };
    PedidoDetalhesComponent.prototype.finalizarPedido = function () {
        var _this = this;
        this.pedidoService.finalizarPedido(this.pedido).then(function (data) {
            _this.mensagem = data;
            _this.cardMensagem = true;
        });
    };
    PedidoDetalhesComponent.prototype.routerParams = function (params) {
        var parametros = params.split("/");
        var parametro = parametros[3];
        return parametro;
    };
    PedidoDetalhesComponent.prototype.blurCardMensagem = function () {
        this.cardMensagem = false;
    };
    PedidoDetalhesComponent = __decorate([
        core_1.Component({
            selector: 'pedido-detalhes-cmp',
            moduleId: module.id,
            templateUrl: 'pedido-detalhes.component.html',
            providers: [pedido_service_1.PedidoService, auth_service_1.AuthService]
        }), 
        __metadata('design:paramtypes', [pedido_service_1.PedidoService, common_1.Location, router_1.Router, auth_service_1.AuthService])
    ], PedidoDetalhesComponent);
    return PedidoDetalhesComponent;
}());
exports.PedidoDetalhesComponent = PedidoDetalhesComponent;
//# sourceMappingURL=pedido-detalhes.component.js.map