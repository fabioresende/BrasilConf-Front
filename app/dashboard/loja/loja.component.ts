import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {LojaService} from './loja.service';
import {Loja} from "./Loja";
import {Location} from '@angular/common';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../autentication/auth.service';
import {Area} from "./Area";
import forEach = require("core-js/fn/array/for-each");
import {Mensagem} from "../Mensagem";

@Component({
    selector: 'loja',
    moduleId: module.id,
    templateUrl: 'loja.component.html',
    providers: [LojaService,AuthService]
})

export class LojaComponent implements OnInit {
    private formulario: FormGroup;
    private loja: Loja;
    private lojaSelecionado;
    public events: any[] = [];
    private areas: Array<Area>;
    private selected = [];
    private cardMensagem: boolean;
    private mensagem: Mensagem;
    private cep;
    constructor(private lojaService: LojaService,
                private location: Location,
                ) {
        this.cardMensagem = false;
        this.mensagem = new Mensagem();
        this.loja = new Loja();
        this.lojaSelecionado = 1;
    };

    @Output() selectedChange:EventEmitter<any> = new EventEmitter();

    setChecked(id) {
        let selecionado = this.selected.indexOf(id);
        if (selecionado === -1) this.selected.push(id);
        else this.selected.splice(selecionado, 1);
        this.selectedChange.emit(this.selected);
    }

    ngOnInit() {
        this.lojaService.getLoja().then((data)=>{
            this.loja = data;
            if (data.message) {
                this.lojaService.getAreas().then((data)=>{
                    this.areas = data;
                });
            } else{
                this.lojaService.getAreasRelacionadas().then((data)=>{
                    this.areas = data;
                    this.areas.forEach(area => {
                        if (area.checked){
                            this.selected.push(area.id);
                        }
                    })
                });
            }
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
            url_site: new FormControl('',[<any>Validators.required]),
            nome_fantasia: new FormControl(''),
        });
    }

    goBack(): void {
        this.location.back();
    }

    salvarLoja(loja: Loja, isValid: boolean): void {
        loja.id = this.loja.id;
        loja.areas = this.selected;
        if (isValid) {
            this.lojaService.salvarLoja(loja).then((data) => {
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
        },2000);
    }


    buscarCep() {
        this.lojaService.getCep(this.loja.cep).then((data)=>{
            if (data.success == "Erro") {
                this.mensagem = data;
                $( "#modal" ).addClass( "modal-sombra" );
                setTimeout(function () {
                    $( "#modal" ).addClass( "in" );
                },100);
            } else {
                this.cep = data;
                this.loja.estado = this.cep.uf;
                this.loja.logradouro = this.cep.logradouro;
                this.loja.tipo_logradouro = this.cep.tipo_logradouro;
                this.loja.cidade = this.cep.localidade;
            }
        });
    }
}