import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {finalize, Observable, tap} from 'rxjs';
import {LoadingService} from "../../shared/services/loading.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.open();
    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          this.loadingService.close();
        }
      }),
      finalize(() => {
        this.loadingService.close();
      })
    );
  }
}
