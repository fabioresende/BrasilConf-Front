import {Component, OnInit, Input, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Location} from '@angular/common';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {ProdutoService} from "../produto/produto.service";
import {Produto} from "../produto/Produto";
import {Fornecedor} from "../fornecedor/Fornecedor";
import {Mensagem} from "../Mensagem";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
    selector: 'produto-detalhes',
    moduleId: module.id,
    templateUrl: 'produto-detalhes.component.html',
    styleUrls: ['produto-detalhes.component.css'],
    providers: [ProdutoService]
})

export class ProdutoDetalhesComponent implements OnInit {
    private formulario: FormGroup;
    private produto: Produto;
    private produtoSelecionado;
    private departamentos;
    private descricaoDepartamento;
    private descricaoStatus;
    public events: any[] = [];
    public mensagem: Mensagem;
    public cardMensagem: boolean;
    public ehProdutoNovo: boolean;
    constructor(private produtoService: ProdutoService,
                private route: ActivatedRoute,
                private router:Router,
                private location: Location,) {
        this.produto = new Produto();
        this.produto.fornecedor = new Fornecedor();
        this.produtoSelecionado = this.routerParams(this.location.path());
        this.departamentos;
        this.ehProdutoNovo = true;
        this.mensagem = new Mensagem();
    };

    ngOnInit() {
        if (this.produtoSelecionado != 0) {
            let param = this.routerParams(this.location.path());
            this.produtoService.getProduto(param).then((produto) => {
                this.produto = produto;
                this.ehProdutoNovo = false;
            });
        }
        this.formulario = new FormGroup({
            nome: new FormControl('', [<any>Validators.required]),
            fabricante: new FormControl('', [<any>Validators.required]),
            preco: new FormControl('', [<any>Validators.required]),
            quantidade: new FormControl('', [<any>Validators.required]),
            validade: new FormControl('', [<any>Validators.minLength(8)]),
            id_departamento: new FormControl(''),
            descricao: new FormControl(''),
            largura: new FormControl(''),
            altura: new FormControl(''),
            url_foto: new FormControl(''),
            status: new FormControl('')
        });
        this.buscarDepartamentos();
    }

    goBack(): void {
        this.location.back();
    }

    salvarProduto(produto: Produto, isValid: boolean): void {
        produto = this.setDepartamento(produto);
        if (isValid) {
            this.produtoService.salvarProduto(produto).then((data) => {
                this.mensagem = data;
                $( "#modal" ).addClass( "modal-sombra" );
                setTimeout(function () {
                    $( "#modal" ).addClass( "in" );
                },100);
                this.ehProdutoNovo = false;
            });
        }
    }

    buscarDepartamentos() {
        this.produtoService.buscarDepartamentos().then((data) => {
            this.departamentos = data;
            this.descricaoDepartamento = this.departamentos[this.produto.id_departamento];
            if (this.produto.status) {
                this.descricaoStatus = 'Ativo'
            }
            else {
                this.descricaoStatus = 'Inativo'
            }
        });
    }

    setDepartamento(produto) {
        produto.id = this.produto.id;
        produto.id_fornecedor = this.produto.id_fornecedor;
        if (produto.id_departamento == "") {
            produto.id_departamento = this.produto.id_departamento;
        } else {
            let arrDesc = this.departamentos.map(function(departamento) {
                return departamento.descricao;
            });
            produto.id_departamento = arrDesc.indexOf(produto.id_departamento) + 1;
        }
        if (produto.status == "") {
            produto.status = this.produto.status;
        }
        else {
            if (produto.status == "Ativo") {
                produto.status = 1;
            } else {
                produto.status = 0;
            }
        }
        return produto;
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
        this.router.navigate(['/aplication/produto']);
    }
}