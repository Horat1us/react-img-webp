export function canUseWebP(): boolean {
    if (typeof document !== "object") {
        return false;
    }

    const canvas = document.createElement("canvas");
    if (!canvas.getContext || !canvas.getContext("2d")) {
        return false;
    }
    return canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
}
