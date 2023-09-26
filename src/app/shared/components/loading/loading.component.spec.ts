import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(() => {
    const matDialogRefMock = {
      close: jasmine.createSpy('close'),
    };

    TestBed.configureTestingModule({
      imports: [
        LoadingComponent,
        MatDialogModule
      ],
      providers: [{ provide: MatDialogRef, useValue: matDialogRefMock }]
    });
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
