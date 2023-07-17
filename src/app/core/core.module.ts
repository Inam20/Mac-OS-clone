import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootComponent } from './boot/boot.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [BootComponent],
  imports: [CommonModule, SharedModule],
})
export class CoreModule {}
