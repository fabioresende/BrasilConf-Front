import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Location} from '@angular/common';
import {AuthService} from '../autentication/auth.service';
import {PedidoService} from "../pedido-venda/pedido.service";
import {Pedido} from "../pedido-venda/Pedido";
import {Loja} from "../loja/Loja";
import {Produto} from "../venda/Produto";
import {Mensagem} from "../Mensagem";

@Component({
    selector: 'pedido-detalhes-cmp',
    moduleId: module.id,
    templateUrl: 'pedido-detalhes.component.html',
    providers: [PedidoService,AuthService]
})

export class PedidoDetalhesComponent implements OnInit {
    private pedido: Pedido;
    private pedidoSelecionado;
    private ehLoja;
    private cardMensagem;
    private mensagem;

    constructor(private pedidoService: PedidoService,
                private location: Location,
                private router:Router,
                private authService: AuthService) {

        this.pedido = new Pedido();
        this.pedido.loja = new Loja();
        this.pedido.produto = new Produto();
        this.pedidoSelecionado = 1;
        this.ehLoja = false;
        this.cardMensagem = false;
        this.mensagem = new Mensagem();
    };

    ngOnInit() {
        let param = this.routerParams(this.location.path());
        this.pedidoService.buscarPedido(param).then((data)=>{
            this.pedido = data;
        });
        this.authService.getUsuarioLogado().then((usuario) =>{
            if (usuario.tipo_empresa == 2) {
                this.ehLoja = true;
            }
        });
    }

    goBack(): void {
        this.location.back();
    }

    confirmarPedido(): void {
        this.pedidoService.confirmarPedido(this.pedido).then((data)=>{
            this.mensagem = data;
            this.cardMensagem = true;
        });
    }

    finalizarPedido(): void {
        this.pedidoService.finalizarPedido(this.pedido).then((data)=>{
            this.mensagem = data;
            this.cardMensagem = true;
        });
    }

    routerParams(params: string): string {
        var parametros = params.split("/");
        var parametro = parametros[3];
        return parametro;
    }

    blurCardMensagem(){
        this.cardMensagem = false;
    }
}