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
var produto_service_1 = require("../produto/produto.service");
var Produto_1 = require("../produto/Produto");
var Pedido_1 = require("./Pedido");
var pedido_service_1 = require("./pedido.service");
var Mensagem_1 = require("../Mensagem");
var PedidoVendaComponent = (function () {
    function PedidoVendaComponent(pedidoService, route, location, produtoService) {
        this.pedidoService = pedidoService;
        this.route = route;
        this.location = location;
        this.produtoService = produtoService;
        this.events = [];
        this.produto = new Produto_1.Produto();
        this.pedido = new Pedido_1.Pedido();
        this.cardMensagem = false;
        this.mensagem = new Mensagem_1.Mensagem();
        this.produtoSelecionado = this.routerParams(this.location.path());
    }
    ;
    PedidoVendaComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.produtoSelecionado != 0) {
            var param = this.routerParams(this.location.path());
            this.produtoService.getProduto(param).then(function (produto) {
                _this.produto = produto;
                _this.pedido.valor_total = parseFloat(_this.produto.preco);
                _this.pedido.produto_id = _this.produto.id;
                _this.pedido.quantidade = 1;
            });
        }
    };
    PedidoVendaComponent.prototype.goBack = function () {
        this.location.back();
    };
    PedidoVendaComponent.prototype.salvarPedido = function () {
        var _this = this;
        this.pedidoService.salvarPedido(this.pedido).then(function (data) {
            _this.mensagem = data;
            $("#modal").addClass("modal-sombra");
            setTimeout(function () {
                $("#modal").addClass("in");
            }, 100);
        });
    };
    PedidoVendaComponent.prototype.changeValorTotal = function () {
        this.pedido.valor_total = eval(this.produto.preco) * this.pedido.quantidade;
    };
    PedidoVendaComponent.prototype.routerParams = function (params) {
        var parametros = params.split("/");
        var parametro = parametros[3];
        return parametro;
    };
    PedidoVendaComponent.prototype.blurCardMensagem = function () {
        this.mensagem.success = '';
        $("#modal").removeClass("in");
        setTimeout(function () {
            $("#modal").removeClass("modal-sombra");
        }, 2000);
    };
    PedidoVendaComponent = __decorate([
        core_1.Component({
            selector: 'pedido-venda',
            moduleId: module.id,
            templateUrl: 'pedido-venda.component.html',
            styleUrls: ['pedido-venda.component.css'],
            providers: [pedido_service_1.PedidoService, produto_service_1.ProdutoService]
        }), 
        __metadata('design:paramtypes', [pedido_service_1.PedidoService, router_1.ActivatedRoute, common_1.Location, produto_service_1.ProdutoService])
    ], PedidoVendaComponent);
    return PedidoVendaComponent;
}());
exports.PedidoVendaComponent = PedidoVendaComponent;
//# sourceMappingURL=pedido-venda.component.js.map