const listaNomes = JSON.parse(localStorage.getItem("listaNomes"));
const listaIdades = JSON.parse(localStorage.getItem("listaIdades"));

function exibeNomes(array1, array2) {
    const obj = {};
    for (let i = 0; i < array1.length; i++) {
        obj[array1[i]] = array2[i];
    }
    const chaveOrd = Object.keys(obj).sort();
    const objOrd = {};
    for (let chave of chaveOrd) {
        objOrd[chave] = obj[chave];
    }

    for (let chave in objOrd) {
        let liNome = document.createElement("li");
        liNome.textContent = chave;
        document.querySelector("#showNames").appendChild(liNome);

        let liIdade = document.createElement("li");
        liIdade.textContent = obj[chave];
        document.querySelector("#showAges").appendChild(liIdade);
    }
}

function menorNome(array) {
    let nomes = array.sort();
    let minor = nomes[0];
    return minor;
}

function maiorNome(array) {
    let nomes = array.sort();
    let major = nomes[nomes.length - 1];
    return major;
}

function medianaIdade(array) {
    let idadeOrd = array.sort(function (a, b) { return a - b; });
    let tamanho = idadeOrd.length;
    let mediana = (tamanho + 1) / 2;

    return idadeOrd[mediana - 1];
}

function menorIdade(array) {
    return Math.min.apply(null, array);
}

exibeNomes(listaNomes, listaIdades);

let minorName = menorNome(listaNomes);
document.querySelector("#minorName").innerHTML = "Menor nome: <span>" + minorName + "</span>";

let majorName = maiorNome(listaNomes);
document.querySelector("#majorName").innerHTML = "Maior nome: <span>" + majorName + "</span>";

let minorAge = menorIdade(listaIdades);
document.querySelector("#minorAge").innerHTML = "Menor idade: <span>" + minorAge + "</span>";

let medianAge = medianaIdade(listaIdades);
document.querySelector("#medianAge").innerHTML = "Idade mediana: <span>" + medianAge + "</span>";
