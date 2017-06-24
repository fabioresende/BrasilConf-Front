import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Location} from '@angular/common';
import {AuthService} from "../autentication/auth.service";
import {Produto} from "../venda/Produto";
import {VendaService} from "../venda/venda.service";
import {Fornecedor} from "../fornecedor/Fornecedor";
import {Departamento} from "../venda/Departamento";

@Component({
    selector: 'venda-detalhes-cmp',
    moduleId: module.id,
    templateUrl: 'venda-detalhes.component.html',
    providers: [VendaService,AuthService],
    styleUrls: [ 'venda-detalhes.component.css' ]
})

export class VendaDetalhesComponent implements OnInit {
    private produto : Produto;
    private produtoSelecionado;
    private quantidade;
    constructor(
        private vendaService: VendaService,
        private router:Router,
        private location: Location

    ){
        this.produtoSelecionado = this.routerParams(this.location.path());
        this.produto = new Produto();
        this.produto.fornecedor = new Fornecedor();
        this.produto.departamento = new Departamento();
    };
    ngOnInit() {
        this.vendaService.getProduto(this.produtoSelecionado).then((produto) =>{
            console.log(produto);
            this.produto = produto;
        });
    }

    routerParams(params: string): string {
        var parametros = params.split("/");
        var parametro = parametros[3];
        return parametro;
    }

    comprar() {
        this.router.navigate(['/aplication/pedido-venda',this.produto.id]);
    }

}
