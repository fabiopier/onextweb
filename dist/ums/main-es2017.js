(self["webpackChunkonextweb"] = self["webpackChunkonextweb"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _pages_whoweare_whoweare_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/whoweare/whoweare.component */ 9946);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/portfolio/portfolio.component */ 9804);
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact/contact.component */ 5996);
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/services/services.component */ 7569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);








//import {CONTENT_ROUTES} from './shared/routes/content-layout.routes';
const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent },
    { path: 'whoweare', component: _pages_whoweare_whoweare_component__WEBPACK_IMPORTED_MODULE_0__.WhoweareComponent },
    { path: 'services', component: _pages_services_services_component__WEBPACK_IMPORTED_MODULE_4__.ServicesComponent },
    { path: 'portfolio', component: _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__.PortfolioComponent },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent },
];
/*
const appRoutes: Routes = [
  { path: '', data: { title: 'Content Views' }, children: CONTENT_ROUTES }
];*/
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes)
            //  RouterModule.forRoot(appRoutes , { useHash: false })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu/menu.component */ 5819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);



class AppComponent {
    constructor() {
        this.title = 'Onextweb';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slider */ 3616);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ 5937);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/users/users.component */ 1524);
/* harmony import */ var _pages_usersold_usersold_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/usersold/usersold.component */ 587);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu/menu.component */ 5819);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login/login.component */ 4902);
/* harmony import */ var _pages_dashboard_dasboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/dashboard/dasboard.component */ 3045);
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/books.service */ 639);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_whoweare_whoweare_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/whoweare/whoweare.component */ 9946);
/* harmony import */ var _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/portfolio/portfolio.component */ 9804);
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/services/services.component */ 7569);
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/contact/contact.component */ 5996);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/users.service */ 4961);
/* harmony import */ var _services_usersold_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/usersold.service */ 4323);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/user/user.component */ 241);
/* harmony import */ var _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/user-detail/user-detail.component */ 2697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2316);


























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [_services_users_service__WEBPACK_IMPORTED_MODULE_14__.UserService, _services_usersold_service__WEBPACK_IMPORTED_MODULE_15__.UseroldService, _services_books_service__WEBPACK_IMPORTED_MODULE_8__.BooksService], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__.MatSliderModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__.MatGridListModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatTableModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _pages_users_users_component__WEBPACK_IMPORTED_MODULE_2__.UsersComponent,
        _pages_usersold_usersold_component__WEBPACK_IMPORTED_MODULE_3__.UsersoldComponent,
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__.MenuComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent,
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent,
        _pages_whoweare_whoweare_component__WEBPACK_IMPORTED_MODULE_10__.WhoweareComponent,
        _pages_dashboard_dasboard_component__WEBPACK_IMPORTED_MODULE_7__.DashboardComponent,
        _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__.PortfolioComponent,
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__.HomeComponent,
        _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__.ContactComponent,
        _pages_services_services_component__WEBPACK_IMPORTED_MODULE_12__.ServicesComponent,
        _components_user_user_component__WEBPACK_IMPORTED_MODULE_16__.UserComponent,
        _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_17__.UserDetailComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__.MatSliderModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__.MatGridListModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatTableModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule] }); })();


/***/ }),

/***/ 1336:
/*!*********************************!*\
  !*** ./src/app/classes/User.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": function() { return /* binding */ User; }
/* harmony export */ });
class User {
    constructor() {
        this.id = 0;
        this.name = '';
        this.lastname = '';
        this.email = '';
        this.fiscalcode = '';
        this.province = '';
        this.phone = '';
        this.age = 18;
    }
}


/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": function() { return /* binding */ HeaderComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["header"]], decls: 2, vars: 0, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " header works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5819:
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": function() { return /* binding */ MenuComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class MenuComponent {
    constructor() { }
    ngOnInit() { }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["navbar"]], decls: 31, vars: 0, consts: [[1, "navbar", "containerFull"], [1, "containerMaxWidth"], [1, "navbar__logo"], ["src", "/assets/home/logo.svg", 1, "navbar__logo__img"], [1, "navbar__menu", "xx-font-lato", "xx-font-16"], ["routerLink", "home", "routerLinkActive", "active"], [1, "navbar__menu_label"], [1, "navbar__menu_line"], ["routerLink", "whoweare", "routerLinkActive", "active"], ["routerLink", "services", "routerLinkActive", "active"], ["routerLink", "portfolio", "routerLinkActive", "active"], ["routerLink", "contact", "routerLinkActive", "active"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Chi siamo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Servizi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Contattaci");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: [".navbar[_ngcontent-%COMP%] {\n  height: 100px;\n  background-color: black;\n}\n.navbar[_ngcontent-%COMP%]   .navbar__logo[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  height: 100px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar__logo[_ngcontent-%COMP%]   .navbar__logo__img[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 200px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar__menu[_ngcontent-%COMP%] {\n  float: left;\n  width: 50%;\n  height: 100px;\n  display: flex;\n  justify-content: flex-end;\n}\n.navbar[_ngcontent-%COMP%]   .navbar__menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  height: 100px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.navbar[_ngcontent-%COMP%]   .navbar__menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 100px;\n  display: inline-block;\n  margin-right: 10px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar__menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  height: 100px;\n  color: white;\n  text-decoration: none;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.navbar[_ngcontent-%COMP%]   .navbar__menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .navbar__menu_label[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.navbar[_ngcontent-%COMP%]   .navbar__menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #FF3690;\n}\n.navbar[_ngcontent-%COMP%]   .navbar__menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]   .navbar__menu_line[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  display: block;\n  width: 100%;\n  border-bottom: 2px solid #FF3690;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUhXO0VBSVgsdUJBQUE7QUFESjtBQUVJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFFQSxhQVRPO0FBUWY7QUFFUTtFQUNJLGFBWEc7RUFZSCxZQUFBO0FBQVo7QUFHSTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBRUEsYUFuQk87RUFvQlAsYUFBQTtFQUNBLHlCQUFBO0FBRlI7QUFHSTtFQUNJLGFBdkJPO0VBd0JQLGFBQUE7RUFDQSxnQkFBQTtBQURSO0FBR1E7RUFDSSxhQTVCRztFQTZCSCxxQkFBQTtFQUNBLGtCQUFBO0FBRFo7QUFHWTtFQUNJLGFBakNEO0VBa0NDLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0FBRmhCO0FBSWdCO0VBRUMsY0FBQTtFQUNBLFdBQUE7QUFIakI7QUFNZ0I7RUFDSSxjQUFBO0FBSnBCO0FBS29CO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQUh4QiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG5hdmJhcl9oZWlnaHQ6MTAwcHg7XHJcblxyXG4ubmF2YmFye1xyXG4gICAgaGVpZ2h0OiAkbmF2YmFyX2hlaWdodDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICAubmF2YmFyX19sb2dve1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOjUwJTtcclxuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6cmVkO1xyXG4gICAgICAgIGhlaWdodDogJG5hdmJhcl9oZWlnaHQ7XHJcbiAgICAgICAgLm5hdmJhcl9fbG9nb19faW1ne1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICRuYXZiYXJfaGVpZ2h0O1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5hdmJhcl9fbWVudXtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDo1MCU7XHJcbiAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xyXG4gICAgICAgIGhlaWdodDogJG5hdmJhcl9oZWlnaHQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgdWx7XHJcbiAgICAgICAgaGVpZ2h0OiAkbmF2YmFyX2hlaWdodDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICBcclxuICAgICAgICBsaXtcclxuICAgICAgICAgICAgaGVpZ2h0OiAkbmF2YmFyX2hlaWdodDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAkbmF2YmFyX2hlaWdodDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAubmF2YmFyX19tZW51X2xhYmVse1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICYuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiNGRjM2OTA7XHJcbiAgICAgICAgICAgICAgICAgICAgLm5hdmJhcl9fbWVudV9saW5le1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTowcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGRjM2OTA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 2697:
/*!*****************************************************************!*\
  !*** ./src/app/components/user-detail/user-detail.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserDetailComponent": function() { return /* binding */ UserDetailComponent; }
/* harmony export */ });
/* harmony import */ var src_app_classes_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/classes/User */ 1336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/users.service */ 4961);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
//import { UserInterface } from '../../interfaces/user';





class UserDetailComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() { }
    saveUser() {
        if (this.user.id > 0) {
            this.userService.updateUser(this.user);
        }
        else {
            this.userService.createUser(this.user);
        }
    }
    resetForm() {
        if (this.user.id == 0) {
            this.user = new src_app_classes_User__WEBPACK_IMPORTED_MODULE_0__.User();
        }
        else {
        }
    }
}
UserDetailComponent.ɵfac = function UserDetailComponent_Factory(t) { return new (t || UserDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_1__.UserService)); };
UserDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserDetailComponent, selectors: [["app-user-detail"]], inputs: { user: "user" }, decls: 42, vars: 14, consts: [["f", "ngForm"], ["type", "hidden", "name", "id", 3, "ngModel", "ngModelChange"], [1, "form-group"], ["for", "firstname"], ["name", "firstname", "id", "firstname", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "lastname"], ["name", "lastname", "id", "lastname", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "email"], ["name", "email", "id", "email", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "fiscalcode"], ["name", "fiscalcode", "id", "fiscalcode", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "province"], ["name", "province", "id", "province", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "phone"], ["name", "phone", "id", "phone", "type", "number", 3, "ngModel", "ngModelChange"], ["for", "age"], ["name", "age", "id", "age", "type", "number", 3, "ngModel", "ngModelChange"], [1, ""], [3, "click"]], template: function UserDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserDetailComponent_Template_input_ngModelChange_7_listener($event) { return ctx.user.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserDetailComponent_Template_input_ngModelChange_11_listener($event) { return ctx.user.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserDetailComponent_Template_input_ngModelChange_15_listener($event) { return ctx.user.lastname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserDetailComponent_Template_input_ngModelChange_19_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Fiscale code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserDetailComponent_Template_input_ngModelChange_23_listener($event) { return ctx.user.fiscalcode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Province");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserDetailComponent_Template_input_ngModelChange_27_listener($event) { return ctx.user.province = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserDetailComponent_Template_input_ngModelChange_31_listener($event) { return ctx.user.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function UserDetailComponent_Template_input_ngModelChange_35_listener($event) { return ctx.user.age = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserDetailComponent_Template_button_click_37_listener() { return ctx.saveUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserDetailComponent_Template_button_click_40_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 10, ctx.user), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 12, _r0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.lastname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.fiscalcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.province);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.age);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.JsonPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 241:
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserComponent": function() { return /* binding */ UserComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/users.service */ 4961);



const _c0 = ["app-user", ""];
//import { UserInterface } from '../../interfaces/user';
class UserComponent {
    constructor(UserService) {
        this.UserService = UserService;
        this.userDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.userSelectUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        //this.users = UserService.getUser();
    }
    deleteUser(user_) {
        console.log('quando clicco sul pulsante chiamo la funzione e poi passo da padre in figlio con emit');
        //this.UserService.deleteUser(this.user)
        this.userDeleted.emit(this.user);
    }
    updateUser(user_) {
        const useryCopy = Object.assign({}, this.user);
        this.userSelectUser.emit(useryCopy);
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
UserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["tr", "app-user", ""]], inputs: { user: "user" }, outputs: { userDeleted: "onDeleteUser", userSelectUser: "onSelectUser" }, attrs: _c0, decls: 20, vars: 7, consts: [[3, "click"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserComponent_Template_button_click_15_listener() { return ctx.deleteUser(ctx.user); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserComponent_Template_button_click_18_listener() { return ctx.updateUser(ctx.user); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.lastname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.fiscalcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.province);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.age);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5996:
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": function() { return /* binding */ ContactComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
    callApi() {
        console.log('welcome');
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 2, vars: 0, consts: [[2, "color", "red"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "welcome contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 3045:
/*!*******************************************************!*\
  !*** ./src/app/pages/dashboard/dasboard.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": function() { return /* binding */ DashboardComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
    callApi() {
        console.log('welcome');
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, consts: [[2, "color", "red"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "welcome dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"] });


/***/ }),

/***/ 5245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_books_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/books.service */ 639);


class HomeComponent {
    constructor(booksService) {
        this.booksService = booksService;
        this.books = [];
    }
    ngOnInit() {
        this.getBooks();
    }
    getBooks() {
        this.booksService.getBooks()
            .subscribe((data) => {
            console.log('ritorno dei books');
            console.log(JSON.stringify(data));
            this.books = data.data;
        }, (err) => { console.log(err); });
    }
    callApi() {
        console.log('welcome');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_books_service__WEBPACK_IMPORTED_MODULE_0__.BooksService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 23, vars: 0, consts: [[1, "sliderContainer"], [1, "sliderContainer__dark", "xx-zi-0"], [1, "containerFull", "xx-zi-1"], [1, "headerContainer", "containerMaxWidth"], [1, "header"], [1, "header__left"], [1, "xx-font-24", "xx-text-white", "xx-m-0", "xx-font-robotoc", "xx-m-top-40"], [1, "xx-font-80", "xx-text-white", "xx-m-0", "xx-font-lato", "xx-m-top-15"], [1, "header__left__footer"], [1, "header__left__footer__left"], [1, "header__left__footer__contain__icon"], [1, "header__left__footer__contain__label"], [1, "xx-font-18", "xx-text-white", "xx-m-0", "xx-font-robotoc"], [1, "header__left__footer__right"], [1, "header__right"], [1, "services", "xx-h-500", "xx-bg-black"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Benvenuto su ONEXTWEB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Diamo forma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Alle tue idee");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Ottimo rapporto qualit\u00E0 prezzo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 15);
    } }, styles: [".sliderContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  height: 570px;\n  background: url(\"/assets/home/shanghai-min.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  position: relative;\n}\n.sliderContainer[_ngcontent-%COMP%]   .sliderContainer__dark[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.sliderContainer[_ngcontent-%COMP%]   .headerContainer[_ngcontent-%COMP%] {\n  position: relative;\n}\n.sliderContainer[_ngcontent-%COMP%]   .headerContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxnREFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQUVKO0FBQUU7RUFDRSxrQkFBQTtBQUVKO0FBREU7RUFDRSxrQkFBQTtBQUdKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyQ29udGFpbmVye1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OjU3MHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaG9tZS9zaGFuZ2hhaS1taW4uanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC5zbGlkZXJDb250YWluZXJfX2Rhcmt7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuICB9XHJcbiAgLmhlYWRlckNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAuaGVhZGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLmhlYWRlcl9fbGVmdHtcclxuICAgICAgLmhlYWRlcl9fbGVmdF9fZm9vdGVye1xyXG4gICAgICAgIC5oZWFkZXJfX2xlZnRfX2Zvb3Rlcl9fbGVmdHtcclxuICAgICAgICAgIC5oZWFkZXJfX2xlZnRfX2Zvb3Rlcl9fY29udGFpbl9faWNvbntcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVhZGVyX19sZWZ0X19mb290ZXJfX2NvbnRhaW5fX2xhYmVse1xyXG5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkZXJfX2xlZnRfX2Zvb3Rlcl9fcmlnaHR7XHJcbiAgICAgICAgICAuaGVhZGVyX19sZWZ0X19mb290ZXJfX2NvbnRhaW5fX2ljb257XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlYWRlcl9fbGVmdF9fZm9vdGVyX19jb250YWluX19sYWJlbHtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyX19yaWdodHtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiBcclxufVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAiXX0= */"] });


/***/ }),

/***/ 4902:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": function() { return /* binding */ LoginComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class LoginComponent {
    constructor() { }
    ngOnInit() {
        this.callApi();
    }
    callApi() {
        console.log('first method 2');
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "welcome login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9804:
/*!********************************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioComponent": function() { return /* binding */ PortfolioComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class PortfolioComponent {
    constructor() { }
    ngOnInit() {
    }
    callApi() {
        console.log('welcome');
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 2, vars: 0, consts: [[2, "color", "red"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "welcome portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJwb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"] });


/***/ }),

/***/ 7569:
/*!******************************************************!*\
  !*** ./src/app/pages/services/services.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesComponent": function() { return /* binding */ ServicesComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ServicesComponent {
    constructor() { }
    ngOnInit() {
    }
    callApi() {
        console.log('welcome');
    }
}
ServicesComponent.ɵfac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 2, vars: 0, consts: [[2, "color", "red"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "welcome services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 1524:
/*!************************************************!*\
  !*** ./src/app/pages/users/users.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": function() { return /* binding */ UsersComponent; }
/* harmony export */ });
/* harmony import */ var _classes_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/User */ 1336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/users.service */ 4961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/user/user.component */ 241);
/* harmony import */ var _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/user-detail/user-detail.component */ 2697);






function UsersComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onDeleteUser", function UsersComponent_tr_25_Template_tr_onDeleteUser_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.deleteUserParent($event); })("onSelectUser", function UsersComponent_tr_25_Template_tr_onSelectUser_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.selectUserParent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("user", user_r2);
} }
function UsersComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-user-detail", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("user", ctx_r1.userSelectedObject);
} }
class UsersComponent {
    constructor(service) {
        this.service = service;
        this.users = [];
        this.userSelected = false;
        this.userSelectedObject = new _classes_User__WEBPACK_IMPORTED_MODULE_0__.User();
        this.title = 'ums';
    }
    ngOnInit() {
        this.users = this.service.getUsers();
    }
    deleteUserParent(user) {
        console.log('DA FIGLIO A PADRE EVENTO');
        this.service.deleteUser(user);
    }
    selectUserParent(user) {
        console.log('aggiornamento');
        console.log(user);
        this.userSelectedObject = user;
        this.userSelected = true;
    }
    newUser() {
        this.userSelectedObject = new _classes_User__WEBPACK_IMPORTED_MODULE_0__.User();
        this.userSelected = true;
        console.log('crea un nuovo utente');
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_1__.UserService)); };
UsersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 27, vars: 3, consts: [[3, "click"], [1, "users"], [1, "mat-table", "cdk-table", "mat-elevation-z8"], ["app-user", "", 3, "user", "onDeleteUser", "onSelectUser", 4, "ngFor", "ngForOf"], ["class", "usersdetails", 4, "ngIf"], ["app-user", "", 3, "user", "onDeleteUser", "onSelectUser"], [1, "usersdetails"], [3, "user"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "welcome user page");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UsersComponent_Template_button_click_2_listener() { return ctx.newUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "caption");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Fiscal code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Province");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, UsersComponent_tr_25_Template, 1, 1, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, UsersComponent_div_26_Template, 2, 1, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.title, " ricevi dal padre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.userSelected);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_user_user_component__WEBPACK_IMPORTED_MODULE_2__.UserComponent, _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_3__.UserDetailComponent], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InVzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 587:
/*!******************************************************!*\
  !*** ./src/app/pages/usersold/usersold.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersoldComponent": function() { return /* binding */ UsersoldComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_usersold_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/usersold.service */ 4323);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/user/user.component */ 241);





function UsersoldComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 12);
} if (rf & 2) {
    const user_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("user", user_r12);
} }
function UsersoldComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UsersoldComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r13.position, " ");
} }
function UsersoldComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UsersoldComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r14.name, " ");
} }
function UsersoldComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UsersoldComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r15.weight, " ");
} }
function UsersoldComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Symbol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UsersoldComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r16.symbol, " ");
} }
function UsersoldComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 15);
} }
function UsersoldComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 16);
} }
function UsersoldComponent_tr_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r18.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r18.fiscalcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r18.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r18.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r18.province);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r18.age);
} }
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
class UsersoldComponent {
    constructor(service) {
        this.service = service;
        this.users = [];
        this.posts = [];
        this.title = 'ums';
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
    ngOnInit() {
        this.users = this.service.getUsers();
        this.getPost();
        //this.getBooks();
        console.log(this.posts);
        this.callApi();
    }
    getPost() {
        this.service.getPost().subscribe((data) => {
            console.log('ritorno dei post');
            console.log(JSON.stringify(data));
            this.books = data.data;
        }, (err) => { console.log(err); });
    }
    getBooks() {
        this.service.getBooks().subscribe((data) => {
            console.log('ritorno dei books');
            console.log(JSON.stringify(data));
            this.books = data.data;
        }, (err) => { console.log(err); });
    }
    callApi() {
        console.log('first method 2');
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json));
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => { response.json(); })
            .then((json) => { console.log(json); });
    }
}
UsersoldComponent.ɵfac = function UsersoldComponent_Factory(t) { return new (t || UsersoldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_usersold_service__WEBPACK_IMPORTED_MODULE_0__.UseroldService)); };
UsersoldComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UsersoldComponent, selectors: [["app-usersold"]], decls: 60, vars: 10, consts: [[1, "mat-table", "cdk-table", "mat-elevation-z8"], ["app-user", "", 3, "user", 4, "ngFor", "ngForOf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [4, "ngFor", "ngForOf"], ["app-user", "", 3, "user"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function UsersoldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "welcome user page");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "caption");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Fiscal code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Province");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, UsersoldComponent_tr_20_Template, 1, 1, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](22, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, UsersoldComponent_th_23_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, UsersoldComponent_td_24_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](25, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, UsersoldComponent_th_26_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, UsersoldComponent_td_27_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](28, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, UsersoldComponent_th_29_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, UsersoldComponent_td_30_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](31, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, UsersoldComponent_th_32_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, UsersoldComponent_td_33_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, UsersoldComponent_tr_34_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, UsersoldComponent_tr_35_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "caption");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Fiscal code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Province");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, UsersoldComponent_tr_54_Template, 15, 7, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "json ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](59, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.title, " ricevi dal padre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](59, 8, ctx.users));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _components_user_user_component__WEBPACK_IMPORTED_MODULE_1__.UserComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzb2xkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InVzZXJzb2xkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 9946:
/*!******************************************************!*\
  !*** ./src/app/pages/whoweare/whoweare.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WhoweareComponent": function() { return /* binding */ WhoweareComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class WhoweareComponent {
    constructor() { }
    ngOnInit() {
    }
    callApi() {
        console.log('welcome');
    }
}
WhoweareComponent.ɵfac = function WhoweareComponent_Factory(t) { return new (t || WhoweareComponent)(); };
WhoweareComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WhoweareComponent, selectors: [["app-whoweare"]], decls: 2, vars: 0, consts: [[2, "color", "red"]], template: function WhoweareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "welcome who we are");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndob3dlYXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6Indob3dlYXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 639:
/*!*******************************************!*\
  !*** ./src/app/services/books.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooksService": function() { return /* binding */ BooksService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class BooksService {
    constructor(http) {
        this.http = http;
        this.rootUrl = ''; //environment.rootUrl;
    }
    getBooks() {
        let data = {
            user: 'all'
        };
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.rootUrl + '/books/getAll', data, { headers: reqHeader });
    }
}
BooksService.ɵfac = function BooksService_Factory(t) { return new (t || BooksService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
BooksService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BooksService, factory: BooksService.ɵfac });


/***/ }),

/***/ 4961:
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": function() { return /* binding */ UserService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class UserService {
    constructor(http) {
        this.http = http;
        this.rootUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.rootUrl;
        this.user_ = [
            {
                id: 1,
                name: 'Hidran1',
                lastname: 'Arias1',
                email: 'hidran@gmail.com',
                fiscalcode: 'RSAHRN72M22Z444S',
                province: 'Torino',
                phone: '454545455',
                age: 43
            },
            { id: 2,
                name: 'Hidran2',
                lastname: 'Arias2',
                email: 'hidran@gmail.com',
                fiscalcode: 'RSAHRN72M22Z444S',
                province: 'Torino',
                phone: '454545455',
                age: 43
            },
            {
                id: 3,
                name: 'Hidran3',
                lastname: 'Arias3',
                email: 'hidran@gmail.com',
                fiscalcode: 'RSAHRN72M22Z444S',
                province: 'Torino',
                phone: '454545455',
                age: 43
            },
            {
                id: 4,
                name: 'Hidran4',
                lastname: 'Arias4',
                email: 'hidran@gmail.com',
                fiscalcode: 'RSAHRN72M22Z444S',
                province: 'Torino',
                phone: '454545455',
                age: 43
            }
        ];
    }
    getUsers() {
        return this.user_;
    }
    deleteUser(user) {
        const index = this.user_.indexOf(user);
        if (index > -1) {
            this.user_.splice(index, 1);
        }
    }
    updateUser(user) {
        const idx = this.user_.findIndex((v) => v.id == user.id);
        if (idx !== -1) {
            this.user_[idx] = user;
        }
    }
    createUser(user) {
        const idx = this.user_.splice(0, 0, user);
    }
    getPost() {
        const customHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http.get("https://jsonplaceholder.typicode.com/posts", { headers: customHeaders });
    }
    getBooks() {
        let data = { user: 'all' };
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.rootUrl + '/books/getAll', data, { headers: reqHeader });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4323:
/*!**********************************************!*\
  !*** ./src/app/services/usersold.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UseroldService": function() { return /* binding */ UseroldService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class UseroldService {
    constructor(http) {
        this.http = http;
        this.rootUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.rootUrl;
        this.user_ = [
            {
                name: 'Hidran1',
                lastname: 'Arias1',
                email: 'hidran@gmail.com',
                fiscalcode: 'RSAHRN72M22Z444S',
                province: 'Torino',
                phone: '454545455',
                age: 43
            },
            {
                name: 'Hidran2',
                lastname: 'Arias2',
                email: 'hidran@gmail.com',
                fiscalcode: 'RSAHRN72M22Z444S',
                province: 'Torino',
                phone: '454545455',
                age: 43
            },
            {
                name: 'Hidran3',
                lastname: 'Arias3',
                email: 'hidran@gmail.com',
                fiscalcode: 'RSAHRN72M22Z444S',
                province: 'Torino',
                phone: '454545455',
                age: 43
            },
            {
                name: 'Hidran4',
                lastname: 'Arias4',
                email: 'hidran@gmail.com',
                fiscalcode: 'RSAHRN72M22Z444S',
                province: 'Torino',
                phone: '454545455',
                age: 43
            }
        ];
    }
    getUsers() {
        return this.user_;
    }
    deleteUser(user) {
        const index = this.user_.indexOf(user);
        if (index > -1) {
            this.user_.splice(index, 1);
        }
    }
    getPost() {
        const customHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http.get("https://jsonplaceholder.typicode.com/posts", { headers: customHeaders });
    }
    getBooks() {
        let data = { user: 'all' };
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.rootUrl + '/books/getAll', data, { headers: reqHeader });
    }
}
UseroldService.ɵfac = function UseroldService_Factory(t) { return new (t || UseroldService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
UseroldService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UseroldService, factory: UseroldService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    rootUrl: 'http://localhost:8081'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2017.js.map