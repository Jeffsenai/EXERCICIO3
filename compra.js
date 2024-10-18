const coracao = document.getElementById("icone-coracao");
coracao.addEventListener("click", function () {
    if (coracao.src.includes("CORACAO/coracao.png")) {
        coracao.src = "CORACAO/coracaoVermelho.png"; 
    } else {
        coracao.src = "CORACAO/coracao.png";
    }
});

