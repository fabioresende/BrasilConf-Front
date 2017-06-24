import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Produto} from "./Produto";
import {Location} from '@angular/common';
import {AuthService} from "../autentication/auth.service";
import {VendaService} from "./venda.service";

@Component({
    selector: 'venda-cmp',
    moduleId: module.id,
    templateUrl: 'venda.component.html',
    providers: [VendaService,AuthService],
    styleUrls: [ 'venda.component.css' ]
})

export class VendaComponent implements OnInit {
    private produtos : Produto[];
    constructor(
        private vendaService: VendaService,
        private route: ActivatedRoute,
        private router:Router,
        private authService: AuthService
    ){};
    ngOnInit() {
        this.vendaService.getProdutos().then((produtos) =>{
            this.produtos = produtos;
        });
    }
    compraProduto(idProduto: number){
        this.router.navigate(['/aplication/venda-detalhes',idProduto]);
    }

}
