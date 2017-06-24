import {Area} from "./Area";

export class Loja {
    id: number;
    nome: string;
    nome_fantasia: string;
    telefone: string;
    cnpj:string;
    logradouro:string;
    tipo_logradouro:string;
    numero:number;
    cep:string;
    cidade:string;
    estado:string;
    url_logo:string;
    url_site: string;
    areas: Area[];
}
