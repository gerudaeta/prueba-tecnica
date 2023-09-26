import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Router} from "@angular/router";
import {NotificationService} from "../../shared/services/notification.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private notificacionService: NotificationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((response: HttpErrorResponse) => this.handleError(response))
    );
  }

  private handleError(response: HttpErrorResponse): Observable<never> {
    const errorMessages: { [key: number]: string } = {
      400: response.statusText,
      401: 'Authentication Failure',
      403: response.error.exception || 'Forbidden',
      404: response.statusText,
      500: 'Something Went Wrong',
      0: 'Unable to Connect to WebApi Server.'
    };

    const errorMessage = errorMessages[response.status] || 'Something Went Wrong';

    if (response.status === 404) {
      this.router.navigateByUrl('/404');
    }

    this.notificacionService.showError(errorMessage);

    return throwError(() => response.error);
  }
}
