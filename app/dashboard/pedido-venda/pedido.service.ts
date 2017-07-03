import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Mensagem} from "../Mensagem";
import {Pedido} from "./Pedido";

@Injectable()
export class PedidoService {

    constructor(private http: Http) {
    }

    public salvarPedido(pedido: Pedido): Promise<Mensagem>{
        return this.http.post("/pedido/salvar", pedido)
            .toPromise()
            .then(response => response.json() as Mensagem);
    }

    public buscarPedido(idPedido: string): Promise<Pedido>{
        return this.http.get("/pedido/"+idPedido)
            .toPromise()
            .then(response => response.json() as Pedido);
    }

    public getPedidos(): Promise<Pedido[]>{
        return this.http.get("/pedidos")
            .toPromise()
            .then(response => response.json() as Pedido[]);
    }

    public confirmarPedido(pedido): Promise<Mensagem>{
        return this.http.post("/pedido/confirmar", pedido)
            .toPromise()
            .then(response => response.json() as Mensagem);
    }

    public finalizarPedido(pedido): Promise<Mensagem>{
        return this.http.post("/pedido/finalizar", pedido)
            .toPromise()
            .then(response => response.json() as Mensagem);
    }

    public getPedidosPendentes(): Promise<Pedido[]>{
        return this.http.get("/pedido-pendentes")
            .toPromise()
            .then(response => response.json() as Pedido[]);
    }

}