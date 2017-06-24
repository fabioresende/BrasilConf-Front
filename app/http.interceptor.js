"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by fabri_000 on 27/05/2017.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var environment_1 = require("./environment");
var InterceptorsHttp = (function (_super) {
    __extends(InterceptorsHttp, _super);
    function InterceptorsHttp(backend, defaultOptions) {
        _super.call(this, backend, defaultOptions);
    }
    InterceptorsHttp.prototype.request = function (url, options) {
        return _super.prototype.request.call(this, url, options);
    };
    InterceptorsHttp.prototype.get = function (url, options) {
        url = this.updateUrl(url);
        return _super.prototype.get.call(this, url, this.getRequestOptionArgs(options));
    };
    InterceptorsHttp.prototype.post = function (url, body, options) {
        url = this.updateUrl(url);
        return _super.prototype.post.call(this, url, body, this.getRequestOptionArgs(options));
    };
    InterceptorsHttp.prototype.put = function (url, body, options) {
        url = this.updateUrl(url);
        return _super.prototype.put.call(this, url, body, this.getRequestOptionArgs(options));
    };
    InterceptorsHttp.prototype.delete = function (url, options) {
        url = this.updateUrl(url);
        return _super.prototype.delete.call(this, url, this.getRequestOptionArgs(options));
    };
    InterceptorsHttp.prototype.updateUrl = function (req) {
        return environment_1.environment.origin + req;
    };
    InterceptorsHttp.prototype.getRequestOptionArgs = function (options) {
        if (options == null) {
            options = new http_1.RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new http_1.Headers();
        }
        var token = localStorage.getItem('id_token');
        if (token) {
            options.headers.append('Authorization', "Bearer " + token);
        }
        if (!options.headers.get('Content-type')) {
            options.headers.append('Content-Type', 'application/json');
        }
        return options;
    };
    InterceptorsHttp = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.ConnectionBackend, http_1.RequestOptions])
    ], InterceptorsHttp);
    return InterceptorsHttp;
}(http_1.Http));
exports.InterceptorsHttp = InterceptorsHttp;
//# sourceMappingURL=http.interceptor.js.map