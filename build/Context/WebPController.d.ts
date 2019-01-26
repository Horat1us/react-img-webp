import * as React from "react";
import { WebPValue } from "./WebP";
export interface WebPControllerProps {
    accept: string | undefined;
}
export declare class WebPController extends React.PureComponent<WebPControllerProps, WebPValue> {
    readonly state: WebPValue;
    componentDidMount(): void;
    render(): JSX.Element;
    protected readonly supportWebpByHeaders: boolean;
}
