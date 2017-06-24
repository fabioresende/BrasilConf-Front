import {  RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {path: 'home', title: 'Dashboard',  icon: 'dashboard', class: '', permissao:['1','2'] },
    {path: 'user', title: 'Usuario',  icon:'person', class: '' , permissao:['1','2'] },
    {path: 'fornecedor', title: 'Fornecedor',  icon:'local_shipping', class: '', permissao:['1'] },
    {path: 'produto', title: 'Produto',  icon:'web_asset', class: '' , permissao:['1'] },
    {path: 'loja', title: 'Loja',  icon:'store', class: '' , permissao:['2']},
    {path: 'venda', title: 'Comprar', icon: 'shopping_cart', class: '', permissao:['2']},
    {path: 'pedido', title: 'Pedidos', icon: 'reorder', class: '', permissao:['1','2']}
];
