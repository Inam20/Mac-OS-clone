import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';

import { DesktopComponent } from './containers';
import { DockComponent, MenuComponent } from './components';
import { SharedModule } from '../shared/shared.module';

const components = [DesktopComponent, DockComponent, MenuComponent];
@NgModule({
  declarations: [...components],
  imports: [CommonModule, ApplicationsRoutingModule, SharedModule],
})
export class ApplicationsModule {}
