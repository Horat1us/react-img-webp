let checked: boolean; // eslint-disable-line

export function canUseWebP(): boolean {
    if ("undefined" !== typeof checked) {
        return checked;
    }

    if ("object" !== typeof document) {
        return false;
    }

    const canvas = document.createElement("canvas");
    if (!canvas.getContext || !canvas.getContext("2d")) {
        return checked = false;
    }
    return checked = canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0
}
