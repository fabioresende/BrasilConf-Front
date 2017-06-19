import {Component, OnInit} from '@angular/core';
import {ProdutoService} from "./produto.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Produto} from "./Produto";
import {Location} from '@angular/common';
import {AuthService} from "../autentication/auth.service";

@Component({
    selector: 'produto-cmp',
    moduleId: module.id,
    templateUrl: 'produto.component.html',
    providers: [ProdutoService,AuthService],
    styleUrls: [ 'produto.component.css' ]
})

export class ProdutoComponent implements OnInit {
    private produtos : Produto[];
    constructor(
        private produtoService: ProdutoService,
        private route: ActivatedRoute,
        private router:Router,
        private authService: AuthService
    ){};
    ngOnInit() {
        this.authService.getUsuarioLogado().then((produto) =>{
            if (produto.id_tipo_usuario != 1) {
                this.router.navigate(['/aplication/usuario-detalhes',produto.id]);
            }
        });
        this.produtoService.getProdutos().then((produtos) =>{
            this.produtos = produtos;
        });
    }
    editarProduto(idProduto: number){
        this.router.navigate(['/aplication/produto-detalhes',idProduto]);
    }

}
