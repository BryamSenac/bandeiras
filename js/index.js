import { Bandeiras } from './bandeira.js';
import { ScrollableHeader } from './scroll_header.js';

document.addEventListener("DOMContentLoaded", function () {
    const bandeiras_infos = new Bandeiras();
    bandeiras_infos.gerarInfos();
    window.attBandeira = bandeiras_infos.attBandeira.bind(bandeiras_infos);
    const scrollHeader = new ScrollableHeader('mini_bandeiras');
});