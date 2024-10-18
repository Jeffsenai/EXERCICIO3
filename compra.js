const coracao = document.getElementById("icone-coracao");
coracao.addEventListener("click", function () {
    if (coracao.src.includes("coracao.png")) {
        coracao.src = "coracaoVermelho.png"; 
    } else {
        coracao.src = "coracao.png";
    }
});
