import { Folder } from '../models/folder';

export interface State {
  folders: Folder[];
  selectedFolderIDs: number[];
  deletedFolderIds: number[];
  activeApplication: string;
}
