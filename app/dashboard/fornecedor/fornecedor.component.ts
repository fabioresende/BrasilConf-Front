import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {FornecedorService} from './fornecedor.service';
import {Fornecedor} from "./Fornecedor";
import {Location} from '@angular/common';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../autentication/auth.service';
import {Mensagem} from "../Mensagem";
@Component({
    selector: 'fornecedor',
    moduleId: module.id,
    templateUrl: 'fornecedor.component.html',
    providers: [FornecedorService,AuthService]
})

export class FornecedorComponent implements OnInit {
    private formulario: FormGroup;
    private fornecedor: Fornecedor;
    private fornecedorSelecionado;
    public events: any[] = [];
    public mensagem: Mensagem;
    public cardMensagem: boolean;
    constructor(private fornecedorService: FornecedorService,
                private location: Location,
                ) {

        this.fornecedor = new Fornecedor();
        this.fornecedorSelecionado = 1;
        this.mensagem = new Mensagem();
    };

    ngOnInit() {
        this.fornecedorService.getFornecedor().then((data)=>{
            this.fornecedor = data;
        });
        this.formulario = new FormGroup({
            nome: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
            cnpj: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
            telefone: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
            logradouro: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
            tipo_logradouro: new FormControl('', [<any>Validators.required]),
            cep: new FormControl('',[<any>Validators.required]),
            numero: new FormControl('',[<any>Validators.required]),
            cidade: new FormControl('',[<any>Validators.required]),
            estado: new FormControl('',[<any>Validators.required]),
            url_logo: new FormControl('',[<any>Validators.required]),
            historia: new FormControl('')
        });
    }

    goBack(): void {
        this.location.back();
    }

    salvarFornecedor(fornecedor: Fornecedor, isValid: boolean): void {
        fornecedor.id = this.fornecedor.id;
        if (isValid) {
            this.fornecedorService.salvarFornecedor(fornecedor).then((data) => {
                this.mensagem = data;
                $( "#modal" ).addClass( "modal-sombra" );
                setTimeout(function () {
                    $( "#modal" ).addClass( "in" );
                },100);
            });
        }
    }

    blurCardMensagem(){
        this.mensagem.success = '';
        $( "#modal" ).removeClass( "in" );
        setTimeout(function () {
            $( "#modal" ).removeClass( "modal-sombra" );
        },2000)
    }
}