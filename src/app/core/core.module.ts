import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindowRefService } from './window-ref/window-ref.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    WindowRefService
  ]
})
export class CoreModule { }
