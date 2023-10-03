import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {Observable, of} from "rxjs";
import {SharedModule} from "../shared.module";
import {LoadingComponent} from "../components/loading/loading.component";

describe('LoadingService', () => {
  let service: LoadingService;
  let dialog: MatDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadingService,
        { provide: MatDialog, useValue: {} },
      ],
      imports: [],
    });
    service = TestBed.inject(LoadingService);
    dialog = TestBed.inject(MatDialog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
