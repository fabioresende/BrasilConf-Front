import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Produto} from "./Produto";
import {Location} from '@angular/common';
import {AuthService} from "../autentication/auth.service";
import {VendaService} from "./venda.service";
import {LojaService} from "../loja/loja.service";
import {Mensagem} from "../Mensagem";

@Component({
    selector: 'venda-cmp',
    moduleId: module.id,
    templateUrl: 'venda.component.html',
    providers: [VendaService,AuthService,LojaService],
    styleUrls: [ 'venda.component.css' ]
})

export class VendaComponent implements OnInit {
    private produtos : Produto[];
    public mensagem:Mensagem;
    public cardMensagem: boolean;
    constructor(
        private vendaService: VendaService,
        private route: ActivatedRoute,
        private router:Router,
        private authService: AuthService,
        private lojaService: LojaService,
    ){
        this.cardMensagem = false;
        this.mensagem = new Mensagem();
    };
    ngOnInit() {
        this.lojaService.getLoja().then( (data) => {
            if (data.success == false) {
                this.mensagem = data;
                $( "#modal" ).addClass( "modal-sombra" );
                setTimeout(function () {
                    $( "#modal" ).addClass( "in" );
                },100);
            } else{
                this.vendaService.getProdutos().then((produtos) =>{
                    this.produtos = produtos;
                });
            }
        });
    }
    compraProduto(idProduto: number){
        this.router.navigate(['/aplication/venda-detalhes',idProduto]);
    }

    blurCardMensagem(){
        this.mensagem.success = '';
        $( "#modal" ).removeClass( "in" );
        setTimeout(function () {
            $( "#modal" ).removeClass( "modal-sombra" );
        },2000);
    }
}
