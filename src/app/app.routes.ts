import { Routes } from '@angular/router';
import { ArquivoComponent } from './components/arquivo/arquivo.component';
import { ArquivoTesteComponent } from './components/arquivo-teste/arquivo-teste.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'arquivo', pathMatch: 'full'
    },
    {
        path:'arquivo', component: ArquivoComponent
    },
    {
        path: 'arquivo-teste', component: ArquivoTesteComponent
    }
];
