import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent)
    },
    {
        path: 'conversations',
        loadComponent: () => import('./pages/conversations/conversations.component').then((m) => m.ConversationsComponent)
    }
];
