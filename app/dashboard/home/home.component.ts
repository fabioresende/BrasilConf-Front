import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import initDemo = require('../../../assets/js/charts.js');
import {Mensagem} from "../Mensagem";
import {RankingService} from "./ranking.service";
import {Fornecedor} from "../fornecedor/Fornecedor";
import {Estabelecimento} from "./Estabelecimento";
import {Location} from '@angular/common';
import {Pedido} from "../pedido-venda/Pedido";
import {PedidoService} from "../pedido-venda/pedido.service";

declare var $: any;

@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'home.component.html',
    providers: [RankingService,PedidoService],
    styleUrls: [ 'home.component.css' ]
})

export class HomeComponent implements OnInit {

    private estabelecimento:Estabelecimento;
    private pedidosPendentes : Pedido[];
    private empresasRankeadas : Estabelecimento[];
    private numPedidosPendentes: number;
    private numUsuarios: number;
    private qtdProdutosMes;
    constructor(private rankingService: RankingService,
                private pedidoService: PedidoService,
                private location: Location,
    ) {
        this.estabelecimento = new Estabelecimento();
    };
    ngOnInit() {
        // $('[data-toggle="checkbox"]').each(function () {
        //     if($(this).data('toggle') == 'switch') return;
        //
        //     var $checkbox = $(this);
        //     $checkbox.checkbox();
        // });
        initDemo();
        this.rankingService.getEstabelecimento().then((data)=> {
            this.estabelecimento = data;
        });
        this.pedidoService.getPedidosPendentes().then((data)=>{
            this.pedidosPendentes = data;
            this.numPedidosPendentes = this.pedidosPendentes.length;
        });
        this.rankingService.getRanking().then((data)=>{
            this.empresasRankeadas = data;
        });
        this.rankingService.getQuantidadeUsuarios().then((data)=> {
            this.numUsuarios = data;
        });
        this.rankingService.getQuantidadeProdutosMes().then((data)=> {
            this.qtdProdutosMes = data;
        });

    }
}
