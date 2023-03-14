import { HttpInterceptor, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtUnAuthorizedInterceptorService implements HttpInterceptor {

  constructor()
  {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    return next.handle(request).pipe(tap(

      (event: HttpEvent<any>) =>
      {
        if (event instanceof HttpResponse)
        {
          //alert("200 Authorized")
        }
      },

      (error: any) =>
      {
        if (error instanceof HttpErrorResponse)
        {
          if (error.status == 401)
          {
            alert("401 UnAuthorized");
          }
        }
      }
    ));
  }
}
