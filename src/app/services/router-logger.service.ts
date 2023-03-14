import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterLoggerService {

  private httpClient : HttpClient | any

  currentUserName : string = ""

  constructor(private httpBackend : HttpBackend)
  {

  }

    public log(logMsg:string):Observable<any>
    {
      this.httpClient = new HttpClient(this.httpBackend)
      return this.httpClient.post("/api/routerlogger",logMsg,{headers : new HttpHeaders().set("content-type","text/plain")})
    }

}
