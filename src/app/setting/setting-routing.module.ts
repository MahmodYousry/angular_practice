import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [
  {path: "", component: WebComponent},
  {path: "mobile", component: MobileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
