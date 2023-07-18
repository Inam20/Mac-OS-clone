import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MenuItem, TooltipOptions } from 'primeng/api';
import { dockItems } from 'src/app/shared/config/dock-items';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DockComponent implements OnInit {
  dockItems: MenuItem[] = [];

  defaultTooltipOptions: TooltipOptions = {
    tooltipPosition: 'top',
    positionTop: -15,
    positionLeft: 15,
    showDelay: 1000,
  };

  constructor() {}

  ngOnInit() {
    this.dockItems = this.getDockItems();
  }

  getDockItems() {
    return dockItems.map((dockItem) => {
      return {
        label: dockItem,
        icon: dockItem,
        tooltipOptions: {
          tooltipLabel: dockItem,
          ...this.defaultTooltipOptions,
        },
        command: () => {},
      };
    });
  }
}
