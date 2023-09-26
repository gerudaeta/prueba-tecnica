import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDialogComponent } from './delete-dialog.component';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {of} from "rxjs";

describe('DeleteDialogComponent', () => {
  let component: DeleteDialogComponent;
  let fixture: ComponentFixture<DeleteDialogComponent>;

  const matDialogMock = {
    open: () => ({
      afterClosed: () => of({}),
    }),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DeleteDialogComponent,
        MatDialogModule
      ],
      providers: [{ provide: MatDialog, useValue: matDialogMock }]
    });
    fixture = TestBed.createComponent(DeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
