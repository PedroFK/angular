import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Component
import { NewComponent } from './components/new/new.component';
import { BindingComponent } from './components/template/binding/binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent, BindingComponent, TemplateVariablesComponent],
  template: `
  <div class="dark">
  <!-- 
  <app-new></app-new>
  <app-binding></app-binding>
  -->
    <app-template-variables />
  </div>
  
  `,
})
export class AppComponent {
  title = 'angular-project';
}
