export function updateContent() {
    const now = new Date().getTime();
    window.location.href = window.location.href.split("?")[0] + "?time=" + now;
}
