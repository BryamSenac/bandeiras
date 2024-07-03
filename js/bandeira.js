export class Bandeira{
    constructor(nome, descricao, img){
        this.nome = nome;
        this.descrição = descricao;
        this.img = img;
    }
}

export class Bandeiras{
    constructor(){
        this.bandeiras = [
            new Bandeira(
                'JAPÃO', 
                'O Japão é um país insular localizado no leste da Ásia, composto por quatro ilhas principais: Honshu, Hokkaido, Kyushu e Shikoku. Conhecido por sua rica história e cultura, o Japão combina tradições milenares com tecnologia de ponta. Sua capital, Tóquio, é uma metrópole vibrante e um centro global de comércio e cultura. O Japão é famoso por sua gastronomia única, incluindo sushi e ramen, além de ser a terra do anime e do mangá. O país tem um sistema de transporte altamente eficiente, com trens-bala que conectam diversas regiões. A economia japonesa é a terceira maior do mundo, destacando-se em setores como automotivo e eletrônico. Além disso, o Japão é conhecido por suas paisagens naturais deslumbrantes, incluindo o Monte Fuji e os belos jardins de Kyoto.', 
                'https://imgmd.net/images/v1/guia/1698620/japao-89-cat.jpg'
            ),
            new Bandeira(
                'ALEMANHA', 
                'A Alemanha é um país localizado no centro da Europa, conhecido por sua forte economia, rica história e influência cultural. Sua capital, Berlim, é um centro de inovação, arte e história, famosa por marcos como o Portão de Brandemburgo e o Muro de Berlim. A Alemanha é a maior economia da Europa e um líder global em indústrias como automotiva, engenharia e tecnologia. O país possui uma paisagem diversificada, incluindo florestas densas, rios largos e os Alpes Bávaros. A Alemanha é famosa por seu sistema de educação e pesquisa de alta qualidade, bem como por sua herança cultural que inclui compositores como Beethoven e Bach, e eventos culturais como o Oktoberfest. Com uma história complexa, desde o Sacro Império Romano até a reunificação após a Guerra Fria, a Alemanha desempenha um papel central na política e economia europeia.', 
                'https://caianomundo-prod.imgix.net/2016/08/principaiscidadesalemanha.jpg?fm=pjpg&ixlib=php-1.2.1'
            ),
            new Bandeira(
                'FRANÇA', 
                'A França é um país localizado na Europa Ocidental, famoso por sua rica história, cultura e influência global. Sua capital, Paris, é conhecida como a "Cidade das Luzes" e é um centro mundial de arte, moda, gastronomia e cultura. A França é famosa por seus marcos icônicos, como a Torre Eiffel, o Museu do Louvre e a Catedral de Notre-Dame. O país possui uma paisagem diversificada que vai desde as praias da Côte d\'Azur até os picos dos Alpes. A culinária francesa é renomada, com pratos clássicos como croissants, queijos e vinhos finos. A França também é conhecida por seu papel histórico, desde a Revolução Francesa até sua influência nas artes e na filosofia. Além disso, é um dos maiores produtores de vinho do mundo e possui uma economia forte e diversificada.', 
                'https://wallpapers.com/images/hd/beautiful-paris-france-jgzlacsglagma91u.jpg'
            ),
        ];
    }
}