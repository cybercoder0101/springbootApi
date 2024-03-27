import {HttpEvent, HttpInterceptorFn} from '@angular/common/http';
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {inject} from "@angular/core";


export const tokenInterceptor: HttpInterceptorFn = (req, next):Observable<HttpEvent<unknown>> => {
  const toExclude="/login";
const authService=inject(AuthService).getToken()
  if(req.url.search(toExclude)===-1){
    let jwt =authService;
    let reqWithToken= req.clone({
      setHeaders:{Authorization:"Bearer "+jwt}
    })
    return next(reqWithToken)
  }

  return next(req);
};
