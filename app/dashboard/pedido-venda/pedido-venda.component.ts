import {Component, OnInit, Input, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {UsuarioService} from '../user/user.service';
import {Usuario} from "../user/Usuario";
import {Location} from '@angular/common';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {ProdutoService} from "../produto/produto.service";
import {Produto} from "../produto/Produto";
import {Pedido} from "./Pedido";
import {PedidoService} from "./pedido.service";
import {Mensagem} from "../Mensagem";

@Component({
    selector: 'pedido-venda',
    moduleId: module.id,
    templateUrl: 'pedido-venda.component.html',
    styleUrls: ['pedido-venda.component.css'],
    providers: [PedidoService, ProdutoService]
})

export class PedidoVendaComponent implements OnInit {
    private produto: Produto;
    private produtoSelecionado;
    public events: any[] = [];
    public pedido: Pedido;
    private quantidade: number;
    public mensagem:Mensagem;
    public cardMensagem: boolean;
    constructor(private pedidoService: PedidoService,
                private route: ActivatedRoute,
                private location: Location,
                private produtoService: ProdutoService) {
        this.produto = new Produto();
        this.pedido = new Pedido();
        this.cardMensagem = false;
        this.mensagem = new Mensagem();
        this.produtoSelecionado = this.routerParams(this.location.path());
    };

    ngOnInit() {
        if (this.produtoSelecionado != 0) {
            let param = this.routerParams(this.location.path());
            this.produtoService.getProduto(param).then((produto) => {
                this.produto = produto;
                this.pedido.valor_total = parseFloat(this.produto.preco);
                this.pedido.produto_id = this.produto.id;
                this.pedido.quantidade = 1;
            });
        }
    }

    goBack(): void {
        this.location.back();
    }

    salvarPedido(): void {
        this.pedidoService.salvarPedido(this.pedido).then((data) => {
            this.mensagem = data;
            $( "#modal" ).addClass( "modal-sombra" );
            setTimeout(function () {
                $( "#modal" ).addClass( "in" );
            },100);
        });
    }

    changeValorTotal() {
        this.pedido.valor_total = eval(this.produto.preco) * this.pedido.quantidade;
    }

    routerParams(params: string): string {
        var parametros = params.split("/");
        var parametro = parametros[3];
        return parametro;
    }
    blurCardMensagem(){
        this.mensagem.success = '';
        $( "#modal" ).removeClass( "in" );
        setTimeout(function () {
            $( "#modal" ).removeClass( "modal-sombra" );
        },2000);
    }
}