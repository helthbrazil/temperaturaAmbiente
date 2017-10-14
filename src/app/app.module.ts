import { HTTP } from '@ionic-native/http';
import { Network } from '@ionic-native/network';

import { DateUtil } from './../services/dateUtil';
import { HttpUtil } from './../services/httpUtil';
import { LocalStorage } from './../services/localStorage';
import { NetworkUtil } from './../services/networkUtil';
import { Toast } from './../componentesIonic/toast';
import { Loading } from './../componentesIonic/loading';
import { Alertas } from './../componentesIonic/alertas';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// BIBLIOTECA DE GRÁFICO
import { ChartsModule } from 'ng2-charts/ng2-charts';
import '../../node_modules/chart.js/dist/Chart.bundle.min.js';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    StatusBar, Alertas, Loading, Toast, NetworkUtil, LocalStorage, HttpUtil, DateUtil, Network, HTTP
  ]
})
export class AppModule { }
