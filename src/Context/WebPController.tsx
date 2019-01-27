import * as React from "react";
import { canUseWebP } from "../canUseWebP";
import { WebP, WebPValue } from "./WebP";

export interface WebPControllerProps {
    accept: string | undefined;
}

export class WebPController extends React.Component<WebPControllerProps, WebPValue> {
    public readonly state: WebPValue = {
        supportWebP: this.supportWebpByHeaders,
    }

    public componentDidMount(): void {
        const supportInRuntime = canUseWebP();
        if (supportInRuntime && !this.state.supportWebP) {
            this.setState({
                supportWebP: true,
            });
        }
    }

    public render() {
        return <WebP.Provider value={this.state} children={this.props.children} />;
    }

    protected get supportWebpByHeaders(): boolean {
        return !!this.props.accept && this.props.accept.indexOf("image/webp") !== -1;
    }
}
