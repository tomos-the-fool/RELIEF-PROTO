// 共通パーツ読み込み
document.addEventListener("DOMContentLoaded", () => {
    includeHTML("#nav", "components/nav.html");
    includeHTML("#footer", "components/footer.html");
});

function includeHTML(targetSelector, filePath) {
    const url = new URL(filePath, location.href);
    fetch(url.href)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${filePath}`);
            return response.text();
        })
        .then(data => {
            document.querySelector(targetSelector).innerHTML = data;
        })
        .catch(err => console.error("Include error:", err));
}