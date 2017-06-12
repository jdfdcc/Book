webpackJsonp([7],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(284);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    return AboutPageModule;
}());
AboutPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]
        ]
    })
], AboutPageModule);

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl, menuCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.menuCtrl.swipeEnable(false);
    }
    AboutPage.prototype.getLocation = function () {
        var _this = this;
        var that = this;
        BDLocation.watch({ gps: true }, function (suc) {
            if (suc.data) {
                _this.map.centerAndZoom(new BMap.Point(suc.data.longitude, suc.data.latitude), 15);
                var pt = new BMap.Point(suc.data.longitude, suc.data.latitude);
                var marker2 = new BMap.Marker(pt);
                _this.map.addOverlay(marker2);
            }
            else {
                that.showToast('定位失败，请检查应用权限设置！');
            }
            BDLocation.stop(function (suc) {
            }, function (err) {
            });
        }, function (err) {
            that.showToast('定位失败，请检查应用权限设置！');
        });
    };
    AboutPage.prototype.ionViewDidLoad = function () {
        this.map = new BMap.Map("Bmap");
        this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        this.map.addControl(new BMap.NavigationControl());
        this.map.enableScrollWheelZoom(true);
    };
    AboutPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.swipeEnable(true);
    };
    AboutPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    return AboutPage;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('container'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* ElementRef */])
], AboutPage.prototype, "mapElement", void 0);
AboutPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/pro/Desktop/项目汇总/IONIC-TWO/Book/src/pages/about/about.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>百度地图</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-fab left bottom>\n        <button ion-fab (click)=\'getLocation()\'><ion-icon name="md-locate"></ion-icon></button>\n    </ion-fab>\n    <div id="Bmap" style="width: 100%;height: 100%"></div>\n</ion-content>'/*ion-inline-end:"/Users/pro/Desktop/项目汇总/IONIC-TWO/Book/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map