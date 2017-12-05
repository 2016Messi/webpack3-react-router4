/// <reference types="react" />
import * as React from 'react';
export interface SearchProps {
    prefixCls?: string;
    placeholder?: string;
    onChange?: (e: React.FormEvent<any>) => void;
    handleClear?: (e: React.MouseEvent<any>) => void;
    value?: any;
}
export default class Search extends React.Component<SearchProps, any> {
    static defaultProps: {
        placeholder: string;
    };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClear: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    render(): JSX.Element;
}
