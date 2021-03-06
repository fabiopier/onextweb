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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _pages_whoweare_whoweare_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/whoweare/whoweare.component */ 9946);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/portfolio/portfolio.component */ 9804);
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact/contact.component */ 5996);
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/services/services.component */ 7569);
/* harmony import */ var _pages_users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/users/users.component */ 1524);
/* harmony import */ var _pages_usersold_usersold_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/usersold/usersold.component */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);










//import {CONTENT_ROUTES} from './shared/routes/content-layout.routes';
const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent },
    { path: 'whoweare', component: _pages_whoweare_whoweare_component__WEBPACK_IMPORTED_MODULE_0__.WhoweareComponent },
    { path: 'services', component: _pages_services_services_component__WEBPACK_IMPORTED_MODULE_4__.ServicesComponent },
    { path: 'portfolio', component: _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__.PortfolioComponent },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent },
    { path: 'user', component: _pages_users_users_component__WEBPACK_IMPORTED_MODULE_5__.UsersComponent },
    { path: 'old', component: _pages_usersold_usersold_component__WEBPACK_IMPORTED_MODULE_6__.UsersoldComponent },
];
/*
const appRoutes: Routes = [
  { path: '', data: { title: 'Content Views' }, children: CONTENT_ROUTES }
];*/
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes)
            //  RouterModule.forRoot(appRoutes , { useHash: false })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


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
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "router-outlet");
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slider */ 3616);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ 5937);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/table */ 4302);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/menu */ 221);
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
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["????defineInjector"]({ providers: [_services_users_service__WEBPACK_IMPORTED_MODULE_14__.UserService, _services_usersold_service__WEBPACK_IMPORTED_MODULE_15__.UseroldService, _services_books_service__WEBPACK_IMPORTED_MODULE_8__.BooksService], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__.MatSliderModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__.MatGridListModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatTableModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInputModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButtonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__.MatFormFieldModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
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
        _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCardModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInputModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_28__.MatButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__.MatMenuModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__.MatFormFieldModule] }); })();


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
HeaderComponent.??fac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HeaderComponent, selectors: [["header"]], decls: 2, vars: 0, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " header works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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
MenuComponent.??fac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MenuComponent, selectors: [["navbar"]], decls: 41, vars: 0, consts: [[1, "navbar", "containerFull"], [1, "containerMaxWidth"], [1, "navbar__logo"], ["src", "/assets/home/logo.svg", 1, "navbar__logo__img"], [1, "navbar__menu", "xx-font-lato", "xx-font-16"], ["routerLink", "home", "routerLinkActive", "active"], [1, "navbar__menu_label"], [1, "navbar__menu_line"], ["routerLink", "whoweare", "routerLinkActive", "active"], ["routerLink", "services", "routerLinkActive", "active"], ["routerLink", "portfolio", "routerLinkActive", "active"], ["routerLink", "contact", "routerLinkActive", "active"], ["routerLink", "user", "routerLinkActive", "active"], ["routerLink", "old", "routerLinkActive", "active"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Chi siamo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Servizi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Contattaci");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Old");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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
UserDetailComponent.??fac = function UserDetailComponent_Factory(t) { return new (t || UserDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_1__.UserService)); };
UserDetailComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: UserDetailComponent, selectors: [["app-user-detail"]], inputs: { user: "user" }, decls: 42, vars: 14, consts: [["f", "ngForm"], ["type", "hidden", "name", "id", 3, "ngModel", "ngModelChange"], [1, "form-group"], ["for", "firstname"], ["name", "firstname", "id", "firstname", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "lastname"], ["name", "lastname", "id", "lastname", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "email"], ["name", "email", "id", "email", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "fiscalcode"], ["name", "fiscalcode", "id", "fiscalcode", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "province"], ["name", "province", "id", "province", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "phone"], ["name", "phone", "id", "phone", "type", "number", 3, "ngModel", "ngModelChange"], ["for", "age"], ["name", "age", "id", "age", "type", "number", 3, "ngModel", "ngModelChange"], [1, ""], [3, "click"]], template: function UserDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "form", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](3, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](6, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function UserDetailComponent_Template_input_ngModelChange_7_listener($event) { return ctx.user.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function UserDetailComponent_Template_input_ngModelChange_11_listener($event) { return ctx.user.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](14, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function UserDetailComponent_Template_input_ngModelChange_15_listener($event) { return ctx.user.lastname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](18, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function UserDetailComponent_Template_input_ngModelChange_19_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22, "Fiscale code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function UserDetailComponent_Template_input_ngModelChange_23_listener($event) { return ctx.user.fiscalcode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](26, "Province");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function UserDetailComponent_Template_input_ngModelChange_27_listener($event) { return ctx.user.province = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](30, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function UserDetailComponent_Template_input_ngModelChange_31_listener($event) { return ctx.user.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](34, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("ngModelChange", function UserDetailComponent_Template_input_ngModelChange_35_listener($event) { return ctx.user.age = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function UserDetailComponent_Template_button_click_37_listener() { return ctx.saveUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](38, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function UserDetailComponent_Template_button_click_40_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](41, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](3, 10, ctx.user), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](6, 12, _r0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.user.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.user.lastname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.user.fiscalcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.user.province);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.user.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngModel", ctx.user.age);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.JsonPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });


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
UserComponent.??fac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
UserComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: UserComponent, selectors: [["tr", "app-user", ""]], inputs: { user: "user" }, outputs: { userDeleted: "onDeleteUser", userSelectUser: "onSelectUser" }, attrs: _c0, decls: 20, vars: 7, consts: [[3, "click"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function UserComponent_Template_button_click_15_listener() { return ctx.deleteUser(ctx.user); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function UserComponent_Template_button_click_18_listener() { return ctx.updateUser(ctx.user); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.user == null ? null : ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.user == null ? null : ctx.user.lastname);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.user == null ? null : ctx.user.fiscalcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.user == null ? null : ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.user == null ? null : ctx.user.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.user == null ? null : ctx.user.province);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.user == null ? null : ctx.user.age);
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
ContactComponent.??fac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 2, vars: 0, consts: [[2, "color", "red"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "welcome contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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
DashboardComponent.??fac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, consts: [[2, "color", "red"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "welcome dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ 6883);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ 5937);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 781);








class HomeComponent {
    constructor(booksService, breakpointObserver) {
        this.booksService = booksService;
        this.breakpointObserver = breakpointObserver;
        this.servicesCols = 1;
        this.books = [];
    }
    ngOnInit() {
        this.breakpointObserverLayout();
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
    breakpointObserverLayout() {
        //Breakpoints.Web
        this.breakpointObserverLarge = this.breakpointObserver.observe(['(min-width: 960px)']).subscribe((result) => {
            if (result.matches) {
                console.log('match');
                this.servicesCols = 2;
            }
        });
        this.breakpointObserverMedium = this.breakpointObserver.observe(['(max-width: 959.98px)']).subscribe((result) => {
            if (result.matches) {
                console.log('match');
                this.servicesCols = 1;
            }
        });
        this.breakpointObserverSmall = this.breakpointObserver.observe(['(max-width: 600px)']).subscribe((result) => {
            if (result.matches) {
                console.log('match');
                this.servicesCols = 1;
            }
        });
    }
    ngOnDestroy() {
        this.breakpointObserverLarge.unsubscribe();
        this.breakpointObserverMedium.unsubscribe();
        this.breakpointObserverSmall.unsubscribe();
        console.log('destroy');
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_books_service__WEBPACK_IMPORTED_MODULE_0__.BooksService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.BreakpointObserver)); };
HomeComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 170, vars: 1, consts: [[1, "sliderContainer"], [1, "sliderContainer__dark", "xx-zi-0"], [1, "containerFull", "xx-zi-1"], [1, "headerContainer", "containerMaxWidth"], [1, "header"], [1, "header__left"], [1, "xx-font-24", "xx-text-white", "xx-m-0", "xx-font-robotoc", "xx-m-top-40"], [1, "xx-font-80", "xx-text-white", "xx-m-0", "xx-font-lato", "xx-m-top-15"], [1, "header__left__footer"], [1, "header__left__footer__left"], [1, "header__left__footer__contain__line"], [1, "header__left__footer__contain__line__contain"], [1, "header__left__footer__contain__icon"], ["src", "/assets/home/Icon material-attach-money.svg", 1, "header__left__footer__contain__icon__contain"], [1, "header__left__footer__contain__label"], [1, "xx-font-18", "xx-text-white", "xx-m-0", "xx-font-lato"], [1, "header__left__footer__right"], ["src", "/assets/home/Icon material-business.svg", 1, "header__left__footer__contain__icon__contain"], [1, "header__right"], [1, "headerForm"], [1, "headerForm__head", "xx-font-lato", "xx-font-24"], [1, "xx-m-0", "xx-p-15"], ["cols", "1", "rowHeight", "4:1"], [1, "xx-wp-90"], ["matInput", "", "placeholder", "Inserisci nome e cognome", "value", ""], ["matInput", "", "placeholder", "Inserisci l'email", "value", ""], ["matInput", "", "placeholder", "Inserisci il telefono", "value", ""], ["matInput", "", "placeholder", "Inserisci il budget", "value", ""], ["matInput", "", "placeholder", "Inserisci la descrizione del progetto"], [1, "xx-button-secondary", "xx-wp-90"], [1, "services", "xx-minh-500", "xx-bg-black"], [1, "containerFull"], [1, "containerMaxWidth", "xx-p-top-20", "xx-p-bottom-20"], [3, "cols"], [1, "services__header"], [1, "services__header__subtitle"], ["src", "/assets/home/arrow_right_blue.svg", 1, "xx-m-right-15"], [1, "xx-font-robotoc", "xx-font-14", "xx-text-white"], [1, "services__header__title"], [1, "xx-font-robotoc", "xx-font-40", "xx-text-primary"], [1, "services__header__description"], [1, "xx-font-lato", "xx-font-16", "xx-text-white"], [1, "services__header__vision"], ["cols", "2", "rowHeight", "2:1"], ["src", "/assets/home/step.svg", 1, "xx-m-right-15"], ["src", "/assets/home/eye.svg", 1, "xx-m-right-15"], [1, "services__our"], [1, "text-center"], [1, "container"], [1, "row"], [1, "col-lg-4", "col-md-6", "col-sm-12"], [1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"], ["mat-button", ""], [1, "col-lg-6", "col-md-12"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "Benvenuto su ONEXTWEB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Diamo forma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, " alle tue idee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](20, "Ottimo rapporto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, " qualit\u00E0 prezzo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](27, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Ottimizzati per ogni ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, " tipologia di business");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "Raccontaci il tuo progetto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "mat-grid-list", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, "Nome e cognome:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](43, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](48, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](51, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](52, "Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](53, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](57, "Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](58, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "mat-form-field", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, "Descrizione progetto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](63, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](66, "Invia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "mat-grid-list", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](75, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, " La nostra compagnia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "h4", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](80, "La passione per il web");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](83, "Onextweb specializzata nella realizzazione di siti web dinamici e responsive tramite moderne tecniche di programmazione: HTML5 , CSS3 , PHP/Mysql, React o tramite il famoso CMS Wordpress. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](84, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](86, " Con oltre 4 anni di esperienza in ambito web siamo in grado di offrire un servizio completo per qualsiasi realt\u00E0 aziendale nascente od esistente che sia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](88, "mat-grid-list", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](90, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](93, "Mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](95, "Progettare un sito facile da gestire e che soddisfi le esigenze del cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](97, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](100, "Vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102, "Capire le esigenze del cliente per valutare la miglior soluzione a lungo termine.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](105, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](107, "Noi offriamo i seguenti servizi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](108, "h4", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](109, "Tutti i nostri Servizi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "mat-card", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](116, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](118, "Shiba Inu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](120, "Dog Breed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](121, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](124, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](126, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](127, "LIKE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](129, "SHARE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "mat-card", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](133, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](135, "Shiba Inu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](137, "Dog Breed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](138, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](141, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](144, "LIKE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](146, "SHARE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](147, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "mat-card", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](150, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](152, "Shiba Inu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](153, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](154, "Dog Breed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](155, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](158, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](159, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](160, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](161, "LIKE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](163, "SHARE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](164, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](166, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](167, "t4rt44");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](168, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](169, "464565645");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("cols", ctx.servicesCols);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__.MatGridTile, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton], styles: [".sliderContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  height: 570px;\n  background: url(\"/assets/home/shanghai-min.jpg\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  position: relative;\n}\n.sliderContainer[_ngcontent-%COMP%]   .sliderContainer__dark[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.sliderContainer[_ngcontent-%COMP%]   .headerContainer[_ngcontent-%COMP%] {\n  position: relative;\n}\n.sliderContainer[_ngcontent-%COMP%]   .headerContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n}\n.sliderContainer[_ngcontent-%COMP%]   .headerContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header__left[_ngcontent-%COMP%] {\n  width: 50%;\n  float: left;\n}\n.sliderContainer[_ngcontent-%COMP%]   .headerContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header__left[_ngcontent-%COMP%]   .header__left__footer[_ngcontent-%COMP%] {\n  margin-top: 200px;\n}\n.sliderContainer[_ngcontent-%COMP%]   .headerContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header__left[_ngcontent-%COMP%]   .header__left__footer[_ngcontent-%COMP%]   .header__left__footer__left[_ngcontent-%COMP%], .sliderContainer[_ngcontent-%COMP%]   .headerContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header__left[_ngcontent-%COMP%]   .header__left__footer[_ngcontent-%COMP%]   .header__left__footer__right[_ngcontent-%COMP%] {\n  width: 50%;\n  float: left;\n}\n.sliderContainer[_ngcontent-%COMP%]   .headerContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header__left[_ngcontent-%COMP%]   .header__left__footer[_ngcontent-%COMP%]   .header__left__footer__left[_ngcontent-%COMP%]   .header__left__footer__contain__line[_ngcontent-%COMP%]   .header__left__footer__contain__line__contain[_ngcontent-%COMP%], .sliderContainer[_ngcontent-%COMP%]   .headerContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header__left[_ngcontent-%COMP%]   .header__left__footer[_ngcontent-%COMP%]   .header__left__footer__right[_ngcontent-%COMP%]   .header__left__footer__contain__line[_ngcontent-%COMP%]   .header__left__footer__contain__line__contain[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 94%;\n  margin-left: 3%;\n  border-top: 2px solid white;\n}\n.sliderContainer[_ngcontent-%COMP%]   .headerContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header__left[_ngcontent-%COMP%]   .header__left__footer[_ngcontent-%COMP%]   .header__left__footer__left[_ngcontent-%COMP%]   .header__left__footer__contain__icon[_ngcontent-%COMP%], .sliderContainer[_ngcontent-%COMP%]   .headerContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header__left[_ngcontent-%COMP%]   .header__left__footer[_ngcontent-%COMP%]   .header__left__footer__right[_ngcontent-%COMP%]   .header__left__footer__contain__icon[_ngcontent-%COMP%] {\n  float: left;\n  width: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.sliderContainer[_ngcontent-%COMP%]   .headerContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header__left[_ngcontent-%COMP%]   .header__left__footer[_ngcontent-%COMP%]   .header__left__footer__left[_ngcontent-%COMP%]   .header__left__footer__contain__icon[_ngcontent-%COMP%]   .header__left__footer__contain__icon__contain[_ngcontent-%COMP%], .sliderContainer[_ngcontent-%COMP%]   .headerContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header__left[_ngcontent-%COMP%]   .header__left__footer[_ngcontent-%COMP%]   .header__left__footer__right[_ngcontent-%COMP%]   .header__left__footer__contain__icon[_ngcontent-%COMP%]   .header__left__footer__contain__icon__contain[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.sliderContainer[_ngcontent-%COMP%]   .headerContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header__left[_ngcontent-%COMP%]   .header__left__footer[_ngcontent-%COMP%]   .header__left__footer__left[_ngcontent-%COMP%]   .header__left__footer__contain__label[_ngcontent-%COMP%], .sliderContainer[_ngcontent-%COMP%]   .headerContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header__left[_ngcontent-%COMP%]   .header__left__footer[_ngcontent-%COMP%]   .header__left__footer__right[_ngcontent-%COMP%]   .header__left__footer__contain__label[_ngcontent-%COMP%] {\n  width: calc(100% - 50px);\n  float: left;\n}\n.sliderContainer[_ngcontent-%COMP%]   .headerContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header__right[_ngcontent-%COMP%] {\n  width: 50%;\n  float: left;\n  display: flex;\n  justify-content: center;\n}\n.sliderContainer[_ngcontent-%COMP%]   .headerContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header__right[_ngcontent-%COMP%]   .headerForm[_ngcontent-%COMP%] {\n  top: 300px;\n  position: absolute;\n  height: 600px;\n  width: 350px;\n  background-color: white;\n  border-radius: 10px;\n}\n.sliderContainer[_ngcontent-%COMP%]   .headerContainer[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .header__right[_ngcontent-%COMP%]   .headerForm[_ngcontent-%COMP%]   .headerForm__head[_ngcontent-%COMP%] {\n  background-color: #005C8E;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxnREFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQUVKO0FBQUU7RUFDQyxrQkFBQTtBQUVIO0FBREU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFHSjtBQUZJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFJTjtBQUhNO0VBQ0UsaUJBQUE7QUFLUjtBQUpRO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFNVjtBQUpZO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0QsMkJBQUE7QUFNYjtBQUhVO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUtaO0FBSlk7RUFDTSxnQkFBQTtBQU1sQjtBQUZVO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0FBSVo7QUFHSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBRE47QUFFTTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFSO0FBRVE7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FBQVYiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbGlkZXJDb250YWluZXJ7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6NTcwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9ob21lL3NoYW5naGFpLW1pbi5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLnNsaWRlckNvbnRhaW5lcl9fZGFya3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG4gIH1cclxuICAuaGVhZGVyQ29udGFpbmVye1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLmhlYWRlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLmhlYWRlcl9fbGVmdHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIC5oZWFkZXJfX2xlZnRfX2Zvb3RlcntcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICAgICAgICAuaGVhZGVyX19sZWZ0X19mb290ZXJfX2xlZnQsIC5oZWFkZXJfX2xlZnRfX2Zvb3Rlcl9fcmlnaHR7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAuaGVhZGVyX19sZWZ0X19mb290ZXJfX2NvbnRhaW5fX2xpbmV7XHJcbiAgICAgICAgICAgIC5oZWFkZXJfX2xlZnRfX2Zvb3Rlcl9fY29udGFpbl9fbGluZV9fY29udGFpbntcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDk0JTtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5oZWFkZXJfX2xlZnRfX2Zvb3Rlcl9fY29udGFpbl9faWNvbntcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgLmhlYWRlcl9fbGVmdF9fZm9vdGVyX19jb250YWluX19pY29uX19jb250YWlue1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlYWRlcl9fbGVmdF9fZm9vdGVyX19jb250YWluX19sYWJlbHtcclxuICAgICAgICAgICAgd2lkdGg6IENhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdFxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyX19yaWdodHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgIC5oZWFkZXJGb3Jte1xyXG4gICAgICAgIHRvcDozMDBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgIFxyXG4gICAgICAgIC5oZWFkZXJGb3JtX19oZWFke1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNUM4RTtcclxuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6NXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NXB4O1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4gXHJcbn1cclxuXHJcbi5zZXJ2aWNlc3tcclxuICAuc2VydmljZXNfX2hlYWRlcntcclxuICB9XHJcbn1cclxuXHJcbiAgICAgICAgICAgICJdfQ== */"] });


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
LoginComponent.??fac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoginComponent, selectors: [["login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "welcome login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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
PortfolioComponent.??fac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 2, vars: 0, consts: [[2, "color", "red"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "welcome portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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
ServicesComponent.??fac = function ServicesComponent_Factory(t) { return new (t || ServicesComponent)(); };
ServicesComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ServicesComponent, selectors: [["app-services"]], decls: 2, vars: 0, consts: [[2, "color", "red"]], template: function ServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "welcome services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("onDeleteUser", function UsersComponent_tr_25_Template_tr_onDeleteUser_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r3.deleteUserParent($event); })("onSelectUser", function UsersComponent_tr_25_Template_tr_onSelectUser_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["????restoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"](); return ctx_r5.selectUserParent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("user", user_r2);
} }
function UsersComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????element"](1, "app-user-detail", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("user", ctx_r1.userSelectedObject);
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
UsersComponent.??fac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????directiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_1__.UserService)); };
UsersComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineComponent"]({ type: UsersComponent, selectors: [["app-users"]], decls: 27, vars: 3, consts: [[3, "click"], [1, "users"], [1, "mat-table", "cdk-table", "mat-elevation-z8"], ["app-user", "", 3, "user", "onDeleteUser", "onSelectUser", 4, "ngFor", "ngForOf"], ["class", "usersdetails", 4, "ngIf"], ["app-user", "", 3, "user", "onDeleteUser", "onSelectUser"], [1, "usersdetails"], [3, "user"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](1, "welcome user page");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????listener"]("click", function UsersComponent_Template_button_click_2_listener() { return ctx.newUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](3, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](5, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](6, "caption");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](12, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](14, "Fiscal code");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](16, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](18, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](20, "Province");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](22, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????text"](24, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](25, UsersComponent_tr_25_Template, 1, 1, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????template"](26, UsersComponent_div_26_Template, 2, 1, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????textInterpolate1"]("", ctx.title, " ricevi dal padre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["????property"]("ngIf", ctx.userSelected);
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
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/user/user.component */ 241);








function UsersoldComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "tr", 18);
} if (rf & 2) {
    const user_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("user", user_r12);
} }
function UsersoldComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function UsersoldComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", element_r13.position, " ");
} }
function UsersoldComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function UsersoldComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", element_r14.name, " ");
} }
function UsersoldComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Weight ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function UsersoldComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", element_r15.weight, " ");
} }
function UsersoldComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Symbol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function UsersoldComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", element_r16.symbol, " ");
} }
function UsersoldComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "tr", 21);
} }
function UsersoldComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "tr", 22);
} }
function UsersoldComponent_tr_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](item_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](item_r18.lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](item_r18.fiscalcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](item_r18.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](item_r18.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](item_r18.province);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](item_r18.age);
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
UsersoldComponent.??fac = function UsersoldComponent_Factory(t) { return new (t || UsersoldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_services_usersold_service__WEBPACK_IMPORTED_MODULE_0__.UseroldService)); };
UsersoldComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: UsersoldComponent, selectors: [["app-usersold"]], decls: 77, vars: 10, consts: [[1, "mat-table", "cdk-table", "mat-elevation-z8"], ["app-user", "", 3, "user", 4, "ngFor", "ngForOf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [4, "ngFor", "ngForOf"], ["appearance", "fill"], ["matInput", ""], [1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Ex. Pizza", "value", "Sushi"], ["matInput", "", "placeholder", "Ex. It makes me feel..."], ["app-user", "", 3, "user"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function UsersoldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "welcome user page");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "caption");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, "Fiscal code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](13, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](15, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17, "Province");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](20, UsersoldComponent_tr_20_Template, 1, 1, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](22, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](23, UsersoldComponent_th_23_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](24, UsersoldComponent_td_24_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](25, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](26, UsersoldComponent_th_26_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](27, UsersoldComponent_td_27_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](28, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](29, UsersoldComponent_th_29_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](30, UsersoldComponent_td_30_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](31, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](32, UsersoldComponent_th_32_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](33, UsersoldComponent_td_33_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](34, UsersoldComponent_tr_34_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](35, UsersoldComponent_tr_35_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "caption");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](41, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](43, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](45, "Fiscal code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](47, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](49, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](51, "Province");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](53, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](54, UsersoldComponent_tr_54_Template, 15, 7, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](55, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](56, "json ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](59, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](60, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](61, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](62, "Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](63, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](65, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](66, "Textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](67, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](68, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](69, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](71, "Favorite food");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](72, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](73, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](74, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](75, "Leave a comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](76, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", ctx.title, " ricevi dal padre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind1"](59, 8, ctx.users));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _components_user_user_component__WEBPACK_IMPORTED_MODULE_1__.UserComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzb2xkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwiZmlsZSI6InVzZXJzb2xkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"] });


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
WhoweareComponent.??fac = function WhoweareComponent_Factory(t) { return new (t || WhoweareComponent)(); };
WhoweareComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: WhoweareComponent, selectors: [["app-whoweare"]], decls: 2, vars: 0, consts: [[2, "color", "red"]], template: function WhoweareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "welcome who we are");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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
BooksService.??fac = function BooksService_Factory(t) { return new (t || BooksService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
BooksService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: BooksService, factory: BooksService.??fac });


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
UserService.??fac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
UserService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: UserService, factory: UserService.??fac, providedIn: 'root' });


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
UseroldService.??fac = function UseroldService_Factory(t) { return new (t || UseroldService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
UseroldService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: UseroldService, factory: UseroldService.??fac, providedIn: 'root' });


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