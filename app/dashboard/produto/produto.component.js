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
var produto_service_1 = require("./produto.service");
var router_1 = require("@angular/router");
var auth_service_1 = require("../autentication/auth.service");
var ProdutoComponent = (function () {
    function ProdutoComponent(produtoService, route, router, authService) {
        this.produtoService = produtoService;
        this.route = route;
        this.router = router;
        this.authService = authService;
    }
    ;
    ProdutoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUsuarioLogado().then(function (produto) {
            if (produto.id_tipo_usuario != 1) {
                _this.router.navigate(['/aplication/usuario-detalhes', produto.id]);
            }
        });
        this.produtoService.getProdutos().then(function (produtos) {
            _this.produtos = produtos;
        });
    };
    ProdutoComponent.prototype.editarProduto = function (idProduto) {
        this.router.navigate(['/aplication/produto-detalhes', idProduto]);
    };
    ProdutoComponent = __decorate([
        core_1.Component({
            selector: 'produto-cmp',
            moduleId: module.id,
            templateUrl: 'produto.component.html',
            providers: [produto_service_1.ProdutoService, auth_service_1.AuthService],
            styleUrls: ['produto.component.css']
        }), 
        __metadata('design:paramtypes', [produto_service_1.ProdutoService, router_1.ActivatedRoute, router_1.Router, auth_service_1.AuthService])
    ], ProdutoComponent);
    return ProdutoComponent;
}());
exports.ProdutoComponent = ProdutoComponent;
//# sourceMappingURL=produto.component.js.map