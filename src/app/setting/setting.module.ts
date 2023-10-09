import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';


@NgModule({
  declarations: [
    WebComponent,
    MobileComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
