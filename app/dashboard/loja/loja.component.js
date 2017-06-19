"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/switchMap');
var loja_service_1 = require('./loja.service');
var Loja_1 = require("./Loja");
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var auth_service_1 = require('../autentication/auth.service');
var LojaComponent = (function () {
    function LojaComponent(lojaService, location) {
        this.lojaService = lojaService;
        this.location = location;
        this.events = [];
        this.selected = [];
        this.selectedChange = new core_1.EventEmitter();
        this.loja = new Loja_1.Loja();
        this.lojaSelecionado = 1;
    }
    ;
    LojaComponent.prototype.setChecked = function (id) {
        var selecionado = this.selected.indexOf(id);
        if (selecionado === -1)
            this.selected.push(id);
        else
            this.selected.splice(selecionado, 1);
        this.selectedChange.emit(this.selected);
    };
    LojaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lojaService.getLoja().then(function (data) {
            _this.loja = data;
            if (data) {
                _this.lojaService.getAreasRelacionadas().then(function (data) {
                    _this.areas = data;
                    _this.areas.forEach(function (area) {
                        if (area.checked) {
                            _this.selected.push(area.id);
                        }
                    });
                });
            }
            else {
                _this.lojaService.getAreas().then(function (data) {
                    _this.areas = data;
                });
            }
        });
        this.formulario = new forms_1.FormGroup({
            nome: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            cnpj: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            telefone: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            logradouro: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            tipo_logradouro: new forms_1.FormControl('', [forms_1.Validators.required]),
            cep: new forms_1.FormControl('', [forms_1.Validators.required]),
            numero: new forms_1.FormControl('', [forms_1.Validators.required]),
            cidade: new forms_1.FormControl('', [forms_1.Validators.required]),
            estado: new forms_1.FormControl('', [forms_1.Validators.required]),
            url_logo: new forms_1.FormControl('', [forms_1.Validators.required]),
            url_site: new forms_1.FormControl('', [forms_1.Validators.required]),
            nome_fantasia: new forms_1.FormControl(''),
        });
    };
    LojaComponent.prototype.goBack = function () {
        this.location.back();
    };
    LojaComponent.prototype.salvarLoja = function (loja, isValid) {
        loja.id = this.loja.id;
        loja.areas = this.selected;
        if (isValid) {
            this.lojaService.salvarLoja(loja);
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], LojaComponent.prototype, "selectedChange", void 0);
    LojaComponent = __decorate([
        core_1.Component({
            selector: 'loja',
            moduleId: module.id,
            templateUrl: 'loja.component.html',
            providers: [loja_service_1.LojaService, auth_service_1.AuthService]
        }), 
        __metadata('design:paramtypes', [loja_service_1.LojaService, common_1.Location])
    ], LojaComponent);
    return LojaComponent;
}());
exports.LojaComponent = LojaComponent;
//# sourceMappingURL=loja.component.js.map