webpackJsonp([1],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(291);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomeModule = (function () {
    function WelcomeModule() {
    }
    return WelcomeModule;
}());
WelcomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* Welcome */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* Welcome */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* Welcome */]
        ]
    })
], WelcomeModule);

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
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
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Welcome = (function () {
    function Welcome(navCtr) {
        this.navCtr = navCtr;
    }
    Welcome.prototype.goToHome = function () {
        this.navCtr.setRoot("TabsPage");
    };
    Welcome.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Welcome');
    };
    return Welcome;
}());
Welcome = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"/Users/pro/Desktop/项目汇总/IONIC-TWO/Book/src/pages/welcome/welcome.html"*/'<ion-slides pager>\n\n    <ion-slide>\n        <img src="assets/bg/board.jpg" />\n    </ion-slide>\n\n    <ion-slide>\n        <img src="assets/bg/sun.jpg" />\n    </ion-slide>\n\n    <ion-slide>\n        <img src="assets/bg/dusk.jpg" />\n    </ion-slide>\n\n    <ion-slide>\n        <ion-row>\n            <ion-col>\n                <button light (click)="goToHome()">立即启动</button>\n            </ion-col>\n        </ion-row>\n    </ion-slide>\n\n</ion-slides>'/*ion-inline-end:"/Users/pro/Desktop/项目汇总/IONIC-TWO/Book/src/pages/welcome/welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], Welcome);

//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map