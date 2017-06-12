webpackJsonp([3],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movie__ = __webpack_require__(289);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviePageModule", function() { return MoviePageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MoviePageModule = (function () {
    function MoviePageModule() {
    }
    return MoviePageModule;
}());
MoviePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__movie__["a" /* MoviePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__movie__["a" /* MoviePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__movie__["a" /* MoviePage */]
        ]
    })
], MoviePageModule);

//# sourceMappingURL=movie.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoviePage = (function () {
    function MoviePage(navCtrl, navParams, menuCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.movieInfo = false;
        this.id = this.navParams.get('id');
        this.menuCtrl.swipeEnable(false);
    }
    MoviePage.prototype.ionViewDidLoad = function () {
        this.initData();
    };
    MoviePage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.swipeEnable(true);
    };
    MoviePage.prototype.initData = function () {
        this.hasErr = null;
        // this.data.getMovieDetail(this.id).then(res => {
        //   this.movieInfo = res;
        // }, err => {
        //   this.hasErr = err;
        // })
    };
    MoviePage.prototype.shareMovie = function (type, movie) {
        var that = this;
        switch (type) {
            case 'QQ':
                var QQ = {
                    url: movie.share_url,
                    title: movie.title,
                    description: "来自Ion2--基于Ionic2的资讯类APP",
                    imageUrl: movie.images.large,
                    appName: "Ion2"
                };
                YCQQ.shareToQQ(function () {
                    that.showToast('分享成功');
                }, function (failReason) {
                    that.showToast('分享失败');
                }, QQ);
                break;
            case 'Qzone':
                var Qzone = {
                    url: movie.share_url,
                    title: movie.title,
                    description: "来自Ion2--基于Ionic2的资讯类APP",
                    imageUrl: [movie.images.large],
                    appName: "Ion2"
                };
                YCQQ.shareToQzone(function () {
                    that.showToast('分享成功');
                }, function (failReason) {
                    that.showToast('分享失败');
                }, Qzone);
                break;
            case 'weixin':
                Wechat.share({
                    message: {
                        title: movie.title,
                        description: "来自Ion2--基于Ionic2的资讯类APP",
                        thumb: movie.images.large,
                        mediaTagName: "TEST-TAG-001",
                        messageExt: "来自Ion2--基于Ionic2的资讯类APP",
                        messageAction: "<action>dotalist</action>",
                        media: {
                            type: Wechat.Type.WEBPAGE,
                            webpageUrl: movie.share_url
                        }
                    },
                    scene: Wechat.Scene.SESSION
                }, function () {
                    that.showToast('分享成功');
                }, function (failReason) {
                    that.showToast('分享失败');
                });
                break;
            case 'friends':
                Wechat.share({
                    message: {
                        title: movie.title,
                        description: "来自Ion2--基于Ionic2的资讯类APP",
                        thumb: movie.images.large,
                        mediaTagName: "TEST-TAG-001",
                        messageExt: "来自Ion2--基于Ionic2的资讯类APP",
                        messageAction: "<action>dotalist</action>",
                        media: {
                            type: Wechat.Type.WEBPAGE,
                            webpageUrl: movie.share_url
                        }
                    },
                    scene: Wechat.Scene.TIMELINE
                }, function () {
                    that.showToast('分享成功');
                }, function (failReason) {
                    that.showToast('分享失败');
                });
                break;
        }
    };
    MoviePage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    return MoviePage;
}());
MoviePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-movie',template:/*ion-inline-start:"/Users/pro/Desktop/项目汇总/IONIC-TWO/Book/src/pages/movie/movie.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n        <ion-title>电影信息</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content elastic-header>\n    <div class="background-image" style="background-image:url(assets/image/menu-header-back.jpg)"></div>\n    <ion-fab right bottom>\n        <button ion-fab color="primary" mini><ion-icon name="ios-send"></ion-icon></button>\n        <ion-fab-list side="top">\n            <button ion-fab><ion-icon color="primary" name="logo-facebook"></ion-icon></button>\n            <button ion-fab><ion-icon color="primary" name="logo-twitter"></ion-icon></button>\n            <button ion-fab><ion-icon color="primary" name="logo-vimeo"></ion-icon></button>\n            <button ion-fab><ion-icon color="primary" name="logo-googleplus"></ion-icon></button>\n        </ion-fab-list>\n    </ion-fab>\n\n    <ion-fab center middle>\n        <button ion-fab mini><ion-icon name="add"></ion-icon></button>\n        <ion-fab-list side="top">\n            <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n        </ion-fab-list>\n        <ion-fab-list side="left">\n            <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n        </ion-fab-list>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/pro/Desktop/项目汇总/IONIC-TWO/Book/src/pages/movie/movie.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
], MoviePage);

//# sourceMappingURL=movie.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map