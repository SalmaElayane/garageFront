import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { LoginService } from "./login.service";


@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

    constructor(private loginService: LoginService) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const access_token = localStorage.getItem("accessToken");
        if (access_token ) {
            const transformedReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${access_token}`)
            });
            return next.handle(transformedReq);
        }
        return next.handle(req);
    }

}
