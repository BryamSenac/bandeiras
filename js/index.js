import { Bandeiras } from './bandeira.js';

const bandeiras_infos = new Bandeiras();    
let bandeira_id = 0;

function gerarInfos() {
    let nome_pais = document.getElementById('nome_pais');
    let explicacao_pais = document.getElementById('explicacao_pais');
    let body = document.getElementById('body');

    nome_pais.textContent = bandeiras_infos.bandeiras[bandeira_id].nome;
    explicacao_pais.textContent = bandeiras_infos.bandeiras[bandeira_id].descrição;
    body.style.backgroundImage = 'url("' + bandeiras_infos.bandeiras[bandeira_id].img + '");';
}

window.attBandeira = attBandeira;
function attBandeira(index){
    bandeira_id = index;
    document.getElementById('bandeiras').style.top = '-' + (73 * index) + 'vh';
    gerarInfos();
}

document.addEventListener("DOMContentLoaded", function () {
    gerarInfos();
});