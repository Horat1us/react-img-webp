import * as React from "react";
import { WebP, WebPValue } from "./WebP";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    webP?: string;
}

export const Image: React.FunctionComponent<ImageProps> = React.memo((props) => {
    const childProps = { ...props };
    delete childProps.webP;

    return (
        <WebP.Consumer>
            {(value: WebPValue) => <img {...childProps} src={value.supportWebP && props.webP || props.src} />}
        </WebP.Consumer>
    );
});
