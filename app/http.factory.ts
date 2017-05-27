/**
 * Created by fabri_000 on 27/05/2017.
 */
import {XHRBackend, Http, RequestOptions} from "@angular/http";
import {InterceptorsHttp} from "./http.interceptor";

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions): Http {
    return new InterceptorsHttp(xhrBackend, requestOptions);
}