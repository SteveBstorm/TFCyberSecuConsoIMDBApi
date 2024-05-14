import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class TieInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem("token")
    if(token != null) {
      let clone = req.clone({headers : new HttpHeaders({"authorization" : "bearer " +token})})
      return next.handle(clone)
    }
    return next.handle(req)
  }

}
