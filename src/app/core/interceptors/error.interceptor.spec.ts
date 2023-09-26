import { TestBed } from '@angular/core/testing';

import { ErrorInterceptor } from './error.interceptor';
import {MatSnackBarModule} from "@angular/material/snack-bar";

describe('ErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorInterceptor
      ],
    imports: [
      MatSnackBarModule
    ]
  }));

  it('should be created', () => {
    const interceptor: ErrorInterceptor = TestBed.inject(ErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
