'use strict'

const Noticia_1_ = document.getElementById('Noticia_1_img');
const Descricao_1_ = document.getElementById('Descricao_1');
//=====================================================================================
const Noticia_2_ = document.getElementById('Noticia_2_img');
const Descricao_2_ = document.getElementById('Descricao_2');
//=====================================================================================
const Noticia_3_ = document.getElementById('Noticia_3_img');
const Descricao_3_ = document.getElementById('Descricao_3');
//=====================================================================================
const Title_Notice_1_ = document.getElementById('Title_Notice_1');
const Author_1_ = document.getElementById('Author_1');
const Word_key_1_ = document.getElementById('Word_key_1');
//=====================================================================================
const Title_Notice_2_ = document.getElementById('Title_Notice_2');
const Author_2_ = document.getElementById('Author_2');
const Word_key_2_ = document.getElementById('Word_key_2');
//=====================================================================================
const Title_Notice_3_ = document.getElementById('Title_Notice_3');
const Author_3_ = document.getElementById('Author_3');
const Word_key_3_ = document.getElementById('Word_key_3');
//=====================================================================================


async function Noticias_Na_Home() {
    const Title = 'Computer';
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts|pageimages&exintro=true&explaintext=true&titles=${Title}&pithumbsize=400&origin=*`;


    try {
        const response = await fetch(url);
        const data = await response.json();

        //---como acessar o 'title'---
        const pages_ = data.query.pages;
        //2-Pegue o ID da pagina (a chave do objeto 'pages')
        //Object.keys(pages) retorna um array com as chaves (ID das paginas).
        //Como só estamos buscando uma pagina por vez. Pegamos a primeira chave [0]
        const pageID = Object.keys(pages_);
        //3-Acesse o objeto da pagina especifica usando o ID
        const page_ = pages_[pageID]; https://www.youtube.com/watch?v=083T8Ej5K0o&list=PLZwDAiwajSlGZH0F-Bsp4L1DRWtJ-YPGx
        //4-Agora voce pode acessar o 'title'
        //console.log(">>>", data.query.pages);
        //console.log("Título da pagina: ", page_.extract);
        //---------DOM-------
        //------------------------------------------------------------------------------
        //--Noticia-1
        if (!page_.thumbnail) {
            alert('Error load image');
        }
        Noticia_1_.src = page_.thumbnail.source;
        const string = page_.extract;
        Descricao_1_.textContent = string.slice(0, 500) + " .....continua...";
        document.getElementById('Noticia_0').href = "https://commons.wikimedia.org/wiki/File:ENIAC-changing_a_tube_(cropped).jpg";
        
        //--Fim Noticia-1
        //------------------------------------------------------------------------------


    }
    catch (error) {
        console.log("Erro ao carregar a API: Noticias_Na_Home");
    }
}
//========================================================================================================
async function Noticias_Na_Home_2() {
    const Title = 'PageRank';

    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts|pageimages&exintro=true&explaintext=true&titles=${Title}&pithumbsize=400&origin=*`;


    try {
        const response = await fetch(url);
        const data = await response.json();

        //---como acessar o 'title'---
        const pages_ = data.query.pages;
        //2-Pegue o ID da pagina (a chave do objeto 'pages')
        //Object.keys(pages) retorna um array com as chaves (ID das paginas).
        //Como só estamos buscando uma pagina por vez. Pegamos a primeira chave [0]
        const pageID = Object.keys(pages_);
        //3-Acesse o objeto da pagina especifica usando o ID
        const page_ = pages_[pageID];
        //4-Agora voce pode acessar o 'title'
        //console.log(">>>", data.query.pages);
        //console.log("Título da pagina: ", page_.extract);
        //---------DOM-------
        //------------------------------------------------------------------------------
        //--Noticia-1
        if (!page_.thumbnail) {
            alert('Error load image');
        }
        Noticia_2_.src = page_.thumbnail.source;
        const string_ = page_.extract;
        Descricao_2_.textContent = string_.slice(0, 500) + " .....continua...";
        document.getElementById('Noticia_1').href= "https://en-m-wikipedia-org.translate.goog/wiki/PageRank?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc";
        //--Fim Noticia-1
        //------------------------------------------------------------------------------


    }
    catch (error) {
        console.log("Erro ao carregar a API: Noticias_Na_Home_2");
    }
}
//===========================================================================================================
async function Noticias_Na_Home_3() {
    const Title = 'Charles_Babbage';
    const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts|pageimages&exintro=true&explaintext=true&titles=${Title}&pithumbsize=400&origin=*`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        //---como acessar o 'title'---
        const pages_ = data.query.pages;
        //2-Pegue o ID da pagina (a chave do objeto 'pages')
        //Object.keys(pages) retorna um array com as chaves (ID das paginas).
        //Como só estamos buscando uma pagina por vez. Pegamos a primeira chave [0]
        const pageID = Object.keys(pages_);
        //3-Acesse o objeto da pagina especifica usando o ID
        const page_ = pages_[pageID];
        //4-Agora voce pode acessar o 'title'
        //console.log(">>>", data.query.pages);
        //console.log("Título da pagina: ", page_.extract);
        //---------DOM-------
        //------------------------------------------------------------------------------
        //--Noticia-1
        if (!page_.thumbnail) {
            alert('Error load image');
        }
        Noticia_3_.src = page_.thumbnail.source;
        const string_ = page_.extract;
        Descricao_3_.textContent = string_.slice(0, 500) + " .....continua...";
        document.getElementById('Noticia_3').href="https://en-m-wikipedia-org.translate.goog/wiki/Charles_Babbage?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc";
        //--Fim Noticia-1
        //------------------------------------------------------------------------------


    }
    catch (error) {
        console.log("Erro ao carregar a API:Noticias_Na_Home_3");
    }
}
//======================================================================================================
//===========Ultimas noticias da Home===================================================================
async function last_Notice() {
    const key_App = '6d6bdcface1b61181abcfbc925d9022f';
    const Title = 'Machines';
    const url = `https://gnews.io/api/v4/search?q=${Title}&apikey=${key_App}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        Title_Notice_1_.textContent = data.articles[0].title;
        Author_1_.textContent = data.articles[0].source.name;
        Word_key_1_.textContent = data.articles[0].publishedAt + "..to be continue";
        //console.log(">>", data.articles[0]);
        //------------------------------------------------------------------------------
        Title_Notice_2_.textContent = data.articles[1].title;
        Author_2_.textContent = data.articles[1].source.name;
        Word_key_2_.textContent = data.articles[1].publishedAt + "..to be continue";
        //------------------------------------------------------------------------------
        Title_Notice_3_.textContent = data.articles[3].title;
        Author_3_.textContent = data.articles[3].source.name;
        Word_key_3_.textContent = data.articles[3].publishedAt + "..to be continue";
        //------------------------------------------------------------------------------






    }
    catch (error) {
        console.log("Erro ao carregar a API:last_Notice");
    }
}
//===================Chamada========================================================================================
Noticias_Na_Home();
Noticias_Na_Home_2();
Noticias_Na_Home_3();
last_Notice();