import * as React from "react";
import { canUseWebP } from "../canUseWebP";
import { WebP } from "./WebP";

export interface WebPControllerProps {
    accept: string | undefined;
}

export const WebPController: React.FC<WebPControllerProps> = ({ accept, children }) => {
    const [ supportWebP, setSupport ] = React.useState<boolean>(
        "string" === typeof accept && accept.indexOf("image/webp") !== -1
    );
    React.useEffect(() => {
        if (!supportWebP && canUseWebP()) {
            setSupport(true);
        }
    }, []);
    return <WebP.Provider value={{ supportWebP }}>{children}</WebP.Provider>
};
