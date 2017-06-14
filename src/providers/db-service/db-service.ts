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
    this.initDB(function callback(result) {
    })
  }
  //初始化数据库
  initDB(callback) {
    if (!this.database) {
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('create table if not exists sportDB(sportTime text NOT NULL,sportDate text NOT NULL)', {})
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
        this.database = db;
        callback(true, db)
      }).catch(e => {
        console.log(e);
        callback(false, e)
      });
    } else {
      callback(true, this.database)
    }
  }
  //查询  
  query() {
    this.initDB(function callback(res, DB) {
      if (res) {
        let result = DB.executeSql("select * from sportDB", []).then((data) => {
          console.log("select->" + data.rows.item(0).sportTime)
        }).catch(e => console.log(e));
      }
    })
  }
  //插入
  insert(time) {
    this.initDB(function callback(res, DB) {
      if (res) {
        DB.executeSql("INSERT INTO sportDB (sportTime,sportDate) VALUES (?,?);"
          , [time + "", "2017-1-1"])
          .then(() => alert('暂存成功'))
          .catch(e => console.log(e));//插入数据
      }
    })
  }
}
