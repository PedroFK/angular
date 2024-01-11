import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss'
})
export class BindingComponent {
  public prop = 'Esse é um exemplo de propriedade'
  public example = '{{assim que se usa}}'
  public nmb1: number = 12

  public sum(n1: number, n2: number) {
    return n1 + n2
  }
}
