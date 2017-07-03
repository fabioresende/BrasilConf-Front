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
var forms_1 = require('@angular/forms');
var produto_service_1 = require("../produto/produto.service");
var Produto_1 = require("../produto/Produto");
var Fornecedor_1 = require("../fornecedor/Fornecedor");
var ProdutoDetalhesComponent = (function () {
    function ProdutoDetalhesComponent(produtoService, route, router, location) {
        this.produtoService = produtoService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.events = [];
        this.produto = new Produto_1.Produto();
        this.produto.fornecedor = new Fornecedor_1.Fornecedor();
        this.produtoSelecionado = this.routerParams(this.location.path());
        this.departamentos;
        this.ehProdutoNovo = true;
    }
    ;
    ProdutoDetalhesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.produtoSelecionado != 0) {
            var param = this.routerParams(this.location.path());
            this.produtoService.getProduto(param).then(function (produto) {
                _this.produto = produto;
                _this.ehProdutoNovo = false;
            });
        }
        this.formulario = new forms_1.FormGroup({
            nome: new forms_1.FormControl('', [forms_1.Validators.required]),
            fabricante: new forms_1.FormControl('', [forms_1.Validators.required]),
            preco: new forms_1.FormControl('', [forms_1.Validators.required]),
            quantidade: new forms_1.FormControl('', [forms_1.Validators.required]),
            validade: new forms_1.FormControl('', [forms_1.Validators.minLength(8)]),
            id_departamento: new forms_1.FormControl(''),
            descricao: new forms_1.FormControl(''),
            largura: new forms_1.FormControl(''),
            altura: new forms_1.FormControl(''),
            url_foto: new forms_1.FormControl(''),
            status: new forms_1.FormControl('')
        });
        this.buscarDepartamentos();
    };
    ProdutoDetalhesComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProdutoDetalhesComponent.prototype.salvarProduto = function (produto, isValid) {
        var _this = this;
        produto = this.setDepartamento(produto);
        if (isValid) {
            this.produtoService.salvarProduto(produto).then(function (data) {
                _this.mensagem = data;
                _this.cardMensagem = true;
                _this.ehProdutoNovo = false;
            });
        }
    };
    ProdutoDetalhesComponent.prototype.buscarDepartamentos = function () {
        var _this = this;
        this.produtoService.buscarDepartamentos().then(function (data) {
            _this.departamentos = data;
            _this.descricaoDepartamento = _this.departamentos[_this.produto.id_departamento];
            if (_this.produto.status) {
                _this.descricaoStatus = 'Ativo';
            }
            else {
                _this.descricaoStatus = 'Inativo';
            }
        });
    };
    ProdutoDetalhesComponent.prototype.setDepartamento = function (produto) {
        produto.id = this.produto.id;
        produto.id_fornecedor = this.produto.id_fornecedor;
        if (produto.id_departamento == "") {
            produto.id_departamento = this.produto.id_departamento;
        }
        else {
            var arrDesc = this.departamentos.map(function (departamento) {
                return departamento.descricao;
            });
            produto.id_departamento = arrDesc.indexOf(produto.id_departamento) + 1;
        }
        if (produto.status == "") {
            produto.status = this.produto.status;
        }
        else {
            if (produto.status == "Ativo") {
                produto.status = 1;
            }
            else {
                produto.status = 0;
            }
        }
        return produto;
    };
    ProdutoDetalhesComponent.prototype.routerParams = function (params) {
        var parametros = params.split("/");
        var parametro = parametros[3];
        return parametro;
    };
    ProdutoDetalhesComponent.prototype.blurCardMensagem = function () {
        this.cardMensagem = false;
        this.router.navigate(['/aplication/produto']);
    };
    ProdutoDetalhesComponent = __decorate([
        core_1.Component({
            selector: 'produto-detalhes',
            moduleId: module.id,
            templateUrl: 'produto-detalhes.component.html',
            styleUrls: ['produto-detalhes.component.css'],
            providers: [produto_service_1.ProdutoService]
        }), 
        __metadata('design:paramtypes', [produto_service_1.ProdutoService, router_1.ActivatedRoute, router_1.Router, common_1.Location])
    ], ProdutoDetalhesComponent);
    return ProdutoDetalhesComponent;
}());
exports.ProdutoDetalhesComponent = ProdutoDetalhesComponent;
//# sourceMappingURL=produto-detalhes.component.js.map