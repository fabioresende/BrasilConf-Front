"use strict";
var home_component_1 = require('./home/home.component');
var user_component_1 = require('./user/user.component');
var icons_component_1 = require('./icons/icons.component');
var table_component_1 = require('./table/table.component');
var notifications_component_1 = require('./notifications/notifications.component');
var typography_component_1 = require('./typography/typography.component');
var maps_component_1 = require('./maps/maps.component');
var usuario_detalhes_component_1 = require('./usuario-detalhes/usuario-detalhes.component');
exports.MODULE_ROUTES = [
    { path: 'dashboard', component: home_component_1.HomeComponent },
    { path: 'user', component: user_component_1.UserComponent },
    { path: 'table', component: table_component_1.TableComponent },
    { path: 'icons', component: icons_component_1.IconsComponent },
    { path: 'notifications', component: notifications_component_1.NotificationsComponent },
    { path: 'typography', component: typography_component_1.TypographyComponent },
    { path: 'maps', component: maps_component_1.MapsComponent },
    { path: 'usuario-detalhes/:id', component: usuario_detalhes_component_1.UsuarioDetalhesComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    user_component_1.UserComponent,
    table_component_1.TableComponent,
    icons_component_1.IconsComponent,
    notifications_component_1.NotificationsComponent,
    typography_component_1.TypographyComponent,
    maps_component_1.MapsComponent,
    usuario_detalhes_component_1.UsuarioDetalhesComponent
];
//# sourceMappingURL=dashboard.routes.js.map