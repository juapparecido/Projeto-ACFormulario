const listaNomes = [];
const listaIdades = [];

function capitalizeString(nome) {
    let string = nome.toLowerCase();
    let final = string[0].toUpperCase() + string.slice(1);
    return final;
}

function pegarDados() {
    let nome = document.querySelector("#iname").value;
    let idade = document.querySelector("#iage").value;

    if (nome == "" || idade == "") {
        alert("Você deixou algum espaço em branco, por favor, preencha-os corretamente!");
        return false;
    }

    let nomeM = capitalizeString(nome);

    listaNomes.push(nomeM);
    listaIdades.push(idade);

    document.querySelector("#formulario").reset();

    console.log(listaNomes);
    console.log(listaIdades);

    if (listaNomes.length == 5) {

        localStorage.setItem("listaNomes", JSON.stringify(listaNomes));
        localStorage.setItem("listaIdades", JSON.stringify(listaIdades));

        alert("Obrigado por preencher o formulário!");
        window.location.href = "pagina2.html";
    }
};
