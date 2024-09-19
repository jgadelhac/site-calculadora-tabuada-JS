const formulario = document.querySelector("#formulario");
const inputN = document.querySelector("#numero");
const inputM = document.querySelector("#qtdVezes");
const tabela = document.querySelector("#resultado");

//
const criarTabela = (number, qtd) => {
    tabela.innerHTML = "";

    for(i = 1; i <= qtd; i++) {

        const resultado = number * i;

        console.log(resultado);

        const template = `<div class = "row"> 
                <div class="operation">${number} x ${i} =</div>
                <div class="result">${resultado}</div>
            </div>`;

        const parser = new DOMParser

        const htmlTemplate = parser.parseFromString(template, "text/html")

        const row = htmlTemplate.querySelector(".row")

        tabela.appendChild(row);
    }

};

//
formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const nmr = +inputN.value;

    const qtd = +inputM.value;

    if(!qtd || !nmr) return;

    criarTabela(nmr, qtd);
})