import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {LojaService} from './loja.service';
import {Loja} from "./Loja";
import {Location} from '@angular/common';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../autentication/auth.service';
import {Area} from "./Area";
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
    constructor(private lojaService: LojaService,
                private location: Location,
                ) {

        this.loja = new Loja();
        this.lojaSelecionado = 1;
    };

    ngOnInit() {
        this.lojaService.getLoja().then((data)=>{
            this.loja = data;
            if (data) {
                this.lojaService.getAreasRelacionadas().then((data)=>{
                    this.areas = data;
                });
            } else{
                this.lojaService.getAreas().then((data)=>{
                    this.areas = data;
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
        loja.id_loja = this.loja.id_loja;
        if (isValid) {
            console.log(loja);
            this.lojaService.salvarLoja(loja);
        }
    }
}