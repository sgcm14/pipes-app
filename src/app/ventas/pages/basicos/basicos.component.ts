import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'sammy';
  nombreUpper: string = 'SAMMY';
  nombreCompleto: string = 'sAmMy CaNtOrAl';

  fecha: Date = new Date();
}
