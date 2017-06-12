webpackJsonp([5],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(287);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactPageModule = (function () {
    function ContactPageModule() {
    }
    return ContactPageModule;
}());
ContactPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]
        ]
    })
], ContactPageModule);

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_info_person_info__ = __webpack_require__(198);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = (function () {
    function ContactPage(navCtrl, app) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.carList = [{
                list: [{
                        text: "我的书架",
                        ion: "book",
                        style: {
                            color: "orange"
                        }
                    },
                    {
                        text: "我的笔记",
                        ion: "bookmarks",
                        style: {
                            color: "orange"
                        }
                    },
                    {
                        text: "阅读标签",
                        ion: "ios-laptop",
                        style: {
                            color: "green"
                        }
                    }
                ]
            }, {
                list: [{
                        text: "申请作者",
                        ion: "brush",
                        style: {
                            color: "purple"
                        }
                    },
                    {
                        text: "我是作者",
                        ion: "color-palette",
                        style: {
                            color: "blue"
                        }
                    },
                    {
                        text: "我要分享",
                        ion: "share",
                        style: {
                            color: "dark"
                        }
                    }
                ]
            }];
        this.dataList = [{
                text: "使用帮助",
                ion: "help",
                style: {
                    color: "orange"
                }
            },
            {
                text: "我的笔记",
                ion: "clipboard",
                style: {
                    color: "orange"
                }
            },
            {
                text: "阅读标签",
                ion: "settings",
                style: {
                    color: "green"
                }
            }
        ];
    }
    //编辑个人资料
    ContactPage.prototype.toEditPersonMsg = function () {
        // this.navCtrl.push('personMsgPage');
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__person_info_person_info__["a" /* PersonInfoPage */]);
    };
    return ContactPage;
}());
ContactPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/Users/pro/Desktop/项目汇总/IONIC-TWO/Book/src/pages/contact/contact.html"*/'<ion-content style="background:rgb(233, 233, 233)" test>\n    <section class="p_bg_heard" style="background-image: url(assets/bg-img/p_bg.jpg)">\n        <img src="assets/bg-img/dog.jpg">\n        <div tappable (click)="toEditPersonMsg()">\n            <span>迷茫的小吧狗</span><br>\n            <span style="line-height: 30px;color: green!important">\n                <button ion-button style="height: 20px;font-size: .5em!important;">签到</button>\n                本月已经签到10天。\n            </span>\n        </div>\n    </section>\n    <section class="p_body" style="height: 300px">\n        <div class="p_title">\n            <span style="font-size: 1.3em">\n                <ion-icon name="card" style="color: orange"></ion-icon>\n            1000 &nbsp;&nbsp;会员币 | <span style="color: gray;font-size: .8em">积分9999</span>\n            </span>\n        </div>\n        <div class="p_con">\n            <div class="row" *ngFor="let car of carList">\n                <div class="col" *ngFor="let carItem of car.list">\n                    <ion-icon [ngStyle]="carItem.style" name="{{carItem.ion}}"></ion-icon>\n                    <br><span style="font-size: .8em"> {{carItem.text}}</span>\n                </div>\n            </div>\n        </div>\n    </section>\n    <section class="p_body ">\n        <div class="p_title">\n            <span style="font-size: 1.3em">\n                <ion-icon name="mail" style="color: orange;font-size: 1em"></ion-icon>\n            <span style="color: gray;font-size: .6em">您还有一些未读消息未查看，进去看看？</span>\n            </span>\n        </div>\n        <div class="p_con">\n            <div class="p_con">\n                <div class="row">\n                    <div class="col" *ngFor="let carItem of dataList">\n                        <ion-icon [ngStyle]="carItem.style" name="{{carItem.ion}}"></ion-icon><br> {{carItem.text}}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n</ion-content>\n<!--\n  个人中心\n-->'/*ion-inline-end:"/Users/pro/Desktop/项目汇总/IONIC-TWO/Book/src/pages/contact/contact.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* App */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map