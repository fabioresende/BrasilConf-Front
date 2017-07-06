import {Component, OnInit} from '@angular/core';
import {ROUTES} from './sidebar-routes.config';
import {AuthService} from "../dashboard/autentication/auth.service";
import {Usuario} from "../dashboard/user/Usuario";

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css'],
    providers: [AuthService]
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    private infoUsuario;

    constructor(private authService: AuthService) {
        this.menuItems = new Array();
    };

    ngOnInit() {
            this.infoUsuario = this.authService.useJwtHelper();
            this.menuItems = ROUTES.filter(mostrarMenu(this.infoUsuario));
            console.log(this.infoUsuario);
            function mostrarMenu(usuario) {
                return function (menuItem) {
                    if ($.inArray(usuario.estabelecimento,menuItem.permissao) != -1) {
                        return menuItem;
                    }
                }
            }
            $.getScript('../../assets/js/sidebar-moving-tab.js');
    }

}
