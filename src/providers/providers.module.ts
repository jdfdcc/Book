import { NgModule } from "@angular/core";
import { Data } from "./data/data";
import { JAlertProvider } from "./j-alert/j-alert";
import { DateUtilsProvider } from "./date-utils/date-utils";
import { UtilsProvider } from "./utils/utils";
import { AppGlobal } from "./app-global/app-global";
import { DbServiceProvider } from "./db-service/db-service";
import { StorageService } from "./storage-service/storage-service";

/**
 * 存放所有 providers的信息类
 */

@NgModule({
  providers: [Data, JAlertProvider, DateUtilsProvider, UtilsProvider, AppGlobal, DbServiceProvider,StorageService]
})
export class ProvidersModule {
}
