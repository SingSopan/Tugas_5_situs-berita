// Menambahkan mode gelap
document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.createElement("button");
    darkModeToggle.textContent = "Dark Mode";
    darkModeToggle.style.position = "fixed";
    darkModeToggle.style.bottom = "20px";
    darkModeToggle.style.right = "20px";
    darkModeToggle.style.padding = "10px";
    darkModeToggle.style.background = "#333";
    darkModeToggle.style.color = "#fff";
    darkModeToggle.style.border = "none";
    darkModeToggle.style.borderRadius = "5px";
    darkModeToggle.style.cursor = "pointer";
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        darkModeToggle.textContent = 
            document.body.classList.contains("dark-mode") 
            ? "Light Mode" 
            : "Dark Mode";
    });
});

// Tombol "Kembali ke Atas"
const backToTop = document.createElement("button");
backToTop.textContent = "↑";
backToTop.style.position = "fixed";
backToTop.style.bottom = "70px";
backToTop.style.right = "20px";
backToTop.style.padding = "10px";
backToTop.style.background = "#333";
backToTop.style.color = "#fff";
backToTop.style.border = "none";
backToTop.style.borderRadius = "50%";
backToTop.style.display = "none";
backToTop.style.cursor = "pointer";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Membuat popup untuk artikel
document.querySelectorAll(".news-grid article").forEach((article) => {
    article.addEventListener("click", () => {
        const popup = document.createElement("div");
        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.background = "#fff";
        popup.style.padding = "20px";
        popup.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";
        popup.style.zIndex = "1000";
        popup.style.borderRadius = "10px";

        popup.innerHTML = `
            <h2>${article.querySelector("h3").textContent}</h2>
            <p>${article.querySelector("p").textContent}</p>
            <button style="margin-top: 10px; padding: 5px 10px; background: #333; color: #fff; border: none; border-radius: 5px; cursor: pointer;">Tutup</button>
        `;

        document.body.appendChild(popup);

        const closeButton = popup.querySelector("button");
        closeButton.addEventListener("click", () => {
            document.body.removeChild(popup);
        });
    });
});
