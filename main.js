const form = document.getElementById('Lista-numerica');
const nomes = [];
const numero = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionandoAsLinha();
    atualizandoLista();

})

function adicionandoAsLinha(){
    const inputNome = document.getElementById('Nome');
    const inputNumero = document.getElementById('Numero');

    if(nomes.includes(inputNome.value)) {
        alert(`O nome : ${inputNome.value} já foi inserido`)
    }
    else {
        nomes.push(inputNome.value);
        numero.push(inputNumero.value);
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }
    
}

function atualizandoLista(){
    const corpoLista = document.querySelector('tbody');
    corpoLista.innerHTML = linhas;
}