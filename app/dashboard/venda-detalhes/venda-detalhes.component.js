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
var common_1 = require('@angular/common');
var auth_service_1 = require("../autentication/auth.service");
var Produto_1 = require("../venda/Produto");
var venda_service_1 = require("../venda/venda.service");
var Fornecedor_1 = require("../fornecedor/Fornecedor");
var Departamento_1 = require("../venda/Departamento");
var VendaDetalhesComponent = (function () {
    function VendaDetalhesComponent(vendaService, router, location) {
        this.vendaService = vendaService;
        this.router = router;
        this.location = location;
        this.produtoSelecionado = this.routerParams(this.location.path());
        this.produto = new Produto_1.Produto();
        this.produto.fornecedor = new Fornecedor_1.Fornecedor();
        this.produto.departamento = new Departamento_1.Departamento();
    }
    ;
    VendaDetalhesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vendaService.getProduto(this.produtoSelecionado).then(function (produto) {
            console.log(produto);
            _this.produto = produto;
        });
    };
    VendaDetalhesComponent.prototype.routerParams = function (params) {
        var parametros = params.split("/");
        var parametro = parametros[3];
        return parametro;
    };
    VendaDetalhesComponent.prototype.comprar = function () {
        this.router.navigate(['/aplication/pedido-venda', this.produto.id]);
    };
    VendaDetalhesComponent = __decorate([
        core_1.Component({
            selector: 'venda-detalhes-cmp',
            moduleId: module.id,
            templateUrl: 'venda-detalhes.component.html',
            providers: [venda_service_1.VendaService, auth_service_1.AuthService],
            styleUrls: ['venda-detalhes.component.css']
        }), 
        __metadata('design:paramtypes', [venda_service_1.VendaService, router_1.Router, common_1.Location])
    ], VendaDetalhesComponent);
    return VendaDetalhesComponent;
}());
exports.VendaDetalhesComponent = VendaDetalhesComponent;
//# sourceMappingURL=venda-detalhes.component.js.map