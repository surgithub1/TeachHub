webpackJsonp([1,4],Array(36).concat([
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(location) {
        this.location = location;
    }
    HomeComponent.prototype.ngOnInit = function () {
        $.getScript('../../../assets/js/material-dashboard.js');
        $.getScript('../../../assets/js/initMenu.js');
    };
    HomeComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(195),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* Location */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
var ROUTES = [
    { path: 'dashboard', title: 'Home', icon: 'dashboard', class: '' },
    { path: 'user-profile', title: 'Requests', icon: 'person', class: '' },
    { path: 'table-list', title: 'User Profile', icon: 'person', class: '' },
];
//# sourceMappingURL=sidebar-routes.config.js.map

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        __webpack_require__(251)();
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(194),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconsComponent = (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    return IconsComponent;
}());
IconsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-icons',
        template: __webpack_require__(196),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [])
], IconsComponent);

//# sourceMappingURL=icons.component.js.map

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapsComponent = (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [{ "featureType": "water", "stylers": [{ "saturation": 43 }, { "lightness": -11 }, { "hue": "#0088ff" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "hue": "#ff0000" }, { "saturation": -100 }, { "lightness": 99 }] }, { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "color": "#808080" }, { "lightness": 54 }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#ece2d9" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#ccdca1" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#767676" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "poi", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#b8cb93" }] }, { "featureType": "poi.park", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.sports_complex", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.medical", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.business", "stylers": [{ "visibility": "simplified" }] }]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);
    };
    return MapsComponent;
}());
MapsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-maps',
        template: __webpack_require__(197),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [])
], MapsComponent);

//# sourceMappingURL=maps.component.js.map

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationsComponent = (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    return NotificationsComponent;
}());
NotificationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-notifications',
        template: __webpack_require__(198),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [])
], NotificationsComponent);

//# sourceMappingURL=notifications.component.js.map

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableListComponent = (function () {
    function TableListComponent() {
    }
    TableListComponent.prototype.ngOnInit = function () {
    };
    return TableListComponent;
}());
TableListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-table-list',
        template: __webpack_require__(199),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [])
], TableListComponent);

//# sourceMappingURL=table-list.component.js.map

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypographyComponent = (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    return TypographyComponent;
}());
TypographyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-typography',
        template: __webpack_require__(200),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [])
], TypographyComponent);

//# sourceMappingURL=typography.component.js.map

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpgradeComponent = (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    return UpgradeComponent;
}());
UpgradeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-upgrade',
        template: __webpack_require__(201),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [])
], UpgradeComponent);

//# sourceMappingURL=upgrade.component.js.map

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProfileComponent = (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-user-profile',
        template: __webpack_require__(202),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [])
], UserProfileComponent);

//# sourceMappingURL=user-profile.component.js.map

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(formBuilder, route, router
        //private authenticationService: AuthenticationService,
        //  private alertService: AlertService
    ) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]
        });
        // reset login status
        //this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.router.navigate(['/home/dashboard']);
        // this.authenticationService.login(this.f.username.value, this.f.password.value)
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(203),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignupComponent = (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__(205),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [])
], SignupComponent);

//# sourceMappingURL=signup.component.js.map

/***/ }),
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 100;


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(119);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(location, router) {
        this.location = location;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.location.path() == '' || this.location.path() == '/home') {
            this.router.navigate(['/login']);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(189),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pages_module__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__pages_pages_module__["a" /* PagesModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home_component__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup_component__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { NotFoundComponent } from './pages/not-found/not-found.component';
var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup_component__["a" /* SignupComponent */] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* HashLocationStrategy */] }
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]
        ],
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loader_loader_component__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__loader_loader_component__["a" /* LoaderComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__loader_loader_component__["a" /* LoaderComponent */]
        ]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(190),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    return LoaderComponent;
}());
LoaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-loader',
        template: __webpack_require__(191),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [])
], LoaderComponent);

//# sourceMappingURL=loader.component.js.map

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_routes_config__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(location, router, activateRoute) {
        this.router = router;
        this.activateRoute = activateRoute;
        this.location = location;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_routes_config__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.signOff = function () {
        console.log("signing off...");
        this.router.navigate(['/home/dashboard']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(192),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* Location */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_routes_config__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        $.getScript('../../assets/js/sidebar-moving-tab.js');
        this.menuItems = __WEBPACK_IMPORTED_MODULE_1__sidebar_routes_config__["a" /* ROUTES */].filter(function (menuItem) { return menuItem; });
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__(193),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_routing__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_component__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_profile_user_profile_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__table_list_table_list_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__typography_typography_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__icons_icons_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__maps_maps_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__notifications_notifications_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__upgrade_upgrade_component__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_4__home_routing__["a" /* HomeRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_8__table_list_table_list_component__["a" /* TableListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__typography_typography_component__["a" /* TypographyComponent */],
            __WEBPACK_IMPORTED_MODULE_10__icons_icons_component__["a" /* IconsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__maps_maps_component__["a" /* MapsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__notifications_notifications_component__["a" /* NotificationsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__upgrade_upgrade_component__["a" /* UpgradeComponent */],
        ]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_profile_user_profile_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__table_list_table_list_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__typography_typography_component__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__icons_icons_component__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__maps_maps_component__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__notifications_notifications_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__upgrade_upgrade_component__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */],
        children: [
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'user-profile', component: __WEBPACK_IMPORTED_MODULE_6__user_profile_user_profile_component__["a" /* UserProfileComponent */] },
            { path: 'table-list', component: __WEBPACK_IMPORTED_MODULE_7__table_list_table_list_component__["a" /* TableListComponent */] },
            { path: 'typography', component: __WEBPACK_IMPORTED_MODULE_8__typography_typography_component__["a" /* TypographyComponent */] },
            { path: 'icons', component: __WEBPACK_IMPORTED_MODULE_9__icons_icons_component__["a" /* IconsComponent */] },
            { path: 'maps', component: __WEBPACK_IMPORTED_MODULE_10__maps_maps_component__["a" /* MapsComponent */] },
            { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_11__notifications_notifications_component__["a" /* NotificationsComponent */] },
            { path: 'upgrade', component: __WEBPACK_IMPORTED_MODULE_12__upgrade_upgrade_component__["a" /* UpgradeComponent */] },
        ]
    }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* HashLocationStrategy */] }
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]
        ],
    })
], HomeRoutingModule);

//# sourceMappingURL=home.routing.js.map

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-not-found',
        template: __webpack_require__(204),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_module__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__["a" /* NotFoundComponent */],
        ]
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 189 */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div class=\"container-fluid\">\r\n        <nav class=\"pull-left\">\r\n            <ul>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Home\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Company\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                        Portfolio\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\">\r\n                       Blog\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <p class=\"copyright pull-right\">\r\n            &copy; {{test | date: 'yyyy'}} <a href=\"http://www.creative-tim.com\">Teach Hub</a>, made with love for a better web\r\n        </p>\r\n    </div>\r\n</footer>\r\n"

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  loader works!\r\n</p>\r\n"

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\r\n    <div class=\"container-fluid\">\r\n        <!-- <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\r\n        </div> -->\r\n        <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <!-- <li>\r\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"material-icons\">dashboard</i>\r\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\r\n                    </a>\r\n                </li> -->\r\n                <!-- <li class=\"dropdown\">\r\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                        <i class=\"material-icons\">notifications</i>\r\n                        <span class=\"notification\">5</span>\r\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a href=\"#\">Mike John responded to your email</a></li>\r\n                        <li><a href=\"#\">You have 5 new tasks</a></li>\r\n                        <li><a href=\"#\">You're now friend with Andrew</a></li>\r\n                        <li><a href=\"#\">Another Notification</a></li>\r\n                        <li><a href=\"#\">Another One</a></li>\r\n                    </ul>\r\n                </li> -->\r\n                <li>\r\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                       <i class=\"material-icons\">person</i>\r\n                       <p class=\"hidden-lg hidden-md\">Profile</p>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                            <li><a href=\"#\">Profile</a></li>\r\n                            <li><a  routerLink=\"/login\">Sign Off</a></li>\r\n                        </ul>                    \r\n                </li>\r\n            </ul>\r\n\r\n            <!-- <form class=\"navbar-form navbar-right\" role=\"search\">\r\n                <div class=\"form-group form-black is-empty\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                    <span class=\"material-input\"></span>\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\r\n                </button>\r\n            </form> -->\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\r\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text\">\r\n        <div class=\"logo-img\">\r\n            <img src=\"../TeachHub/assets/img/angular2-logo-red.png\"/>\r\n        </div>\r\n        Teach Hub\r\n    </a>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n    <div class=\"nav-container\">\r\n        <ul class=\"nav\">\r\n            <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\r\n                <a  [routerLink]=\"[menuItem.path]\">\r\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\r\n                    <p>{{menuItem.title}}</p>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <form class=\"navbar-form\" role=\"search\" style=\"margin-left:200px\">\r\n                    <div class=\"form-group form-black is-empty\">\r\n                        <input type=\"text\" class=\"form-control\" style=\"width:350px\" placeholder=\"Search\">\r\n                        <span class=\"material-input\"></span>\r\n                    </div>\r\n                    <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\r\n                        <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\r\n                    </button>\r\n                </form>\r\n\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <!-- <div class=\"card\">\r\n                        <div class=\"card-header\" data-background-color=\"red\">\r\n                            <h4 class=\"title\">Edit Profile</h4>\r\n                            <p class=\"category\">Complete your profile</p>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <form>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Company (disabled)</label>\r\n                                            <input type=\"text\" class=\"form-control\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Username</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Email address</label>\r\n                                            <input type=\"email\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Fist Name</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Last Name</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Adress</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">City</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Country</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Postal Code</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>About Me</label>\r\n                                            <div class=\"form-group form-black label-floating is-empty\">\r\n                                                <label class=\"control-label\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\r\n                                                <textarea class=\"form-control\" rows=\"5\"></textarea>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\r\n                                <div class=\"clearfix\"></div>\r\n                            </form>\r\n                        </div>\r\n                    </div> -->\r\n                    <div class=\"card card-profile\">\r\n                        <div class=\"card-avatar\">\r\n                            <a href=\"#pablo\">\r\n                                <img class=\"img\" src=\"../TeachHub/assets/img/faces/marc.jpg\" />\r\n                            </a>\r\n                        </div>\r\n\r\n                        <div class=\"content\">\r\n                            <h6 class=\"category text-gray\">CEO / Co-Founder</h6>\r\n                            <h4 class=\"card-title\">Narendra Gupta</h4>\r\n                            <p class=\"card-content\">\r\n                                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\r\n                            </p>\r\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">Request For Help</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card card-profile\">\r\n                        <div class=\"card-avatar\">\r\n                            <a href=\"#pablo\">\r\n                                <img class=\"img\" src=\"../TeachHub/assets/img/faces/marc.jpg\" />\r\n                            </a>\r\n                        </div>\r\n\r\n                        <div class=\"content\">\r\n                            <h6 class=\"category text-gray\">CEO / Co-Founder</h6>\r\n                            <h4 class=\"card-title\">Surendra Gupta</h4>\r\n                            <p class=\"card-content\">\r\n                                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\r\n                            </p>\r\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">Request For Help</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card card-profile\">\r\n                        <div class=\"card-avatar\">\r\n                            <a href=\"#pablo\">\r\n                                <img class=\"img\" src=\"../TeachHub/assets/img/faces/marc.jpg\" />\r\n                            </a>\r\n                        </div>\r\n\r\n                        <div class=\"content\">\r\n                            <h6 class=\"category text-gray\">CEO / Co-Founder</h6>\r\n                            <h4 class=\"card-title\">Sangeet Devi</h4>\r\n                            <p class=\"card-content\">\r\n                                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\r\n                            </p>\r\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">Request For Help</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <!-- <div class=\"card\">\r\n                        <div class=\"card-header\" data-background-color=\"red\">\r\n                            <h4 class=\"title\">Edit Profile</h4>\r\n                            <p class=\"category\">Complete your profile</p>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <form>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Company (disabled)</label>\r\n                                            <input type=\"text\" class=\"form-control\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Username</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Email address</label>\r\n                                            <input type=\"email\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Fist Name</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Last Name</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Adress</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">City</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Country</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Postal Code</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>About Me</label>\r\n                                            <div class=\"form-group form-black label-floating is-empty\">\r\n                                                <label class=\"control-label\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\r\n                                                <textarea class=\"form-control\" rows=\"5\"></textarea>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\r\n                                <div class=\"clearfix\"></div>\r\n                            </form>\r\n                        </div>\r\n                    </div> -->\r\n                    <div class=\"card card-profile\">\r\n                        <div class=\"card-avatar\">\r\n                            <a href=\"#pablo\">\r\n                                <img class=\"img\" src=\"../TeachHub/assets/img/faces/marc.jpg\" />\r\n                            </a>\r\n                        </div>\r\n\r\n                        <div class=\"content\">\r\n                            <h6 class=\"category text-gray\">CEO / Co-Founder</h6>\r\n                            <h4 class=\"card-title\">Narendra Gupta</h4>\r\n                            <p class=\"card-content\">\r\n                                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\r\n                            </p>\r\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">Request For Help</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card card-profile\">\r\n                        <div class=\"card-avatar\">\r\n                            <a href=\"#pablo\">\r\n                                <img class=\"img\" src=\"../TeachHub/assets/img/faces/marc.jpg\" />\r\n                            </a>\r\n                        </div>\r\n\r\n                        <div class=\"content\">\r\n                            <h6 class=\"category text-gray\">CEO / Co-Founder</h6>\r\n                            <h4 class=\"card-title\">Surendra Gupta</h4>\r\n                            <p class=\"card-content\">\r\n                                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\r\n                            </p>\r\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">Request For Help</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card card-profile\">\r\n                        <div class=\"card-avatar\">\r\n                            <a href=\"#pablo\">\r\n                                <img class=\"img\" src=\"../TeachHub/assets/img/faces/marc.jpg\" />\r\n                            </a>\r\n                        </div>\r\n\r\n                        <div class=\"content\">\r\n                            <h6 class=\"category text-gray\">CEO / Co-Founder</h6>\r\n                            <h4 class=\"card-title\">Sangeet Devi</h4>\r\n                            <p class=\"card-content\">\r\n                                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\r\n                            </p>\r\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">Request For Help</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <!-- <div class=\"card\">\r\n                        <div class=\"card-header\" data-background-color=\"red\">\r\n                            <h4 class=\"title\">Edit Profile</h4>\r\n                            <p class=\"category\">Complete your profile</p>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <form>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Company (disabled)</label>\r\n                                            <input type=\"text\" class=\"form-control\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Username</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Email address</label>\r\n                                            <input type=\"email\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Fist Name</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Last Name</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Adress</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">City</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Country</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Postal Code</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>About Me</label>\r\n                                            <div class=\"form-group form-black label-floating is-empty\">\r\n                                                <label class=\"control-label\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\r\n                                                <textarea class=\"form-control\" rows=\"5\"></textarea>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\r\n                                <div class=\"clearfix\"></div>\r\n                            </form>\r\n                        </div>\r\n                    </div> -->\r\n                    <div class=\"card card-profile\">\r\n                        <div class=\"card-avatar\">\r\n                            <a href=\"#pablo\">\r\n                                <img class=\"img\" src=\"../TeachHub/assets/img/faces/marc.jpg\" />\r\n                            </a>\r\n                        </div>\r\n\r\n                        <div class=\"content\">\r\n                            <h6 class=\"category text-gray\">CEO / Co-Founder</h6>\r\n                            <h4 class=\"card-title\">Narendra Gupta</h4>\r\n                            <p class=\"card-content\">\r\n                                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\r\n                            </p>\r\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">Request For Help</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card card-profile\">\r\n                        <div class=\"card-avatar\">\r\n                            <a href=\"#pablo\">\r\n                                <img class=\"img\" src=\"../TeachHub/assets/img/faces/marc.jpg\" />\r\n                            </a>\r\n                        </div>\r\n\r\n                        <div class=\"content\">\r\n                            <h6 class=\"category text-gray\">CEO / Co-Founder</h6>\r\n                            <h4 class=\"card-title\">Surendra Gupta</h4>\r\n                            <p class=\"card-content\">\r\n                                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\r\n                            </p>\r\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">Request For Help</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card card-profile\">\r\n                        <div class=\"card-avatar\">\r\n                            <a href=\"#pablo\">\r\n                                <img class=\"img\" src=\"../TeachHub/assets/img/faces/marc.jpg\" />\r\n                            </a>\r\n                        </div>\r\n\r\n                        <div class=\"content\">\r\n                            <h6 class=\"category text-gray\">CEO / Co-Founder</h6>\r\n                            <h4 class=\"card-title\">Sangeet Devi</h4>\r\n                            <p class=\"card-content\">\r\n                                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\r\n                            </p>\r\n                            <a href=\"#pablo\" class=\"btn btn-danger btn-round\">Request For Help</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        </div>\r\n"

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-color='red' data-image=\"\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\" style=\"background-image: url(../assets/img/sidebar-4.jpg)\"></div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <app-navbar></app-navbar>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"isMaps('/maps')\">\r\n            <app-footer></app-footer>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div class=\"card card-plain\">\r\n                    <div class=\"card-header\" data-background-color=\"red\">\r\n                        <h4 class=\"title\">Material Design Icons</h4>\r\n                        <p class=\"category\">Handcrafted by our friends from <a target=\"_blank\" href=\"https://design.google.com/icons/\">Google</a></p>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <div class=\"iframe-container hidden-sm hidden-xs\">\r\n                            <iframe src=\"https://design.google.com/icons/\">\r\n                                <p>Your browser does not support iframes.</p>\r\n                            </iframe>\r\n                        </div>\r\n                        <div class=\"col-md-6 hidden-lg hidden-md text-center\">\r\n                            <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the  <a href=\"https://design.google.com/icons/\" target=\"_blank\">Material Icons</a></h5>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\r\n"

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"card\">\r\n            <div class=\"card-header\" data-background-color=\"red\">\r\n                <h4 class=\"title\">Notifications</h4>\r\n                <p class=\"category\">Handcrafted by our friend <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a></p>\r\n            </div>\r\n            <div class=\"card-content\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <h5>Notifications Style</h5>\r\n                        <div class=\"alert alert-info\">\r\n                            <span>This is a plain notification</span>\r\n                        </div>\r\n                        <div class=\"alert alert-info\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span>This is a notification with close button.</span>\r\n                        </div>\r\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <i data-notify=\"icon\" class=\"material-icons\">add_alert</i>\r\n                            <span data-notify=\"message\">This is a notification with close button and icon.</span>\r\n                        </div>\r\n                        <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <i data-notify=\"icon\" class=\"material-icons\">add_alert</i>\r\n                            <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <h5>Notification states</h5>\r\n                        <div class=\"alert alert-info\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Info - </b> This is a regular notification made with \".alert-info\"</span>\r\n                        </div>\r\n                        <div class=\"alert alert-success\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Success - </b> This is a regular notification made with \".alert-success\"</span>\r\n                        </div>\r\n                        <div class=\"alert alert-warning\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\r\n                        </div>\r\n                        <div class=\"alert alert-danger\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\r\n                        </div>\r\n                        <div class=\"alert alert-primary\">\r\n                            <button type=\"button\" aria-hidden=\"true\" class=\"close\">×</button>\r\n                            <span><b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <br>\r\n                <br>\r\n\r\n                <div class=\"places-buttons\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6 col-md-offset-3 text-center\">\r\n                            <h5>Notifications Places\r\n                                <p class=\"category\">Click to view notifications</p>\r\n                            </h5>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-8 col-md-offset-2\">\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" onclick=\"demo.showNotification('top','left')\">Top Left</button>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" onclick=\"demo.showNotification('top','center')\">Top Center</button>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" onclick=\"demo.showNotification('top','right')\">Top Right</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-8 col-md-offset-2\">\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" onclick=\"demo.showNotification('bottom','left')\">Bottom Left</button>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" onclick=\"demo.showNotification('bottom','center')\">Bottom Center</button>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                <button class=\"btn btn-danger btn-block\" onclick=\"demo.showNotification('bottom','right')\">Bottom Right</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <div class=\"card\">\r\n                        <div class=\"card-header\" data-background-color=\"red\">\r\n                            <h4 class=\"title\">Edit Profile</h4>\r\n                            <p class=\"category\">Complete your profile</p>\r\n                        </div>\r\n                        <div class=\"card-content\">\r\n                            <form>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-5\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Company (disabled)</label>\r\n                                            <input type=\"text\" class=\"form-control\" disabled>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-3\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Username</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Email address</label>\r\n                                            <input type=\"email\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Fist Name</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Last Name</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Adress</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">City</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Country</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-4\">\r\n                                        <div class=\"form-group form-black label-floating is-empty\">\r\n                                            <label class=\"control-label\">Postal Code</label>\r\n                                            <input type=\"text\" class=\"form-control\" >\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"form-group\">\r\n                                            <label>About Me</label>\r\n                                            <div class=\"form-group form-black label-floating is-empty\">\r\n                                                <label class=\"control-label\"> Describe about yourself.</label>\r\n                                                <textarea class=\"form-control\" rows=\"5\"></textarea>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\r\n                                <div class=\"clearfix\"></div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"card card-profile\">\r\n                        <div class=\"card-avatar\">\r\n                            <a href=\"#pablo\">\r\n                                <img class=\"img\" src=\"../TeachHub/assets/img/faces/marc.jpg\" />\r\n                            </a>\r\n                        </div>\r\n\r\n                        <div class=\"content\">\r\n                            <h6 class=\"category text-gray\">CEO / Co-Founder</h6>\r\n                            <h4 class=\"card-title\">Surendra Gupta</h4>\r\n                            <p class=\"card-content\">\r\n                                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n        </div>\r\n"

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\" data-background-color=\"red\">\r\n                    <h4 class=\"title\">Material Dashboard Heading</h4>\r\n                    <p class=\"category\">Created using Roboto Font Family</p>\r\n                </div>\r\n                <div class=\"card-content\">\r\n                    <div id=\"typography\">\r\n                        <div class=\"title\">\r\n                            <h2>Typography</h2>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"tim-typo\">\r\n                                <h1><span class=\"tim-note\">Header 1</span>The Life of Material Dashboard </h1>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <h2><span class=\"tim-note\">Header 2</span>The life of Material Dashboard </h2>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <h3><span class=\"tim-note\">Header 3</span>The life of Material Dashboard </h3>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <h4><span class=\"tim-note\">Header 4</span>The life of Material Dashboard </h4>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <h5><span class=\"tim-note\">Header 5</span>The life of Material Dashboard </h5>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <h6><span class=\"tim-note\">Header 6</span>The life of Material Dashboard </h6>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <p><span class=\"tim-note\">Paragraph</span>\r\n                                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <span class=\"tim-note\">Quote</span>\r\n                                <blockquote>\r\n                                 <p>\r\n                                 I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\r\n                                 </p>\r\n                                 <small>\r\n                                 Kanye West, Musician\r\n                                 </small>\r\n                                </blockquote>\r\n                            </div>\r\n\r\n                            <div class=\"tim-typo\">\r\n                                <span class=\"tim-note\">Muted Text</span>\r\n                                <p class=\"text-muted\">\r\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <span class=\"tim-note\">Primary Text</span>\r\n                                <p class=\"text-primary\">\r\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <span class=\"tim-note\">Info Text</span>\r\n                                <p class=\"text-info\">\r\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <span class=\"tim-note\">Success Text</span>\r\n                                <p class=\"text-success\">\r\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <span class=\"tim-note\">Warning Text</span>\r\n                                <p class=\"text-warning\">\r\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <span class=\"tim-note\">Danger Text</span>\r\n                                <p class=\"text-danger\">\r\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>\r\n                            </div>\r\n                            <div class=\"tim-typo\">\r\n                                <h2><span class=\"tim-note\">Small Tag</span>\r\n                                    Header with small subtitle <br>\r\n                                    <small>Use \"small\" tag for the headers</small>\r\n                                </h2>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n"

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 col-md-offset-2\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header text-center\" data-background-color=\"red\">\r\n                        <h4 class=\"title\">Material Dashboard PRO</h4>\r\n                        <p class=\"category\">Are you looking for more components? Please check our Premium Version of Material Dashboard.</p>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <div class=\"table-responsive table-upgrade\">\r\n                            <table class=\"table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th></th>\r\n                                        <th class=\"text-center\">Free</th>\r\n                                        <th class=\"text-center\">PRO</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>Components</td>\r\n                                        <td class=\"text-center\">60</td>\r\n                                        <td class=\"text-center\">200</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Plugins</td>\r\n                                        <td class=\"text-center\">2</td>\r\n                                        <td class=\"text-center\">15</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Example Pages</td>\r\n                                        <td class=\"text-center\">3</td>\r\n                                        <td class=\"text-center\">27</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Login, Register, Pricing, Lock Pages</td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>DataTables, VectorMap, SweetAlert, Wizard, jQueryValidation, FullCalendar etc...</td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Mini Sidebar</td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>Premium Support</td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\r\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td></td>\r\n                                        <td class=\"text-center\">Free</td>\r\n                                        <td class=\"text-center\">Just $49</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td class=\"text-center\"></td>\r\n                                        <td class=\"text-center\">\r\n                                            <a href=\"#\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\r\n                                        </td>\r\n                                        <td class=\"text-center\">\r\n                                            <a target=\"_blank\" href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2/?ref=md-free-angular-upgrade-local\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    \r\n            <div class=\"container-fluid\">\r\n                <!-- <div class=\"row\">\r\n                    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                        <div class=\"card card-stats\" >\r\n                            <div class=\"card-header\" data-background-color=\"orange\">\r\n                                <i class=\"material-icons\">content_copy</i>\r\n                            </div>\r\n                            <div class=\"card-content\">\r\n                                <p class=\"category\">Used Space</p>\r\n                                <h3 class=\"title\">49/50<small>GB</small></h3>\r\n                            </div>\r\n                            <div class=\"card-footer\">\r\n                                <div class=\"stats\">\r\n                                    <i class=\"material-icons text-danger\">warning</i> <a href=\"#pablo\">Get More Space...</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                        <div class=\"card card-stats\" >\r\n                            <div class=\"card-header\" data-background-color=\"green\">\r\n                                <i class=\"material-icons\">store</i>\r\n                            </div>\r\n                            <div class=\"card-content\">\r\n                                <p class=\"category\">Revenue</p>\r\n                                <h3 class=\"title\">$34,245</h3>\r\n                            </div>\r\n                            <div class=\"card-footer\">\r\n                                <div class=\"stats\">\r\n                                    <i class=\"material-icons\">date_range</i> Last 24 Hours\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                        <div class=\"card card-stats\" >\r\n                            <div class=\"card-header\" data-background-color=\"red\">\r\n                                <i class=\"material-icons\">info_outline</i>\r\n                            </div>\r\n                            <div class=\"card-content\">\r\n                                <p class=\"category\">Fixed Issues</p>\r\n                                <h3 class=\"title\">75</h3>\r\n                            </div>\r\n                            <div class=\"card-footer\">\r\n                                <div class=\"stats\">\r\n                                    <i class=\"material-icons\">local_offer</i> Tracked from Github\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n    \r\n                    <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                        <div class=\"card card-stats\" >\r\n                            <div class=\"card-header\" data-background-color=\"blue\">\r\n                                <i class=\"fa fa-twitter\"></i>\r\n                            </div>\r\n                            <div class=\"card-content\">\r\n                                <p class=\"category\">Followers</p>\r\n                                <h3 class=\"title\">+245</h3>\r\n                            </div>\r\n                            <div class=\"card-footer\">\r\n                                <div class=\"stats\">\r\n                                    <i class=\"material-icons\">update</i> Just Updated\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n    \r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"card\" >\r\n                            <div class=\"card-header card-chart\" data-background-color=\"green\">\r\n                                <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\r\n                            </div>\r\n                            <div class=\"card-content\">\r\n                                <h4 class=\"title\">Daily Sales</h4>\r\n                                <p class=\"category\"><span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 55%  </span> increase in today sales.</p>\r\n                            </div>\r\n                            <div class=\"card-footer\">\r\n                                <div class=\"stats\">\r\n                                    <i class=\"material-icons\">access_time</i> updated 4 minutes ago\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n    \r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"card\" >\r\n                            <div class=\"card-header card-chart\" data-background-color=\"orange\">\r\n                                <div class=\"ct-chart\" id=\"emailsSubscriptionChart\"></div>\r\n                            </div>\r\n                            <div class=\"card-content\">\r\n                                <h4 class=\"title\">Email Subscriptions</h4>\r\n                                <p class=\"category\">Last Campaign Performance</p>\r\n                            </div>\r\n                            <div class=\"card-footer\">\r\n                                <div class=\"stats\">\r\n                                    <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\r\n                                </div>\r\n                            </div>\r\n    \r\n                        </div>\r\n                    </div>\r\n    \r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"card\" >\r\n                            <div class=\"card-header card-chart\" data-background-color=\"red\">\r\n                                <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\r\n                            </div>\r\n                            <div class=\"card-content\">\r\n                                <h4 class=\"title\">Completed Tasks</h4>\r\n                                <p class=\"category\">Last Campaign Performance</p>\r\n                            </div>\r\n                            <div class=\"card-footer\">\r\n                                <div class=\"stats\">\r\n                                    <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n    \r\n                <div class=\"row\">\r\n                    <!-- <div class=\"col-lg-6 col-md-12\">\r\n                        <div class=\"card card-nav-tabs\" >\r\n                            <div class=\"card-header\" data-background-color=\"purple\">\r\n                                <div class=\"nav-tabs-navigation\">\r\n                                    <div class=\"nav-tabs-wrapper\">\r\n                                        <span class=\"nav-tabs-title\">Requests:</span>\r\n                                        <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\r\n                                            <li class=\"active\">\r\n                                                <a href=\"#profile\" data-toggle=\"tab\">\r\n                                                    <i class=\"material-icons\">bug_report</i>\r\n                                                    Request\r\n                                                <div class=\"ripple-container\"></div></a>\r\n                                            </li>\r\n                                            <li class=\"\">\r\n                                                <a href=\"#messages\" data-toggle=\"tab\">\r\n                                                    <i class=\"material-icons\">code</i>\r\n                                                    Website\r\n                                                <div class=\"ripple-container\"></div></a>\r\n                                            </li>\r\n                                            <li class=\"\">\r\n                                                <a href=\"#settings\" data-toggle=\"tab\">\r\n                                                    <i class=\"material-icons\">cloud</i>\r\n                                                    Server\r\n                                                <div class=\"ripple-container\"></div></a>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n    \r\n                            <div class=\"card-content\">\r\n                                <div class=\"tab-content\">\r\n                                    <div class=\"tab-pane active\" id=\"profile\">\r\n                                        <table class=\"table\">\r\n                                            <tbody>\r\n                                                <tr>\r\n                                                    <td>\r\n                                                        <div class=\"checkbox\">\r\n                                                            <label>\r\n                                                                <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>Sign contract for \"What are conference organizers afraid of?\"</td>\r\n                                                    <td class=\"td-actions text-right\">\r\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                            <i class=\"material-icons\">edit</i>\r\n                                                        </button>\r\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                            <i class=\"material-icons\">close</i>\r\n                                                        </button>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td>\r\n                                                        <div class=\"checkbox\">\r\n                                                            <label>\r\n                                                                <input type=\"checkbox\" name=\"optionsCheckboxes\">\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\r\n                                                    <td class=\"td-actions text-right\">\r\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                            <i class=\"material-icons\">edit</i>\r\n                                                        </button>\r\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                            <i class=\"material-icons\">close</i>\r\n                                                        </button>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td>\r\n                                                        <div class=\"checkbox\">\r\n                                                            <label>\r\n                                                                <input type=\"checkbox\" name=\"optionsCheckboxes\">\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\r\n                                                    </td>\r\n                                                    <td class=\"td-actions text-right\">\r\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                            <i class=\"material-icons\">edit</i>\r\n                                                        </button>\r\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                            <i class=\"material-icons\">close</i>\r\n                                                        </button>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td>\r\n                                                        <div class=\"checkbox\">\r\n                                                            <label>\r\n                                                                <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>Create 4 Invisible User Experiences you Never Knew About</td>\r\n                                                    <td class=\"td-actions text-right\">\r\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                            <i class=\"material-icons\">edit</i>\r\n                                                        </button>\r\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                            <i class=\"material-icons\">close</i>\r\n                                                        </button>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                    <div class=\"tab-pane\" id=\"messages\">\r\n                                        <table class=\"table\">\r\n                                            <tbody>\r\n                                                <tr>\r\n                                                    <td>\r\n                                                        <div class=\"checkbox\">\r\n                                                            <label>\r\n                                                                <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\r\n                                                    </td>\r\n                                                    <td class=\"td-actions text-right\">\r\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                            <i class=\"material-icons\">edit</i>\r\n                                                        </button>\r\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                            <i class=\"material-icons\">close</i>\r\n                                                        </button>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td>\r\n                                                        <div class=\"checkbox\">\r\n                                                            <label>\r\n                                                                <input type=\"checkbox\" name=\"optionsCheckboxes\">\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>Sign contract for \"What are conference organizers afraid of?\"</td>\r\n                                                    <td class=\"td-actions text-right\">\r\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                            <i class=\"material-icons\">edit</i>\r\n                                                        </button>\r\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                            <i class=\"material-icons\">close</i>\r\n                                                        </button>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                    <div class=\"tab-pane\" id=\"settings\">\r\n                                        <table class=\"table\">\r\n                                            <tbody>\r\n                                                <tr>\r\n                                                    <td>\r\n                                                        <div class=\"checkbox\">\r\n                                                            <label>\r\n                                                                <input type=\"checkbox\" name=\"optionsCheckboxes\">\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\r\n                                                    <td class=\"td-actions text-right\">\r\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                            <i class=\"material-icons\">edit</i>\r\n                                                        </button>\r\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                            <i class=\"material-icons\">close</i>\r\n                                                        </button>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td>\r\n                                                        <div class=\"checkbox\">\r\n                                                            <label>\r\n                                                                <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\r\n                                                    </td>\r\n                                                    <td class=\"td-actions text-right\">\r\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                            <i class=\"material-icons\">edit</i>\r\n                                                        </button>\r\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                            <i class=\"material-icons\">close</i>\r\n                                                        </button>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td>\r\n                                                        <div class=\"checkbox\">\r\n                                                            <label>\r\n                                                                <input type=\"checkbox\" name=\"optionsCheckboxes\">\r\n                                                            </label>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>Sign contract for \"What are conference organizers afraid of?\"</td>\r\n                                                    <td class=\"td-actions text-right\">\r\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\r\n                                                            <i class=\"material-icons\">edit</i>\r\n                                                        </button>\r\n                                                        <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\r\n                                                            <i class=\"material-icons\">close</i>\r\n                                                        </button>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n    \r\n                    <div class=\"col-lg-12 col-md-12\">\r\n                        <div class=\"card\" >\r\n                            <div class=\"card-header\" data-background-color=\"orange\">\r\n                                <h4 class=\"title\">Requests Stats</h4>\r\n                                <p class=\"category\">Pending Help Requests</p>\r\n                            </div>\r\n                            <div class=\"card-content table-responsive\">\r\n                                <table class=\"table table-hover\">\r\n                                    <thead class=\"text-warning\">\r\n                                        <tr>\r\n                                            <th>ID</th>\r\n                                            <th>Requester</th>\r\n                                            <th>Requested On</th>\r\n                                            <th>Topic/Category</th>\r\n                                            <th>Note</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td>1</td>\r\n                                            <td>Surendra Gupta</td>\r\n                                            <td>11/11/2018</td>\r\n                                            <td>S4Hana implemenation</td>\r\n                                            <td>Requets for S4/Hana basics</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>2</td>\r\n                                            <td>Anwar </td>\r\n                                            <td>11/11/2018</td>\r\n                                            <td>Session Management</td>\r\n                                            <td>Requets forP2P Functional basics</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>3</td>\r\n                                            <td>Sandeep</td>\r\n                                            <td>11/11/2018</td>\r\n                                            <td>OAuth Design</td>\r\n                                            <td>Requets for Sourcing Functional basics</td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td>4</td>\r\n                                            <td>Praveen Babu</td>\r\n                                            <td>11/11/2018</td>\r\n                                            <td>Ariba Sourcing Functional Area</td>\r\n                                            <td>Requets for Sourcing Functional basics</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n    </div>\r\n    "

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\r\n\r\n<div class=\"card-content\" style=\"width:250px\">\r\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n            <div class=\"form-group form-black label-floating is-empty\">\r\n                <label class=\"control-label\">Username</label>\r\n                <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n                </div>\r\n            </div>       \r\n        </div>\r\n        <div class=\"form-group form-black label-floating is-empty\">\r\n            <label class=\"control-label\">Password</label>\r\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n            <!-- <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a> -->\r\n        </div>\r\n    </form>\r\n</div>\r\n\r\n\r\n"

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  not-found works!\r\n</p>\r\n"

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  signup works!\r\n</p>\r\n"

/***/ }),
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

if (true) {

    module.exports = function initDemo(){
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

        dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };

        optionsDailySalesChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
        }

        var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

        md.startAnimationForLineChart(dailySalesChart);

        /* ----------==========     Daily Sales Chart initialization    ==========---------- */

        dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };

        optionsDailySalesChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
        }

        var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

        md.startAnimationForLineChart(dailySalesChart);



        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

        dataCompletedTasksChart = {
            labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };

        optionsCompletedTasksChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
        }

        var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

        // start animation for the Completed Tasks Chart - Line Chart
        md.startAnimationForLineChart(completedTasksChart);



        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

        var dataEmailsSubscriptionChart = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: [
            [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

          ]
        };
        var optionsEmailsSubscriptionChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
        };
        var responsiveOptions = [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];
        var emailsSubscriptionChart = Chartist.Bar('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);

        //start animation for the Emails Subscription Chart
        md.startAnimationForBarChart(emailsSubscriptionChart);
    }
}


/***/ }),
/* 252 */,
/* 253 */,
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(101);


/***/ })
]),[254]);
//# sourceMappingURL=main.bundle.js.map