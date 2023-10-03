import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeFormComponent } from './heroe-form.component';
import {InjectionToken} from "@angular/core";

describe('HeroeFormComponent', () => {
  let component: HeroeFormComponent;
  let fixture: ComponentFixture<HeroeFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroeFormComponent],
      imports: [
      ],
      providers: [
        { provide: MAT_MDC_DIALOG_DATA, useValue: {} } // Proveedor simulado para MAT_MDC_DIALOG_DATA
      ]
    });
    fixture = TestBed.createComponent(HeroeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

export const MAT_MDC_DIALOG_DATA = new InjectionToken<any>('MAT_MDC_DIALOG_DATA');
