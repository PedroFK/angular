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
  public isDisable = true
  public srcValue = 'https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png'
  public soma = 'Soma'
  
  constructor() {
    setTimeout(() => {
      this.prop = 'Nova prop'
    }, 2000);
  }

  public sum(n1: number, n2: number) {
    return n1 + n2
  }
}
