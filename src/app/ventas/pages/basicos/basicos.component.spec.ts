import { ComponentFixture, TestBed } from '@angular/core/testing';
import localeEsPE from '@angular/common/locales/es-PE';
import localeFr from '@angular/common/locales/fr';
import { CommonModule, registerLocaleData } from '@angular/common';

import { BasicosComponent } from 'src/app/ventas/pages/basicos/basicos.component';

describe('BasicosComponent', () => {
  let component: BasicosComponent;
  let fixture: ComponentFixture<BasicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [BasicosComponent]
    })
      .compileComponents();

    registerLocaleData(localeEsPE);

    registerLocaleData(localeFr);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
