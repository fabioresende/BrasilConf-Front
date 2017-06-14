import {  RouteInfo } from './sidebar.metadata';
import {UsuarioDetalhesComponent} from "../dashboard/usuario-detalhes/usuario-detalhes.component";

export const ROUTES: RouteInfo[] = [
    {path: 'home', title: 'Dashboard',  icon: 'dashboard', class: '' },
    {path: 'user', title: 'Usuario',  icon:'person', class: '' },
    {path: 'fornecedor', title: 'Fornecedor',  icon:'local_shipping', class: '' },
    {path: 'table', title: 'Table List',  icon:'content_paste', class: '' },
    {path: 'Produto', title: 'Produto',  icon:'web_asset', class: '' },
    {path: 'typography', title: 'Typography',  icon:'library_books', class: '' },
    {path: 'icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    {path: 'maps', title: 'Maps',  icon:'location_on', class: '' },
    {path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
];
