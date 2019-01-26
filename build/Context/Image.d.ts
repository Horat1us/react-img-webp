import * as React from "react";
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    webP?: string;
}
export declare const Image: React.FunctionComponent<ImageProps>;
