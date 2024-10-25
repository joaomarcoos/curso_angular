import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from "./components/eventos/eventos.component";
import { EmitterComponent } from "./components/emitter/emitter.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { TwoWayBindgingComponent } from "./components/two-way-bindging/two-way-bindging.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FirstComponentComponent,
    ParentDataComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    ListRenderComponent,
    TwoWayBindgingComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  userName: string = 'João';

  userData = {
    email: 'joao@gmail.com',
    age: 15
  }

  title = 'curso_angular';
}
