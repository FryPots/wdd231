let parent = "";

export function setParent(object) {
    parent = object;
}

function createImage (src, alt) {
    const icon = document.createElement("img");
    icon.loading = "lazy";
    icon.src = src;
    icon.alt = alt;
    icon.classList = "icon";
    return icon
}

function checkParent(child) {
    try {
        parent.appendChild(child);
    } catch (Error) {
        console.error("Parent Element is not Defined.");
    };
}

export async function appendIcon(src, alt, caption = null) {
    const icon = createImage(src, alt);

    let child = icon;
    if (caption) {
        const figure = document.createElement("figure");
        const figcaption = document.createElement("figcaption");
        figcaption.textContent = caption;

        figure.appendChild(icon);
        figure.appendChild(figcaption);
        child = figure;
    }
    checkParent(child);
}

export async function appendText(text) {
    const child = document.createElement("p");
    child.textContent = text;
    checkParent(child);
}