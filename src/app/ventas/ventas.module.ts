import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { BasicosComponent } from 'src/app/ventas/pages/basicos/basicos.component';
import { MayusculasPipe } from 'src/app/ventas/pipes/mayusculas.pipe';
import { NoComunesComponent } from 'src/app/ventas/pages/no-comunes/no-comunes.component';
import { NumerosComponent } from 'src/app/ventas/pages/numeros/numeros.component';
import { OrdenarComponent } from 'src/app/ventas/pages/ordenar/ordenar.component';
import { ColorPipe } from 'src/app/ventas/pipes/color.pipe';
import { OrdenarPipe } from 'src/app/ventas/pipes/ordenar.pipe';
import { VuelaPipe } from 'src/app/ventas/pipes/vuela.pipe';



@NgModule({
  declarations: [
    //Componentes
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,

    //Pipes
    MayusculasPipe,
    VuelaPipe,
    OrdenarPipe,
    ColorPipe
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class VentasModule { }
