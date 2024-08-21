import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';

import { environment } from '@env/environment';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const reqWithHeader = req.clone({
    headers: req.headers.set('x-api-key', environment.apiKey),
  });

  return next(reqWithHeader);
};
