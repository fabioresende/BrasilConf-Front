import {Fornecedor} from "../fornecedor/Fornecedor";
import {Produto} from "../produto/Produto";
import {Loja} from "../loja/Loja";

export class Pedido {
    "id": number;
    "quantidade":number;
    "produto_id": number;
    "valor_total": number;
    "status": string;
    "loja_id": number;
    "fornecedor_id": number;
    "produto":Produto;
    "loja":Loja;
}
