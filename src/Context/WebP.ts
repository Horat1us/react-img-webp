import * as React from "react";

export interface WebPValue {
    supportWebP: boolean;
}

export const WebP = React.createContext<WebPValue>({
    supportWebP: false,
});
