import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { DockModule } from 'primeng/dock';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ProgressBarModule, InputTextModule, DockModule],
})
export class SharedUiModule {}
