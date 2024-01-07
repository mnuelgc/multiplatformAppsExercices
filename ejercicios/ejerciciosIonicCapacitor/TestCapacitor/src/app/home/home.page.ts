import { Component } from '@angular/core';
import { App } from '@capacitor/app';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {


  NOT_SETTED : string= "...";

  platformName = this.NOT_SETTED;
  nativePlatform = this.NOT_SETTED;
  cameraAvailable = this.NOT_SETTED;
  
  deviceName = this.NOT_SETTED;
  operatingSystem = this.NOT_SETTED;
  osVersion = this.NOT_SETTED;
  manufacturer = this.NOT_SETTED;
  isVirtual = this.NOT_SETTED;
  uuid = this.NOT_SETTED;
  
  batteryLevel = this.NOT_SETTED;
  isCharging = this.NOT_SETTED;

  constructor(private platform: Platform) {
    this.platform.backButton.subscribeWithPriority(-1, () => {App.exitApp();});
  }

}
