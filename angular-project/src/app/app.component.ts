import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Component
import { NewComponent } from './components/new/new.component';
import { BindingComponent } from './components/template/binding/binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent, BindingComponent],
  template: `
  <div class="dark">
    <app-new></app-new>
    <app-binding></app-binding>
  </div>
  
  `,
})
export class AppComponent {
  title = 'angular-project';
}
