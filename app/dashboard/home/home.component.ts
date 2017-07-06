import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import initDemo = require('../../../assets/js/charts.js');
import {Mensagem} from "../Mensagem";
import {RankingService} from "./ranking.service";
import {Fornecedor} from "../fornecedor/Fornecedor";
import {Estabelecimento} from "./Estabelecimento";
import {Location} from '@angular/common';
import {Pedido} from "../pedido-venda/Pedido";
import {PedidoService} from "../pedido-venda/pedido.service";
import {Router} from "@angular/router";
import {AuthService} from "../autentication/auth.service";

declare var $: any;

@Component({
    selector: 'home-cmp',
    moduleId: module.id,
    templateUrl: 'home.component.html',
    providers: [RankingService, PedidoService],
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {

    private estabelecimento: Estabelecimento;
    private pedidosPendentes: Pedido[];
    private empresasRankeadas: Estabelecimento[];
    private numPedidosPendentes: number;
    private numUsuarios: number;
    private qtdProdutosMes;
    public mensagem: Mensagem;
    public cardMensagem: boolean;
    public tipo_empresa: number;
    public infoUsuario;

    constructor(private rankingService: RankingService,
                private pedidoService: PedidoService,
                private location: Location,
                private router: Router,
                private authService: AuthService) {
        this.estabelecimento = new Estabelecimento();
        this.cardMensagem = false;
        this.mensagem = new Mensagem();
        this.tipo_empresa = null;
    };

    ngOnInit() {
        this.infoUsuario = this.authService.useJwtHelper();
        if (!this.infoUsuario.estabelecimento) {
            this.mensagem.success = 'Bem Vindo!';
            this.mensagem.msg = 'Você ainda não cadastrou sua empresa, convidamos a cadastra-lá em nosso sistema';
            $("#modal").addClass("modal-sombra");
            setTimeout(function () {
                $("#modal").addClass("in");
            }, 100);
        } else {
            this.rankingService.getEstabelecimento().then((data) => {
                this.estabelecimento = data;
            });
            this.pedidoService.getPedidosPendentes().then((data) => {
                this.pedidosPendentes = data;
                this.numPedidosPendentes = this.pedidosPendentes.length;
            });
            this.rankingService.getRanking().then((data) => {
                this.empresasRankeadas = data;
            });
            this.rankingService.getQuantidadeUsuarios().then((data) => {
                this.numUsuarios = data;
            });
            this.rankingService.getGraficos().then((data) => {
                this.qtdProdutosMes = data;
                initDemo(this.qtdProdutosMes);
            });
        }


    }


    blurCardMensagem() {
        this.mensagem.success = '';
        $("#modal").removeClass("in");
        setTimeout(function () {
            $("#modal").removeClass("modal-sombra");
        }, 2000);
        if (this.infoUsuario.estabelecimento == 1) {
            this.router.navigate(['/aplication/fornecedor']);
        } else if(this.infoUsuario.estabelecimento == 2) {
            this.router.navigate(['/aplication/loja']);
        }
    }
}
