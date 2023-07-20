import { Injectable } from '@angular/core';
import { BaseStore } from './base-store';
import { Observable } from 'rxjs';
import { Folder } from '../models/folder';
import { State } from './state';
import { DESKTOP } from '../config/applications';

const initialState: State = {
  activeApplication: DESKTOP,
  selectedFolderIDs: [],
  deletedFolderIds: [],
  folders: [],
};

@Injectable({ providedIn: 'root' })
export class Store extends BaseStore {
  activeApplication$: Observable<string> = this.select((state) => {
    return state.activeApplication;
  });

  constructor() {
    super(initialState);
  }

  setActiveApplication(activeAppId = DESKTOP) {
    this.setState({
      activeApplication: activeAppId,
    });
  }
}
