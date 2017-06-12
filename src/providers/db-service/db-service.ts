import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import 'rxjs/add/operator/map';

/*
  Generated class for the DbServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DbServiceProvider {

  constructor(public http: Http, private sqlite: SQLite) {
    console.log('Hello DbServiceProvider Provider');
  }

  /**
   * 新建表格
   * @param callback 回调函数
   */
  createTable(callback: (res: any) => {}) {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('create table sports(name VARCHAR(32))', {})
        .then(() => {
          console.log('Executed SQL');
          callback(true);
        })
        .catch(e => {
          console.log(e);
          callback(e);
        });
    }).catch(e => {
      console.log(e);
      callback(e);
    });
  }
}
