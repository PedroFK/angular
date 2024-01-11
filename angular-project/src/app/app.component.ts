import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new/new.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent],
  template: `
  <div class="dark">
    <h1>Curso de Angular</h1>
    <h2>Components</h2>
    <app-new></app-new>
  </div>
  
  `,
})
export class AppComponent {
  title = 'angular-project';
}
