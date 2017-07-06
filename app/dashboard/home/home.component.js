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
var Mensagem_1 = require("../Mensagem");
var ranking_service_1 = require("./ranking.service");
var Estabelecimento_1 = require("./Estabelecimento");
var common_1 = require('@angular/common');
var pedido_service_1 = require("../pedido-venda/pedido.service");
var router_1 = require("@angular/router");
var auth_service_1 = require("../autentication/auth.service");
var HomeComponent = (function () {
    function HomeComponent(rankingService, pedidoService, location, router, authService) {
        this.rankingService = rankingService;
        this.pedidoService = pedidoService;
        this.location = location;
        this.router = router;
        this.authService = authService;
        this.estabelecimento = new Estabelecimento_1.Estabelecimento();
        this.cardMensagem = false;
        this.mensagem = new Mensagem_1.Mensagem();
        this.tipo_empresa = null;
    }
    ;
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.infoUsuario = this.authService.useJwtHelper();
        if (!this.infoUsuario.estabelecimento) {
            this.mensagem.success = 'Bem Vindo!';
            this.mensagem.msg = 'Você ainda não cadastrou sua empresa, convidamos a cadastra-lá em nosso sistema';
            $("#modal").addClass("modal-sombra");
            setTimeout(function () {
                $("#modal").addClass("in");
            }, 100);
        }
        else {
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
            this.rankingService.getGraficos().then(function (data) {
                _this.qtdProdutosMes = data;
                initDemo(_this.qtdProdutosMes);
            });
        }
    };
    HomeComponent.prototype.blurCardMensagem = function () {
        this.mensagem.success = '';
        $("#modal").removeClass("in");
        setTimeout(function () {
            $("#modal").removeClass("modal-sombra");
        }, 2000);
        if (this.infoUsuario.estabelecimento == 1) {
            this.router.navigate(['/aplication/fornecedor']);
        }
        else if (this.infoUsuario.estabelecimento == 2) {
            this.router.navigate(['/aplication/loja']);
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home-cmp',
            moduleId: module.id,
            templateUrl: 'home.component.html',
            providers: [ranking_service_1.RankingService, pedido_service_1.PedidoService],
            styleUrls: ['home.component.css']
        }), 
        __metadata('design:paramtypes', [ranking_service_1.RankingService, pedido_service_1.PedidoService, common_1.Location, router_1.Router, auth_service_1.AuthService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map