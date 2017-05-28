import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {FornecedorService} from './fornecedor.service';
import {Fornecedor} from "./Fornecedor";
import {Location} from '@angular/common';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../autentication/auth.service';
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
    public usuarioLogado ;
    constructor(private fornecedorService: FornecedorService,
                private route: ActivatedRoute,
                private location: Location,
                private fb: FormBuilder,private authService:AuthService) {

        this.fornecedor = null;
        this.fornecedorSelecionado = 1;
    };

    ngOnInit() {
        if(this.usuarioLogado){
            this.fornecedorService.getFornecedor(0);
        }
        this.fornecedor = new Fornecedor();
        this.formulario = new FormGroup({
            nome: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
            cnpj: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
            telefone: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
            logradouro: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
            tipo_logradouro: new FormControl('', [<any>Validators.required]),
            cep: new FormControl('',[<any>Validators.required]),
            cidade: new FormControl('',[<any>Validators.required]),
            estado: new FormControl('',[<any>Validators.required]),
            url_logo: new FormControl('',[<any>Validators.required]),
        });
    }

    goBack(): void {
        this.location.back();
    }

    salvarFornecedor(fornecedor: Fornecedor, isValid: boolean): void {
        if (isValid) {
            this.fornecedorService.salvarFornecedor(fornecedor);
        }
    }

    buscarUsuarioLogado(){
        let idUsuarioLogado = this.authService.getIdUserLogged();
    }

    // subcribeToFormChanges() {
    //     const formularioChange$ = this.formulario.statusChanges;
    //     const formularioValueChanges$ = this.formulario.valueChanges;
    //
    //     formularioChange$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
    //     formularioValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    // }
}