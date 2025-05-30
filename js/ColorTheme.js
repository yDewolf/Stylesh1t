const DARK_THEME_CSS = "style/themes/dark_theme.css";
const TRANSITION_TIME_MS = 100;

let head = document.getElementsByTagName("head")[0];

const TRANSITION_CSS = "*{transition: color, background-color " + TRANSITION_TIME_MS + "ms}";

let dark_theme_link = null;
let transition_style = null;

function getTheme() {
    let root = document.querySelector(":root");
}

function swapTheme() {
    if (dark_theme_link != null) {
        head.removeChild(dark_theme_link);
        dark_theme_link = null;

        placeTransitionCSS();
        window.setTimeout(removeTransitionCSS, TRANSITION_TIME_MS * 2);
        
        return;
    }

    let link_css = document.createElement("link");
    link_css.rel = "stylesheet";
    link_css.type = "text/css";
    link_css.href = DARK_THEME_CSS;

    dark_theme_link = link_css;

    head.appendChild(link_css);

    placeTransitionCSS();
    window.setTimeout(removeTransitionCSS, TRANSITION_TIME_MS * 2);
}

function placeTransitionCSS() {
    transition_style = document.createElement("style");
    head.appendChild(transition_style);
    transition_style.textContent = TRANSITION_CSS;
}

function removeTransitionCSS() {
    if (transition_style != null) {
        head.removeChild(transition_style);
        transition_style = null;

        return;
    }
}