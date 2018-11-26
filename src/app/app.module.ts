import { CameraMock } from './../pages/mock/camera-mock';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyStoragePage } from '../pages/my-storage/my-storage';

import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { MyCameraPage } from '../pages/my-camera/my-camera';

const isBrowser = document.URL.startsWith('http');

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MyStoragePage,
    MyCameraPage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MyStoragePage,
    MyCameraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // Camera,
    (isBrowser ? {provide: Camera, useClass: CameraMock}: Camera),
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
