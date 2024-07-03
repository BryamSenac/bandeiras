class Bandeira{
    constructor(nome, descricao, img){
        this.nome = nome;
        this.descrição = descricao;
        this.img = img;
    }
}

class Bandeiras{
    constructor(){
        this.bandeiras = [
            new Bandeira ('JAPÃO', 'blablablablablablablablablablablablablablablabalbalablabalbalablablablablabalbal', 'https://imgmd.net/images/v1/guia/1698620/japao-89-cat.jpg'),
            new Bandeira ('ALEMANHA', 'blablablablablablablablablablablablablablablabalbalablabalbalablablablablabalbal', 'https://caianomundo-prod.imgix.net/2016/08/principaiscidadesalemanha.jpg?fm=pjpg&ixlib=php-1.2.1'),
            new Bandeira ('FRANÇA', 'blablablablablablablablablablablablablablablabalbalablabalbalablablablablabalbal', 'https://wallpapers.com/images/hd/beautiful-paris-france-jgzlacsglagma91u.jpg'),
        ];
    }
}