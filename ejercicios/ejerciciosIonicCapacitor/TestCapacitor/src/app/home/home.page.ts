import { Component } from '@angular/core';
import { App } from '@capacitor/app';
import { Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { Device } from '@capacitor/device';
import { NgZone } from '@angular/core';
import { Network } from '@capacitor/network';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {


  NOT_SETTED : string= "...";

  platformName = Capacitor.getPlatform();
  nativePlatform = Capacitor.isNativePlatform();
  cameraAvailable = Capacitor.isPluginAvailable('Camera');
  
  deviceName : any;
  operatingSystem : any;
  osVersion : any ;
  manufacturer : any ;
  isVirtual : any ;
  uuid : any ;
  
  batteryLevel : any ;
  isCharging : any ;

  isConnected : any ;
  connectionType : any ;


  constructor(private platform: Platform, private ngZone : NgZone) {
    this.platform.backButton.subscribeWithPriority(-1, () => {App.exitApp();});

      Device.getInfo().then( result => {
          this.deviceName = result.name;
          this.operatingSystem = result.operatingSystem;
          this.osVersion = result.osVersion;
          this.manufacturer = result.manufacturer;
          this.isVirtual = result.isVirtual;
      });
  
      Device.getId().then(result => {
        this.uuid = result.identifier
      });
  
      Device.getBatteryInfo().then(result => {
          this.batteryLevel = result.batteryLevel ?  (result.batteryLevel * 100).toFixed(0) +"%" : "...";
          this.isCharging = result.isCharging
      });

      Network.getStatus().then(status  => {
        this.isConnected = status.connected;
        this.connectionType = status.connectionType;
      });

      Network.addListener('networkStatusChange', status => {
        this.ngZone.run(() => {
          this.isConnected = status.connected;
          this.connectionType = status.connectionType;
        });
      });
  }
}
