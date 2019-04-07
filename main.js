(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routing/app-routing.module */ "./src/app/routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_index_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/index/index.component */ "./src/app/views/index/index.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _views_index_index_component__WEBPACK_IMPORTED_MODULE_5__["IndexComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [Document],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/routing/app-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/routing/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/index/index.component */ "./src/app/views/index/index.component.ts");




var routes = [{
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }, {
        path: 'home',
        component: _views_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"]
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/index/index.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/index/index.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n  <meta name=\"description\" content=\"\">\r\n  <meta name=\"author\" content=\"\">\r\n\r\n  <title>Stylish Portfolio - Start Bootstrap Template</title>\r\n\r\n  <link href=\"https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic\" rel=\"stylesheet\" type=\"text/css\">\r\n\r\n</head>\r\n\r\n<body id=\"page-top\">\r\n\r\n  <!-- Navigation -->\r\n  <a class=\"menu-toggle rounded\" [ngClass]=\"isSidebarActive? 'active' : '' \" (click)=\"toggleMenu($event)\" routerLink=\"\">\r\n    <i class=\"fas fa-bars\"></i>\r\n  </a>\r\n  <nav [ngClass]=\"isSidebarActive? 'active' : '' \" (click)=\"onSidebarClick($event)\">\r\n    <ul class=\"sidebar-nav\">\r\n      <li class=\"sidebar-brand\">\r\n        <a class=\"js-scroll-trigger\" href=\"#page-top\">Start Bootstrap</a>\r\n      </li>\r\n      <li class=\"sidebar-nav-item\">\r\n        <a class=\"js-scroll-trigger\" href=\"#page-top\">Home</a>\r\n      </li>\r\n      <li class=\"sidebar-nav-item\">\r\n        <a class=\"js-scroll-trigger\" href=\"#about\">About</a>\r\n      </li>\r\n      <li class=\"sidebar-nav-item\">\r\n        <a class=\"js-scroll-trigger\" href=\"#services\">Services</a>\r\n      </li>\r\n      <li class=\"sidebar-nav-item\">\r\n        <a class=\"js-scroll-trigger\" href=\"#portfolio\">Portfolio</a>\r\n      </li>\r\n      <li class=\"sidebar-nav-item\">\r\n        <a class=\"js-scroll-trigger\" href=\"#contact\">Contact</a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n\r\n  <!-- Header -->\r\n  <header class=\"masthead d-flex\">\r\n    <div class=\"container text-center my-auto\">\r\n      <h1 class=\"mb-1\">Stylish Portfolio</h1>\r\n      <h3 class=\"mb-5\">\r\n        <em>A Free Bootstrap Theme by Start Bootstrap</em>\r\n      </h3>\r\n      <a class=\"btn btn-primary btn-xl js-scroll-trigger\" href=\"#about\">Find Out More</a>\r\n    </div>\r\n    <div class=\"overlay\"></div>\r\n  </header>\r\n\r\n  <!-- About -->\r\n  <section class=\"content-section bg-light\" id=\"about\">\r\n    <div class=\"container text-center\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-10 mx-auto\">\r\n          <h2>Stylish Portfolio is the perfect theme for your next project!</h2>\r\n          <p class=\"lead mb-5\">This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at\r\n            <a href=\"https://unsplash.com/\">Unsplash</a>!</p>\r\n          <a class=\"btn btn-dark btn-xl js-scroll-trigger\" href=\"#services\">What We Offer</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Services -->\r\n  <section class=\"content-section bg-primary text-white text-center\" id=\"services\">\r\n    <div class=\"container\">\r\n      <div class=\"content-section-heading\">\r\n        <h3 class=\"text-secondary mb-0\">Services</h3>\r\n        <h2 class=\"mb-5\">What We Offer</h2>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3 col-md-6 mb-5 mb-lg-0\">\r\n          <span class=\"service-icon rounded-circle mx-auto mb-3\">\r\n            <i class=\"icon-screen-smartphone\"></i>\r\n          </span>\r\n          <h4>\r\n            <strong>Responsive</strong>\r\n          </h4>\r\n          <p class=\"text-faded mb-0\">Looks great on any screen size!</p>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6 mb-5 mb-lg-0\">\r\n          <span class=\"service-icon rounded-circle mx-auto mb-3\">\r\n            <i class=\"icon-pencil\"></i>\r\n          </span>\r\n          <h4>\r\n            <strong>Redesigned</strong>\r\n          </h4>\r\n          <p class=\"text-faded mb-0\">Freshly redesigned for Bootstrap 4.</p>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6 mb-5 mb-md-0\">\r\n          <span class=\"service-icon rounded-circle mx-auto mb-3\">\r\n            <i class=\"icon-like\"></i>\r\n          </span>\r\n          <h4>\r\n            <strong>Favorited</strong>\r\n          </h4>\r\n          <p class=\"text-faded mb-0\">Millions of users\r\n            <i class=\"fas fa-heart\"></i>\r\n            Start Bootstrap!</p>\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-6\">\r\n          <span class=\"service-icon rounded-circle mx-auto mb-3\">\r\n            <i class=\"icon-mustache\"></i>\r\n          </span>\r\n          <h4>\r\n            <strong>Question</strong>\r\n          </h4>\r\n          <p class=\"text-faded mb-0\">I mustache you a question...</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Callout -->\r\n  <section class=\"callout\">\r\n    <div class=\"container text-center\">\r\n      <h2 class=\"mx-auto mb-5\">Welcome to\r\n        <em>your</em>\r\n        next website!</h2>\r\n      <a class=\"btn btn-primary btn-xl\" href=\"https://startbootstrap.com/template-overviews/stylish-portfolio/\">Download Now!</a>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Portfolio -->\r\n  <section class=\"content-section\" id=\"portfolio\">\r\n    <div class=\"container\">\r\n      <div class=\"content-section-heading text-center\">\r\n        <h3 class=\"text-secondary mb-0\">Portfolio</h3>\r\n        <h2 class=\"mb-5\">Recent Projects</h2>\r\n      </div>\r\n      <div class=\"row no-gutters\">\r\n        <div class=\"col-lg-6\">\r\n          <a class=\"portfolio-item\" routerLink=\"\">\r\n            <span class=\"caption\">\r\n              <span class=\"caption-content\">\r\n                <h2>Stationary</h2>\r\n                <p class=\"mb-0\">A yellow pencil with envelopes on a clean, blue backdrop!</p>\r\n              </span>\r\n            </span>\r\n            <img class=\"img-fluid\" src=\"assets/img/portfolio-1.jpg\" alt=\"\">\r\n          </a>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <a class=\"portfolio-item\" routerLink=\"\">\r\n            <span class=\"caption\">\r\n              <span class=\"caption-content\">\r\n                <h2>Ice Cream</h2>\r\n                <p class=\"mb-0\">A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>\r\n              </span>\r\n            </span>\r\n            <img class=\"img-fluid\" src=\"assets/img/portfolio-2.jpg\" alt=\"\">\r\n          </a>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <a class=\"portfolio-item\" routerLink=\"\">\r\n            <span class=\"caption\">\r\n              <span class=\"caption-content\">\r\n                <h2>Strawberries</h2>\r\n                <p class=\"mb-0\">Strawberries are such a tasty snack, especially with a little sugar on top!</p>\r\n              </span>\r\n            </span>\r\n            <img class=\"img-fluid\" src=\"assets/img/portfolio-3.jpg\" alt=\"\">\r\n          </a>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <a class=\"portfolio-item\" routerLink=\"\">\r\n            <span class=\"caption\">\r\n              <span class=\"caption-content\">\r\n                <h2>Workspace</h2>\r\n                <p class=\"mb-0\">A yellow workspace with some scissors, pencils, and other objects.</p>\r\n              </span>\r\n            </span>\r\n            <img class=\"img-fluid\" src=\"assets/img/portfolio-4.jpg\" alt=\"\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Call to Action -->\r\n  <section class=\"content-section bg-primary text-white\">\r\n    <div class=\"container text-center\">\r\n      <h2 class=\"mb-4\">The buttons below are impossible to resist...</h2>\r\n      <a routerLink=\"\" class=\"btn btn-xl btn-light mr-4\">Click Me!</a>\r\n      <a routerLink=\"\" class=\"btn btn-xl btn-dark\">Look at Me!</a>\r\n    </div>\r\n  </section>\r\n\r\n  <!-- Footer -->\r\n  <footer class=\"footer text-center\">\r\n    <div class=\"container\">\r\n      <ul class=\"list-inline mb-5\">\r\n        <li class=\"list-inline-item\">\r\n          <a class=\"social-link rounded-circle text-white mr-3\" routerLink=\"\">\r\n            <i class=\"icon-social-facebook\"></i>\r\n          </a>\r\n        </li>\r\n        <li class=\"list-inline-item\">\r\n          <a class=\"social-link rounded-circle text-white mr-3\" routerLink=\"\">\r\n            <i class=\"icon-social-twitter\"></i>\r\n          </a>\r\n        </li>\r\n        <li class=\"list-inline-item\">\r\n          <a class=\"social-link rounded-circle text-white\" routerLink=\"\">\r\n            <i class=\"icon-social-github\"></i>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <p class=\"text-muted small mb-0\">Copyright &copy; Your Website 2019</p>\r\n    </div>\r\n  </footer>\r\n\r\n  <!-- Scroll to Top Button-->\r\n  <a class=\"rounded js-scroll-trigger\" [ngClass]=\"isScrollToTopFadeIn? 'scroll-to-top':''\" href=\"#page-top\">\r\n    <i class=\"fas fa-angle-up\"></i>\r\n  </a>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/views/index/index.component.scss":
/*!**************************************************!*\
  !*** ./src/app/views/index/index.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/index/index.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexComponent = /** @class */ (function () {
    function IndexComponent(document) {
        this.document = document;
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.document.onscroll = this.onDocumentScroll;
    };
    IndexComponent.prototype.onDocumentScroll = function () {
        var scrollDistance = this.document.body.scrollTop;
        this.isScrollToTopFadeIn = scrollDistance > 100;
        // if (scrollDistance > 100) {
        //   $('.scroll-to-top').fadeIn();
        // } else {
        //   $('.scroll-to-top').fadeOut();
        // }
    };
    IndexComponent.prototype.toggleMenu = function (event) {
        event.preventDefault();
        this.isSidebarActive = !this.isSidebarActive;
        //TODO;
        // $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    };
    IndexComponent.prototype.onSidebarClick = function (event) {
        if (event.target.nodeName === 'a') {
            this.isSidebarActive = false;
            //TODO;
            //$(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
        }
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/views/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/views/index/index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Document)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Document])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Work\My\Construction\erikcartman.github.io\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map