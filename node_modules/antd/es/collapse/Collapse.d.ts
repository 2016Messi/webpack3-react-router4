/// <reference types="react" />
import * as React from 'react';
export interface CollapseProps {
    activeKey?: Array<string> | string;
    defaultActiveKey?: Array<string>;
    /** 手风琴效果 */
    accordion?: boolean;
    onChange?: (key: string | string[]) => void;
    style?: React.CSSProperties;
    className?: string;
    bordered?: boolean;
    prefixCls?: string;
}
export interface CollapsePanelProps {
    key: string;
    header: React.ReactNode;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
export declare class CollapsePanel extends React.Component<CollapsePanelProps, {}> {
}
export default class Collapse extends React.Component<CollapseProps, any> {
    static Panel: typeof CollapsePanel;
    static defaultProps: {
        prefixCls: string;
        bordered: boolean;
        openAnimation: {
            appear(): void;
            enter(node: HTMLElement, done: () => void): any;
            leave(node: HTMLElement, done: () => void): any;
        };
    };
    render(): JSX.Element;
}
