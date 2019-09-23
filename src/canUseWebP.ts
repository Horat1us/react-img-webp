let checked = undefined;

export function canUseWebP(): boolean {
    if (typeof document !== "object") {
        return false;
    }

    if(checked !== undefined)
        return checked;
    
    const canvas = document.createElement("canvas");
    if (!canvas.getContext || !canvas.getContext("2d")) {
        checked = false;
        return false;
    }
    checked = canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0
    return checked;
}
