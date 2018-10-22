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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./people/people.component */ "./src/app/people/people.component.ts");
/* harmony import */ var _person_detail_person_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person-detail/person-detail.component */ "./src/app/person-detail/person-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/people', pathMatch: 'full' },
    { path: 'detail/:id', component: _person_detail_person_detail_component__WEBPACK_IMPORTED_MODULE_3__["PersonDetailComponent"] },
    { path: 'people', component: _people_people_component__WEBPACK_IMPORTED_MODULE_2__["PeopleComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{ title }}</h1>\r\n<nav>\r\n  <router-outlet></router-outlet>\r\n</nav>\r\n<link ref=\"//stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" rel=\"stylesheet\">\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\nh1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0; }\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0; }\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px; }\nnav a:visited, a:link {\n  color: #607D8B; }\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC; }\nnav a.active {\n  color: #039be5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBbGV4XFxzb3VyY2VcXHJlcG9zXFxQZW9wbGVTZWFyY2hcXFBlb3BsZVNlYXJjaC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1QztBQUN2QztFQUNFLGlCQUFnQjtFQUNoQixZQUFXO0VBQ1gsaUJBQWdCLEVBQ2pCO0FBRUQ7RUFDRSxlQUFjO0VBQ2QsY0FBYTtFQUNiLGVBQWMsRUFDZjtBQUVEO0VBQ0Usa0JBQWlCO0VBQ2pCLHNCQUFxQjtFQUNyQixpQkFBZ0I7RUFDaEIsc0JBQXFCO0VBQ3JCLHVCQUFzQjtFQUN0QixtQkFBa0IsRUFDbkI7QUFFRDtFQUNFLGVBQWMsRUFDZjtBQUVEO0VBQ0UsZUFBYztFQUNkLDBCQUF5QixFQUMxQjtBQUVEO0VBQ0UsZUFBYyxFQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQXBwQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbmgxIHtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG5uYXYgYSB7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5uYXYgYTp2aXNpdGVkLCBhOmxpbmsge1xyXG4gIGNvbG9yOiAjNjA3RDhCO1xyXG59XHJcblxyXG5uYXYgYTpob3ZlciB7XHJcbiAgY29sb3I6ICMwMzliZTU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcclxufVxyXG5cclxubmF2IGEuYWN0aXZlIHtcclxuICBjb2xvcjogIzAzOWJlNTtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'People Search App';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./people/people.component */ "./src/app/people/people.component.ts");
/* harmony import */ var _person_detail_person_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./person-detail/person-detail.component */ "./src/app/person-detail/person-detail.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _person_search_person_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./person-search/person-search.component */ "./src/app/person-search/person-search.component.ts");
/* harmony import */ var _person_edit_person_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./person-edit/person-edit.component */ "./src/app/person-edit/person-edit.component.ts");
/* harmony import */ var _person_form_person_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./person-form/person-form.component */ "./src/app/person-form/person-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _people_people_component__WEBPACK_IMPORTED_MODULE_5__["PeopleComponent"],
                _person_detail_person_detail_component__WEBPACK_IMPORTED_MODULE_6__["PersonDetailComponent"],
                _person_search_person_search_component__WEBPACK_IMPORTED_MODULE_8__["PersonSearchComponent"],
                _person_edit_person_edit_component__WEBPACK_IMPORTED_MODULE_9__["PersonEditComponent"],
                _person_form_person_form_component__WEBPACK_IMPORTED_MODULE_10__["PersonFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/people/people.component.html":
/*!**********************************************!*\
  !*** ./src/app/people/people.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>People</h2>\r\n<app-person-search (peopleChange)=\"peopleChanged($event)\"></app-person-search>\r\n<ul class=\"people\">\r\n  <li *ngFor=\"let person of people\">\r\n    <a routerLink=\"/detail/{{person.id}}\">\r\n      <span class=\"badge\">{{person.id}}</span> {{person.firstName}} {{person.lastName}}\r\n    </a>\r\n    <button class=\"delete\" title=\"delete person\"\r\n            (click)=\"delete(person)\">x</button>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/people/people.component.scss":
/*!**********************************************!*\
  !*** ./src/app/people/people.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* PeopleComponent's private CSS styles */\n.people {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em; }\n.people li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px; }\n.people li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em; }\n.people a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px; }\n.people a:hover {\n  color: #607D8B; }\n.people .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px; }\nbutton {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial; }\nbutton:hover {\n  background-color: #cfd8dc; }\nbutton.delete {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVvcGxlL0M6XFxVc2Vyc1xcQWxleFxcc291cmNlXFxyZXBvc1xcUGVvcGxlU2VhcmNoXFxQZW9wbGVTZWFyY2gvc3JjXFxhcHBcXHBlb3BsZVxccGVvcGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBDQUEwQztBQUMxQztFQUNFLGtCQUFpQjtFQUNqQixzQkFBcUI7RUFDckIsV0FBVTtFQUNWLFlBQVcsRUFDWjtBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsdUJBQXNCO0VBQ3RCLGFBQVk7RUFDWixnQkFBZTtFQUNmLGNBQWE7RUFDYixtQkFBa0IsRUFDbkI7QUFFRDtFQUNFLGVBQWM7RUFDZCx1QkFBc0I7RUFDdEIsV0FBVSxFQUNYO0FBRUQ7RUFDRSxZQUFXO0VBQ1gsc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsYUFBWSxFQUNiO0FBRUQ7RUFDRSxlQUFjLEVBQ2Y7QUFFRDtFQUNFLHNCQUFxQjtFQUNyQixpQkFBZ0I7RUFDaEIsYUFBWTtFQUNaLDZCQUE0QjtFQUM1QiwwQkFBeUI7RUFDekIsaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsVUFBUztFQUNULGNBQWE7RUFDYixnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsMkJBQTBCLEVBQzNCO0FBRUQ7RUFDRSx1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixhQUFZO0VBQ1osbUJBQWtCLEVBQ25CO0FBRUQ7RUFDRSwwQkFBeUIsRUFDMUI7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsV0FBVTtFQUNWLGtDQUFpQztFQUNqQyxhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9wZW9wbGUvcGVvcGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogUGVvcGxlQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbi5wZW9wbGUge1xyXG4gIG1hcmdpbjogMCAwIDJlbSAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxNWVtO1xyXG59XHJcblxyXG4ucGVvcGxlIGxpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgbWFyZ2luOiAuNWVtO1xyXG4gIHBhZGRpbmc6IC4zZW0gMDtcclxuICBoZWlnaHQ6IDEuNmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnBlb3BsZSBsaTpob3ZlciB7XHJcbiAgY29sb3I6ICM2MDdEOEI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICBsZWZ0OiAuMWVtO1xyXG59XHJcblxyXG4ucGVvcGxlIGEge1xyXG4gIGNvbG9yOiAjODg4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4ucGVvcGxlIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjNjA3RDhCO1xyXG59XHJcblxyXG4ucGVvcGxlIC5iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcclxuICBsaW5lLWhlaWdodDogMWVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAtMXB4O1xyXG4gIHRvcDogLTRweDtcclxuICBoZWlnaHQ6IDEuOGVtO1xyXG4gIG1pbi13aWR0aDogMTZweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IC44ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjdXJzb3I6IGhhbmQ7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XHJcbn1cclxuXHJcbmJ1dHRvbi5kZWxldGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAxOTRweDtcclxuICB0b3A6IC0zMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXkgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/people/people.component.ts":
/*!********************************************!*\
  !*** ./src/app/people/people.component.ts ***!
  \********************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../person.service */ "./src/app/person.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeopleComponent = /** @class */ (function () {
    function PeopleComponent(personService) {
        this.personService = personService;
        this.onDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PeopleComponent.prototype.ngOnInit = function () {
    };
    PeopleComponent.prototype.peopleChanged = function (people) {
        this.people = people;
    };
    PeopleComponent.prototype.delete = function (person) {
        this.personService.deletePerson(person).subscribe(this.onDeleted.emit);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PeopleComponent.prototype, "people", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PeopleComponent.prototype, "onDeleted", void 0);
    PeopleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-people',
            template: __webpack_require__(/*! ./people.component.html */ "./src/app/people/people.component.html"),
            styles: [__webpack_require__(/*! ./people.component.scss */ "./src/app/people/people.component.scss")]
        }),
        __metadata("design:paramtypes", [_person_service__WEBPACK_IMPORTED_MODULE_1__["PersonService"]])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/person-detail/person-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/person-detail/person-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-person-form [person]=\"person\"></app-person-form>\r\n\r\n  <button (click)=\"save()\">save</button>\r\n  <button (click)=\"goBack()\">Go back</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/person-detail/person-detail.component.scss":
/*!************************************************************!*\
  !*** ./src/app/person-detail/person-detail.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* PersonDetailComponent's private CSS styles */\nlabel {\n  display: inline-block;\n  width: 3em;\n  margin: .5em 0;\n  color: #607D8B;\n  font-weight: bold; }\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em; }\nbutton {\n  margin-top: 20px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand; }\nbutton:hover {\n  background-color: #cfd8dc; }\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uLWRldGFpbC9DOlxcVXNlcnNcXEFsZXhcXHNvdXJjZVxccmVwb3NcXFBlb3BsZVNlYXJjaFxcUGVvcGxlU2VhcmNoL3NyY1xcYXBwXFxwZXJzb24tZGV0YWlsXFxwZXJzb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdEQUFnRDtBQUNoRDtFQUNFLHNCQUFxQjtFQUNyQixXQUFVO0VBQ1YsZUFBYztFQUNkLGVBQWM7RUFDZCxrQkFBaUIsRUFDbEI7QUFFRDtFQUNFLFlBQVc7RUFDWCxlQUFjO0VBQ2QsbUJBQWtCLEVBQ25CO0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLHVCQUFzQjtFQUN0QixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLGFBQVksRUFDYjtBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCO0FBRUQ7RUFDRSx1QkFBc0I7RUFDdEIsWUFBVztFQUNYLGFBQVksRUFDYiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbi1kZXRhaWwvcGVyc29uLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBlcnNvbkRldGFpbENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAzZW07XHJcbiAgbWFyZ2luOiAuNWVtIDA7XHJcbiAgY29sb3I6ICM2MDdEOEI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBwYWRkaW5nLWxlZnQ6IC40ZW07XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjdXJzb3I6IGhhbmQ7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIGN1cnNvcjogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/person-detail/person-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/person-detail/person-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: PersonDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonDetailComponent", function() { return PersonDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _person_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../person.service */ "./src/app/person.service.ts");
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../person */ "./src/app/person.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonDetailComponent = /** @class */ (function () {
    function PersonDetailComponent(route, personService, location) {
        this.route = route;
        this.personService = personService;
        this.location = location;
    }
    PersonDetailComponent.prototype.ngOnInit = function () {
        this.getPerson();
    };
    PersonDetailComponent.prototype.getPerson = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.personService.getPerson(id)
            .subscribe(function (person) { return _this.person = person; });
    };
    PersonDetailComponent.prototype.add = function (firstName, lastName) {
        firstName = firstName.trim();
        lastName = lastName.trim();
        if (!firstName && !lastName) {
            return;
        }
        this.personService.addPerson({ firstName: firstName, lastName: lastName })
            .subscribe(this.onChange);
    };
    PersonDetailComponent.prototype.save = function () {
        this.personService.updatePerson(this.person)
            .subscribe(this.onChange);
    };
    PersonDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    PersonDetailComponent.prototype.onChange = function () {
        this.goBack();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _person__WEBPACK_IMPORTED_MODULE_4__["Person"])
    ], PersonDetailComponent.prototype, "person", void 0);
    PersonDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-person-detail',
            template: __webpack_require__(/*! ./person-detail.component.html */ "./src/app/person-detail/person-detail.component.html"),
            styles: [__webpack_require__(/*! ./person-detail.component.scss */ "./src/app/person-detail/person-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _person_service__WEBPACK_IMPORTED_MODULE_3__["PersonService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], PersonDetailComponent);
    return PersonDetailComponent;
}());



/***/ }),

/***/ "./src/app/person-edit/person-edit.component.html":
/*!********************************************************!*\
  !*** ./src/app/person-edit/person-edit.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  person-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/person-edit/person-edit.component.scss":
/*!********************************************************!*\
  !*** ./src/app/person-edit/person-edit.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbi1lZGl0L3BlcnNvbi1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/person-edit/person-edit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/person-edit/person-edit.component.ts ***!
  \******************************************************/
/*! exports provided: PersonEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonEditComponent", function() { return PersonEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../person */ "./src/app/person.ts");
/* harmony import */ var _person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../person.service */ "./src/app/person.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonEditComponent = /** @class */ (function () {
    function PersonEditComponent(personService) {
        this.personService = personService;
        this.onComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PersonEditComponent.prototype.ngOnInit = function () {
    };
    PersonEditComponent.prototype.add = function (firstName, lastName) {
        firstName = firstName.trim();
        lastName = lastName.trim();
        if (!firstName && !lastName) {
            return;
        }
        this.personService.addPerson({ firstName: firstName, lastName: lastName })
            .subscribe(this.onChange);
    };
    PersonEditComponent.prototype.save = function () {
        this.personService.updatePerson(this.person)
            .subscribe(this.onChange);
    };
    PersonEditComponent.prototype.onChange = function () {
        this.onComplete.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _person__WEBPACK_IMPORTED_MODULE_1__["Person"])
    ], PersonEditComponent.prototype, "person", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PersonEditComponent.prototype, "onComplete", void 0);
    PersonEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-person-edit',
            template: __webpack_require__(/*! ./person-edit.component.html */ "./src/app/person-edit/person-edit.component.html"),
            styles: [__webpack_require__(/*! ./person-edit.component.scss */ "./src/app/person-edit/person-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [_person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"]])
    ], PersonEditComponent);
    return PersonEditComponent;
}());



/***/ }),

/***/ "./src/app/person-form/person-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/person-form/person-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Hidden status: {{!person}}\r\n\r\n<div class=\"container\" *ngIf=\"person\">\r\n  <form (ngSubmit)=\"done()\" #personForm=\"ngForm\">\r\n    {{diagnostic}}\r\n    <div class=\"form-group\">\r\n      <label for=\"firstName\">First name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"firstName\"\r\n             [(ngModel)]=\"person.firstName\" name=\"firstName\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"lastName\">Last name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"lastName\"\r\n             required\r\n             [(ngModel)]=\"person.lastName\" name=\"lastName\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"birthDate\">Birth date</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"birthDate\"\r\n             [(ngModel)]=\"person.birthDate\" name=\"birthDate\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"deathDate\">Death date</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"deathDate\"\r\n             [(ngModel)]=\"person.deathDate\" name=\"deathDate\">\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-success\">Done></button>\r\n  </form>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/person-form/person-form.component.scss":
/*!********************************************************!*\
  !*** ./src/app/person-form/person-form.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbi1mb3JtL3BlcnNvbi1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/person-form/person-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/person-form/person-form.component.ts ***!
  \******************************************************/
/*! exports provided: PersonFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonFormComponent", function() { return PersonFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../person */ "./src/app/person.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonFormComponent = /** @class */ (function () {
    function PersonFormComponent() {
        this.onDone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PersonFormComponent.prototype.ngOnInit = function () {
    };
    PersonFormComponent.prototype.done = function () {
        this.onDone.emit(this.person);
    };
    Object.defineProperty(PersonFormComponent.prototype, "diagnostic", {
        get: function () {
            return JSON.stringify(this.person);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _person__WEBPACK_IMPORTED_MODULE_1__["Person"])
    ], PersonFormComponent.prototype, "person", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PersonFormComponent.prototype, "onDone", void 0);
    PersonFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-person-form',
            template: __webpack_require__(/*! ./person-form.component.html */ "./src/app/person-form/person-form.component.html"),
            styles: [__webpack_require__(/*! ./person-form.component.scss */ "./src/app/person-form/person-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PersonFormComponent);
    return PersonFormComponent;
}());



/***/ }),

/***/ "./src/app/person-search/person-search.component.html":
/*!************************************************************!*\
  !*** ./src/app/person-search/person-search.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\r\n  <h4>Search by Name</h4>\r\n\r\n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\r\n\r\n  <ul class=\"search-result\">\r\n    <li *ngFor=\"let person of people$ | async\">\r\n      <a routerLink=\"/detail/{{person.id}}\">\r\n        {{person.firstName}} {{person.lastName}}\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/person-search/person-search.component.scss":
/*!************************************************************!*\
  !*** ./src/app/person-search/person-search.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* PersonSearch private styles */\n.search-result li {\n  border-bottom: 1px solid gray;\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  width: 195px;\n  height: 16px;\n  padding: 5px;\n  background-color: white;\n  cursor: pointer;\n  list-style-type: none; }\n.search-result li:hover {\n  background-color: #607D8B; }\n.search-result li a {\n  color: #888;\n  display: block;\n  text-decoration: none; }\n.search-result li a:hover {\n  color: white; }\n.search-result li a:active {\n  color: white; }\n#search-box {\n  width: 200px;\n  height: 20px; }\nul.search-result {\n  margin-top: 0;\n  padding-left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uLXNlYXJjaC9DOlxcVXNlcnNcXEFsZXhcXHNvdXJjZVxccmVwb3NcXFBlb3BsZVNlYXJjaFxcUGVvcGxlU2VhcmNoL3NyY1xcYXBwXFxwZXJzb24tc2VhcmNoXFxwZXJzb24tc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlDQUFpQztBQUNqQztFQUNFLDhCQUE2QjtFQUM3Qiw0QkFBMkI7RUFDM0IsNkJBQTRCO0VBQzVCLGFBQVk7RUFDWixhQUFZO0VBQ1osYUFBWTtFQUNaLHdCQUF1QjtFQUN2QixnQkFBZTtFQUNmLHNCQUFxQixFQUN0QjtBQUVEO0VBQ0UsMEJBQXlCLEVBQzFCO0FBRUQ7RUFDRSxZQUFXO0VBQ1gsZUFBYztFQUNkLHNCQUFxQixFQUN0QjtBQUVEO0VBQ0UsYUFBWSxFQUNiO0FBRUQ7RUFDRSxhQUFZLEVBQ2I7QUFFRDtFQUNFLGFBQVk7RUFDWixhQUFZLEVBQ2I7QUFHRDtFQUNFLGNBQWE7RUFDYixnQkFBZSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbi1zZWFyY2gvcGVyc29uLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFBlcnNvblNlYXJjaCBwcml2YXRlIHN0eWxlcyAqL1xyXG4uc2VhcmNoLXJlc3VsdCBsaSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgd2lkdGg6IDE5NXB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQgbGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0IGxpIGEge1xyXG4gIGNvbG9yOiAjODg4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQgbGkgYTpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdCBsaSBhOmFjdGl2ZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jc2VhcmNoLWJveCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuXHJcbnVsLnNlYXJjaC1yZXN1bHQge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/person-search/person-search.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/person-search/person-search.component.ts ***!
  \**********************************************************/
/*! exports provided: PersonSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonSearchComponent", function() { return PersonSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _person_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../person.service */ "./src/app/person.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonSearchComponent = /** @class */ (function () {
    function PersonSearchComponent(personService) {
        this.personService = personService;
        this.peopleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    PersonSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) { return _this.personService.searchPeople(term); })).subscribe(function (people) {
            _this.peopleChange.emit(people);
        });
    };
    // Push a search term into the observable stream.
    PersonSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PersonSearchComponent.prototype, "peopleChange", void 0);
    PersonSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-person-search',
            template: __webpack_require__(/*! ./person-search.component.html */ "./src/app/person-search/person-search.component.html"),
            styles: [__webpack_require__(/*! ./person-search.component.scss */ "./src/app/person-search/person-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_person_service__WEBPACK_IMPORTED_MODULE_3__["PersonService"]])
    ], PersonSearchComponent);
    return PersonSearchComponent;
}());



/***/ }),

/***/ "./src/app/person.service.ts":
/*!***********************************!*\
  !*** ./src/app/person.service.ts ***!
  \***********************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var PersonService = /** @class */ (function () {
    function PersonService(http) {
        this.http = http;
        this.peopleUrl = 'api/people';
    }
    /** GET all people from the server */
    PersonService.prototype.getPeople = function () {
        return this.http.get(this.peopleUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getPeople', [])));
    };
    /**
     *  GET a list of people matching the searchString.
     * @param searchString - the string to search by
     */
    PersonService.prototype.searchPeople = function (searchString) {
        var url = this.peopleUrl + "/?searchString=" + searchString;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchPeople', [])));
    };
    /**
     * GET a person by id. Will be 404 if not found
     * @param id - the id of the person
     */
    PersonService.prototype.getPerson = function (id) {
        var url = this.peopleUrl + "/" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getPerson id=" + id)));
    };
    /**
     * GET a person by id. Return `undefined` when id not found
     * @param id - the id of the person
     */
    PersonService.prototype.getPersonNo404 = function (id) {
        var url = this.peopleUrl + "/?id=" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (people) { return people[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getPerson id=" + id)));
    };
    /**
     * PUT - update the person on the server
     * @param person - the person to update
     */
    PersonService.prototype.updatePerson = function (person) {
        return this.http.put(this.peopleUrl, person, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updatePerson')));
    };
    /**
     * POST a new person to the server
     * @param person - the person to add
     */
    PersonService.prototype.addPerson = function (person) {
        return this.http.post(this.peopleUrl, person, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addPerson')));
    };
    /**
     * DELETE a person from the server
     * @param person - the person or id of the person to delete
     */
    PersonService.prototype.deletePerson = function (person) {
        var id = typeof person === 'number' ? person : person.id;
        var url = this.peopleUrl + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deletePerson')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    PersonService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    PersonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PersonService);
    return PersonService;
}());



/***/ }),

/***/ "./src/app/person.ts":
/*!***************************!*\
  !*** ./src/app/person.ts ***!
  \***************************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
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

module.exports = __webpack_require__(/*! C:\Users\Alex\source\repos\PeopleSearch\PeopleSearch\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map