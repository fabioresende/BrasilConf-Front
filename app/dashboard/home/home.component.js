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
var initDemo = require('../../../assets/js/charts.js');
var ranking_service_1 = require("./ranking.service");
var Estabelecimento_1 = require("./Estabelecimento");
var common_1 = require('@angular/common');
var pedido_service_1 = require("../pedido-venda/pedido.service");
var HomeComponent = (function () {
    function HomeComponent(rankingService, pedidoService, location) {
        this.rankingService = rankingService;
        this.pedidoService = pedidoService;
        this.location = location;
        this.estabelecimento = new Estabelecimento_1.Estabelecimento();
    }
    ;
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // $('[data-toggle="checkbox"]').each(function () {
        //     if($(this).data('toggle') == 'switch') return;
        //
        //     var $checkbox = $(this);
        //     $checkbox.checkbox();
        // });
        initDemo();
        this.rankingService.getEstabelecimento().then(function (data) {
            _this.estabelecimento = data;
        });
        this.pedidoService.getPedidosPendentes().then(function (data) {
            _this.pedidosPendentes = data;
            _this.numPedidosPendentes = _this.pedidosPendentes.length;
        });
        this.rankingService.getRanking().then(function (data) {
            _this.empresasRankeadas = data;
        });
        this.rankingService.getQuantidadeUsuarios().then(function (data) {
            _this.numUsuarios = data;
        });
        this.rankingService.getQuantidadeProdutosMes().then(function (data) {
            _this.qtdProdutosMes = data;
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-cmp',
            moduleId: module.id,
            templateUrl: 'home.component.html',
            providers: [ranking_service_1.RankingService, pedido_service_1.PedidoService],
            styleUrls: ['home.component.css']
        }), 
        __metadata('design:paramtypes', [ranking_service_1.RankingService, pedido_service_1.PedidoService, common_1.Location])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map