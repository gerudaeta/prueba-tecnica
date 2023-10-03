import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDialogComponent } from './delete-dialog.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";

describe('DeleteDialogComponent', () => {
  let component: DeleteDialogComponent;
  let fixture: ComponentFixture<DeleteDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DeleteDialogComponent,
        MatDialogModule
      ],
      providers: [
        { provide: MatDialogRef, useClass: MatDialogRefMock },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    });
    fixture = TestBed.createComponent(DeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MatDialogRefMock {
  close() { }
}
