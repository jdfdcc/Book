import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DbServiceProvider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DbServiceProvider {
  database: SQLiteObject;

  constructor(private sqlite: SQLite) {
    this.initDB()
  }
  //初始化数据库
  initDB() {
    console.log("初始化数据库");
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('create table sportDB(name VARCHAR(32))', {})
        .then(() => console.log('表创建成功'))
        .catch(e => console.log(e));
      this.database = db
    }).catch(e => console.log(e));
  }
  //查询  
  query() {
    let result = this.database.executeSql("select * from sportDB", []).then((data) => {
      console.log("select->" + data.rows.item(0).name)
    }).catch(e => console.log(e));
  }
  //插入
  insert() {
    this.database.executeSql("insert into sportDB values('123')", {});
  }
}
