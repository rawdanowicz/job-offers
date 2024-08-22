import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

export const authInterceptor = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const reqWithHeader = req.clone({
    headers: req.headers.set('x-api-key', environment.apiKey),
  });

  return next(reqWithHeader);
};
