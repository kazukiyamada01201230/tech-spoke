document.addEventListener("DOMContentLoaded", function() {
    const scrollBtn = document.getElementById("scrollTopBtn");

    if (!scrollBtn) return; // ボタンがないページは何もしない

    // スクロールで表示/非表示切替
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    // クリックでトップへスムーズスクロール
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});