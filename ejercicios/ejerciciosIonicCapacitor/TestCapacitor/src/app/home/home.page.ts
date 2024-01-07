import { Component, OnDestroy, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { Device } from '@capacitor/device';
import { NgZone } from '@angular/core';
import { Network } from '@capacitor/network';
import { Geolocation } from '@capacitor/geolocation';

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

  longitude : any;
  latitude : any;

  eventList : any[];


  constructor(private platform: Platform, private ngZone : NgZone) {
    this.platform.backButton.subscribeWithPriority(-1, () => {App.exitApp();});

    this.eventList = [];
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

          if (this.connectionType != status.connectionType)
          {
            if (status.connectionType == "wifi")
            {
              this.eventList.push("Connection Changed to Wifi")
            }else
            if (status.connectionType == "cellular")
            {
              this.eventList.push("Connection Changed to cellular")
            }
            else
            if (status.connectionType == "none")
            {
              this.eventList.push("No connection")
            }else
            if (status.connectionType == "unknown")
            {
              this.eventList.push("Unknown Connection connection")
            }
  
          }
          this.isConnected = status.connected;
          this.connectionType = status.connectionType;
        });
      });

      App.addListener('resume', () => {
        this.ngZone.run(() => {
        this.eventList.push('onResume');
      });
    });

      App.addListener('pause', () => {
        this.ngZone.run(() => {
          this.eventList.push('onResume');
        });
      });

      App.addListener('appStateChange', ({isActive}) => {
        this.ngZone.run(() => {
          this.eventList.push(isActive ? "onStart" : "onStop");
        });
      });

      Geolocation.getCurrentPosition().then(res => {
        this.longitude = res.coords.longitude;
        this.latitude = res.coords.latitude;
      });
  }
  
}

