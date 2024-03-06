import { Routes } from '@angular/router';
import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';

// lazyloading
export const routes: Routes = [
    {
        path: 'pagina1:id', loadComponent: () => import('./pages/pagina1/pagina1.component')
            .then((x) => x.Pagina1Component)
    },
    {
        path: 'pagina2', loadComponent: () => import('./pages/pagina2/pagina2.component')
            .then((x) => x.Pagina2Component)
    },
];
// esto es una locura llevarlo al cliente si hay 10000 paginas, por lo que hay que hacer lazyloading 
/*
export const routes: Routes = [
    {path: 'pagina1', component: Pagina1Component },
    { path: 'pagina2', component: Pagina2Component },
];
*/

