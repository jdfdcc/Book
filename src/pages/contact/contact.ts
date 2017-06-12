import { Component } from '@angular/core';

import { IonicPage, NavController } from 'ionic-angular';
import { App } from 'ionic-angular';

import { PersonInfoPage } from '../person-info/person-info';


@IonicPage()
@Component({
	selector: 'page-contact',
	templateUrl: 'contact.html',
})
export class ContactPage {
	carList: Array<Object>;
	dataList: Array<Object>;

	constructor(public navCtrl: NavController, private app: App) {
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
		]
	}
	//编辑个人资料
	toEditPersonMsg() {
		// this.navCtrl.push('personMsgPage');
		this.app.getRootNav().push(PersonInfoPage);
	}

}