"use strict";
var aplication_component_1 = require("./aplication/aplication.component");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./dashboard/home/home.component");
var user_component_1 = require("./dashboard/user/user.component");
var table_component_1 = require("./dashboard/table/table.component");
var notifications_component_1 = require("./dashboard/notifications/notifications.component");
var icons_component_1 = require("./dashboard/icons/icons.component");
var typography_component_1 = require("./dashboard/typography/typography.component");
var usuario_detalhes_component_1 = require("./dashboard/usuario-detalhes/usuario-detalhes.component");
var fornecedor_component_1 = require("./dashboard/fornecedor/fornecedor.component");
var produto_component_1 = require("./dashboard/produto/produto.component");
var produto_detalhes_component_1 = require("./dashboard/produto-detalhes/produto-detalhes.component");
var loja_component_1 = require("./dashboard/loja/loja.component");
var venda_component_1 = require("./dashboard/venda/venda.component");
exports.APP_MODULE_ROUTES = [
    { path: 'aplication', component: aplication_component_1.AplicationComponent,
        children: [
            { path: 'home', component: home_component_1.HomeComponent },
            { path: 'user', component: user_component_1.UserComponent },
            { path: 'table', component: table_component_1.TableComponent },
            { path: 'icons', component: icons_component_1.IconsComponent },
            { path: 'notifications', component: notifications_component_1.NotificationsComponent },
            { path: 'typography', component: typography_component_1.TypographyComponent },
            { path: 'usuario-detalhes/:id', component: usuario_detalhes_component_1.UsuarioDetalhesComponent },
            { path: 'fornecedor', component: fornecedor_component_1.FornecedorComponent },
            { path: 'produto', component: produto_component_1.ProdutoComponent },
            { path: 'produto-detalhes/:id', component: produto_detalhes_component_1.ProdutoDetalhesComponent },
            { path: 'loja', component: loja_component_1.LojaComponent },
            { path: 'venda', component: venda_component_1.VendaComponent }
        ] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS2 = [
    login_component_1.LoginComponent,
    aplication_component_1.AplicationComponent
];
//# sourceMappingURL=app.routes.js.map