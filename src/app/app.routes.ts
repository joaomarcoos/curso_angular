import { Routes } from '@angular/router';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ItemDatailComponent } from './components/item-datail/item-datail.component';

export const routes: Routes = [
  {
    path:'', component: ListRenderComponent
  },
  {
    path:'list/:id', component: ItemDatailComponent
  }
];
