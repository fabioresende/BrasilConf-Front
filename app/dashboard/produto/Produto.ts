import {Departamento} from "./Departamento";
import {Fornecedor} from "../fornecedor/Fornecedor";

export class Produto {
    "id": number;
    "nome":string;
    "id_fornecedor":number;
    "id_departamento":number;
    "fabricante":string;
    "departamento": Departamento;
    "fornecedor": Fornecedor;
    "preco":string;
    "validade":string;
    "descricao":string;
    "status":number;
    "quantidade":number;
    "largura":number;
    "altura":number;
    "url_foto":string
}
