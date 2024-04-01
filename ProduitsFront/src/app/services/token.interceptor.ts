import { HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (
  req,
  next
): Observable<HttpEvent<unknown>> => {
  const toExclude = ['/login', '/register'];
  const authService = inject(AuthService).getToken();

  if (!toExclude.some((url) => req.url.includes(url))) {
    const jwt = authService;
    const reqWithToken = req.clone({
      setHeaders: { Authorization: `Bearer ${jwt}` },
    });
    return next(reqWithToken);
  }

  return next(req);
};
