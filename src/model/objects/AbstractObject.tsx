import uuid from 'uuid';
import { Transformation } from 'touchcontroller';
import { Vector2 } from 'touchcontroller';

// TODO: refactoring: maybe better naming
export abstract class AbstractObject {
    uuid: string;
    version: string;

    constructor() {
        this.uuid = uuid.v4();
    }

    public updateTick() {
        // TODO: optimize
        this.version = uuid.v4();
    }

    public abstract render(): JSX.Element;
}
