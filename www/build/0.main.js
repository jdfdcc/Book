webpackJsonp([0],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__click__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_int_to_time_int_to_time__ = __webpack_require__(292);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickPageModule", function() { return ClickPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ClickPageModule = (function () {
    function ClickPageModule() {
    }
    return ClickPageModule;
}());
ClickPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__click__["a" /* ClickPage */],
            __WEBPACK_IMPORTED_MODULE_3__pipes_int_to_time_int_to_time__["a" /* IntToTimePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__click__["a" /* ClickPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__click__["a" /* ClickPage */]
        ]
    })
], ClickPageModule);

//# sourceMappingURL=click.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_j_alert_j_alert__ = __webpack_require__(199);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { DbServiceProvider } from "../../providers/db-service/db-service";
/**
 * Generated class for the ClickPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ClickPage = (function () {
    function ClickPage(navCtrl, navParams, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alert = alert;
        this.clickFlag = true;
        this.time = 0;
    }
    ClickPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClickPage');
    };
    //打卡时间
    ClickPage.prototype.clickStart = function () {
        if (this.clickFlag) {
            this.timeOption(this.clickFlag);
            this.clickFlag = false;
        }
        else {
            this.timeOption(this.clickFlag);
            this.clickFlag = true;
        }
    };
    //保存当天跑步记录
    ClickPage.prototype.clickEnd = function () {
        var _this = this;
        //暂停时间
        this.timeOption(false);
        this.alert.confirm('当前运动' + this.time + '秒，确定结束运动！', '提示', function (res) {
            if (res) {
                // this.dbService.createTable((re) => {
                //   return false;
                // });
            }
            else {
                _this.timeOption(true);
            }
        });
    };
    //显示更多操作
    ClickPage.prototype.presentPopover = function ($event) {
        this.alert.alert("小猿们正在努力开发中...");
    };
    // 时间操作
    ClickPage.prototype.timeOption = function (flag) {
        var _this = this;
        flag ? this.interTime = setInterval(function () {
            _this.time++;
        }, 1000) : clearInterval(this.interTime);
    };
    return ClickPage;
}());
ClickPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-click',template:/*ion-inline-start:"/Users/pro/Desktop/项目汇总/IONIC-TWO/Book/src/pages/click/click.html"*/'<!--\n  Generated template for the ClickPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="life">\n        <ion-title>打卡页面</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="presentPopover($event)">\n                <ion-icon name="more"></ion-icon>\n             </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <section class="heard_time">\n        <p>{{time | intToTimePipe}}</p>\n    </section>\n    <section class="click_button_out">\n        <p>梦想是要有的万一实现了呢？</p>\n        <div tappable class="two click_button_left " *ngIf="!clickFlag " (click)="clickEnd()" [ngStyle]=" { \'right\': !clickFlag? \'20px\': \'\'} " [ngClass]="{\'click_button_center\':clickFlag}">\n            <div class=" click_button_in ">结束</div>\n        </div>\n        <div tappable class="one" (click)="clickStart()" [ngStyle]="{\'left\': !clickFlag? \'20px\': \'\'}" [ngClass]="{\'click_button_center\':clickFlag}">\n            <div class="click_button_in " *ngIf="clickFlag ">开始</div>\n            <div [ngStyle]="{ \'background\': !clickFlag? \'gray\': \'blue\' } " class=" click_button_in " *ngIf="!clickFlag ">暂停</div>\n        </div>\n    </section>\n</ion-content>'/*ion-inline-end:"/Users/pro/Desktop/项目汇总/IONIC-TWO/Book/src/pages/click/click.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_j_alert_j_alert__["a" /* JAlertProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_j_alert_j_alert__["a" /* JAlertProvider */]) === "function" && _c || Object])
], ClickPage);

var _a, _b, _c;
//# sourceMappingURL=click.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntToTimePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the IntToTimePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var IntToTimePipe = (function () {
    function IntToTimePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    IntToTimePipe.prototype.transform = function (value) {
        var h = 0, m = 0, s = 0;
        h = Math.floor(value / 60 / 60);
        m = Math.floor(value / 60);
        s = value % 60;
        return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
    };
    return IntToTimePipe;
}());
IntToTimePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'intToTimePipe',
    })
], IntToTimePipe);

//# sourceMappingURL=int-to-time.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map