import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenarComponent } from 'src/app/ventas/pages/ordenar/ordenar.component';
import { MayusculasPipe } from '../../pipes/mayusculas.pipe';
import { OrdenarPipe } from '../../pipes/ordenar.pipe';

describe('OrdenarComponent', () => {
  let component: OrdenarComponent;
  let fixture: ComponentFixture<OrdenarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenarComponent, MayusculasPipe, OrdenarPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
