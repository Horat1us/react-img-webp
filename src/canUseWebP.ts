let checked: boolean; // eslint-disable-line

export function canUseWebP(): boolean {
    if (typeof document !== "object") {
        return false;
    }

    if (typeof checked !== 'undefined') {
        return checked;
    }

    const canvas = document.createElement("canvas");
    if (!canvas.getContext || !canvas.getContext("2d")) {
        checked = false;
        return false;
    }
    checked = canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0
    return checked;
}
