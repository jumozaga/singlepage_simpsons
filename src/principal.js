// Função para mostrar apenas a seção especificada
function mostrarSecao(secaoId) {
    const secoes = document.querySelectorAll(".content");
    secoes.forEach((secao) => {
        secao.style.display = "none";
    });

    const secaoSelecionada = document.getElementById(secaoId);
    if (secaoSelecionada) {
        secaoSelecionada.style.display = "block";
    }

    // Fechar o menu hamburguer após a seleção de uma opção
    const menuToggle = document.getElementById("menu-toggle");
    if (menuToggle.checked) {
        menuToggle.checked = false;
    }
}

// Adicione um ouvinte de evento para os links do menu hamburguer
const linksDoMenu = document.querySelectorAll(".menu-items a");
linksDoMenu.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        mostrarSecao(link.getAttribute("href").slice(1));
    });
});

// Adicione um ouvinte de evento para os links do menu da barra
const linksDoMenuBar = document.querySelectorAll(".menu-bar a");
linksDoMenuBar.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        mostrarSecao(link.getAttribute("href").slice(1));
    });
});

mostrarSecao("home");




