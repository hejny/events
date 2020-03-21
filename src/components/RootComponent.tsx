import * as React from 'react';
import { ApiClient } from '../api/ApiClient';
import { PUBLIC_URL } from '../config';
import { TouchController } from 'touchcontroller';
import { MenuWrapper } from './menu/MenuWrapper';
import { Icon } from './menu/Icon';
import { Separator } from './menu/Separator';
import { Menu } from './menu/Menu';
import { Freehand } from '../model/objects/Freehand';
import { BoardState } from '../model/BoardState';
import { observer } from 'mobx-react';
import { BoardComponent } from './BoardComponent';
import { AppState } from '../model/AppState';
import { ToolName } from '../tools/AbstractTool';

interface IRootComponentProps {
    appState: AppState;
    boardState: BoardState;
    apiClient: ApiClient;
    touchController: TouchController;
}

interface IRootComponentState {}

@observer
export class RootComponent extends React.Component<IRootComponentProps, IRootComponentState> {
    state: IRootComponentState = {};

    /*/
    constructor(props: IRootComponentProps) {
        super(props);
    }
    /**/

    render() {
        // TODO: refactoring: Break to multiple components
        return (
            <>
                <BoardComponent {...this.props} />
                <MenuWrapper position="right">
                    <Menu orientation="vertical">
                        <Icon icon="zoom-in" inactive />
                        <div className="zoom-status inactive">100%</div>
                        <Icon icon="zoom-out" inactive />
                        <Separator className="d-block d-sm-none" />
                        <Icon icon="link" className="d-block d-sm-none" inactive />
                    </Menu>
                </MenuWrapper>
                <MenuWrapper position="top-ltr">
                    <img src={`${PUBLIC_URL}/assets/logo-dark.png`} alt="CollBoard.com" className="brand" />
                    <Menu orientation="horizontal" className="d-none d-sm-block">
                        <input
                            type="text"
                            className="stealth board-name"
                            defaultValue={this.props.boardState.name}
                            onChange={(event) => {
                                this.props.boardState.name = event.target.value;
                            }}
                        />
                        <button type="button" className="btn btn-primary">
                            Sdílet
                        </button>
                    </Menu>
                </MenuWrapper>
                <MenuWrapper position="bottom-ltr">
                    <Menu orientation="horizontal">
                        <Icon icon="cursor" inactive />
                        <Icon
                            icon="hand"
                            active={this.props.appState.tool === ToolName.Move}
                            onClick={() => (this.props.appState.tool = ToolName.Move)}
                        />
                        <Icon
                            icon="pen"
                            active={this.props.appState.tool === ToolName.Draw}
                            onClick={() => (this.props.appState.tool = ToolName.Draw)}
                        >
                            {/*
                            <div className="icon icon-stroke-1"></div>
                            <div className="icon icon-stroke-2"></div>
                            <div className="icon icon-stroke-3"></div>
                            <div className="menu-separator"></div>
                            <div className="icon icon-color">
                                <span style={{ backgroundColor: `rgb(49, 103, 164)` }}></span>
                            </div>
                            <div className="icon icon-color">
                                <span style={{ backgroundColor: `rgb(238, 35, 51)` }}></span>
                            </div>
                            <div className="icon icon-color">
                                <span style={{ backgroundColor: `rgb(64, 185, 60)` }}></span>
                            </div>
                            <div className="icon icon-color">
                                <span style={{ backgroundColor: `rgb(237, 240, 80)` }}></span>
                            </div>
                            <div className="icon icon-add"></div>
                            */}
                        </Icon>
                        <Icon icon="erase" inactive />
                    </Menu>
                </MenuWrapper>
            </>
        );
    }
}
