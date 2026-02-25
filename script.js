function setLang(lang) {
    document.querySelectorAll("[data-en]").forEach(el => {
        el.innerText = el.getAttribute("data-" + lang);
    });
}

function calculateROI() {
    let investment = document.getElementById("investment").value;
    let rate = document.getElementById("returnRate").value;
    let result = investment * (rate / 100);
    document.getElementById("result").innerText =
        "Estimated Annual Return: €" + result.toFixed(2);
}
