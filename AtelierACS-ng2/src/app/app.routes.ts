import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RequestComponent} from './request/request.component';
import {Four04Component} from './four04/four04.component';

// Route Configuration
export const routes: Routes = [
    {
        path: '', // URL cible
        redirectTo: '/index', // redirection: URL d'arrivé
        pathMatch: 'full'
    },
    {
        path: 'index', // URL cible
        component: RequestComponent // Composant demandé
    },
    {
        // 404 PAGE ROUTE
        path: '**',
        component: Four04Component
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);

