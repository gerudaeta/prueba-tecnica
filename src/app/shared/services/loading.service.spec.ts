import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {of} from "rxjs";

describe('LoadingService', () => {
  let service: LoadingService;

  const matDialogMock = {
    open: () => ({
      afterClosed: () => of({}),
    }),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule
      ],
      declarations: [
        LoadingService
      ],
      providers: [{ provide: MatDialog, useValue: matDialogMock }]
    });
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
