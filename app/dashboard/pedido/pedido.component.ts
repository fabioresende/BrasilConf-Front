import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Location} from '@angular/common';
import {AuthService} from "../autentication/auth.service";
import {Pedido} from "../pedido-venda/Pedido";
import {PedidoService} from "../pedido-venda/pedido.service";

@Component({
    selector: 'pedido-cmp',
    moduleId: module.id,
    templateUrl: 'pedido.component.html',
    providers: [PedidoService,AuthService],
    styleUrls: [ 'pedido.component.css' ]
})

export class PedidoComponent implements OnInit {
    private pedidos : Pedido[];
    constructor(
        private pedidoService: PedidoService,
        private route: ActivatedRoute,
        private router:Router,
        private authService: AuthService
    ){};
    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.pedidoService.getPedidos())
            .subscribe(pedidos => this.pedidos = pedidos);
    }
    editarPedido(idPedido: number){
        this.router.navigate(['/aplication/pedido-detalhes',idPedido]);
    }

}
