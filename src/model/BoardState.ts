import { observable } from 'mobx';
import { CollBoardObject } from './objects/CollBoardObject';

/**
 * BoardState represents data of the board which will be synced and saved
 */
export class BoardState {
    //This is hack for force updating:
    @observable version: number = 0;
    @observable
    name: string = 'Nástěnka 1.A';
    @observable
    objects: CollBoardObject[] = [];
}
