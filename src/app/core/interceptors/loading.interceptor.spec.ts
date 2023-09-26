import { TestBed } from '@angular/core/testing';

import { LoadingInterceptor } from './loading.interceptor';
import {MatDialogModule} from "@angular/material/dialog";

describe('LoadingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoadingInterceptor
      ],
    imports: [MatDialogModule]
  }));

  it('should be created', () => {
    const interceptor: LoadingInterceptor = TestBed.inject(LoadingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
