import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from 'src/app/app.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { AppRouterModule } from 'src/app/app-router.module';
import { VentasModule } from 'src/app/ventas/ventas.module';

//Cambiar el locale de la app
import localeEs from '@angular/common/locales/es-PE';
import localeFr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-PE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
