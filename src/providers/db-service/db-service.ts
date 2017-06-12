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
    console.log('Hello DbServiceProvider Provider');
  }
  ngOnInit() {

    this.initDB();

  }
  //初始化数据库
  initDB() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('create table t_log(name VARCHAR(32))', {})
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));
      this.database = db;
      db.executeSql("insert into t_log values('123')", {});
    }).catch(e => console.log(e));
  }
  //查询  
  query() {
    let result = this.database.executeSql("select * from t_log", [])
      .then((data) => {
        debugger;
        console.log("select->" + data.rows.item(0).name)
      }).catch(e => console.log(e));
  }
}
