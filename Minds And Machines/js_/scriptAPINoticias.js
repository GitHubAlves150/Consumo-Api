'use strict'

const img_NoticeA = document.getElementById('Imagem-A');
const img_NoticeB = document.getElementById('Imagem-B');
const img_NoticeC = document.getElementById('Imagem-C');

const manchetA = document.getElementById('manchet-A');
const manchetB = document.getElementById('manchet-B');
const manchetC = document.getElementById('manchet-C');



let string = "";



function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function NoticiasNew() {
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



        img_NoticeA.src = data.news[3].image;
        manchetA.textContent = data.news[3].title;

        img_NoticeB.src = data.news[1].image;
        manchetB.textContent = data.news[1].title;

        img_NoticeC.src = data.news[2].image;
        manchetC.textContent = data.news[2].title;

        for (let c = 0; c < 3; c++) {
            await delay(2000);
            link1.href = data.news[4].url;
            IMGlink1.src = data.news[4].image;
            TituloDesc_.textContent = data.news[4].title;
            string = data.news[4].text;
            NoticeDesc_.textContent = string.slice(0, 100) + '...';
            console.log("string..", string);

            await delay(2000);
            link1.href = data.news[5].url;
            IMGlink1.src = data.news[5].image;
            TituloDesc_.textContent = data.news[5].title;
            string = data.news[5].text;
            NoticeDesc_.textContent = string.slice(0, 100) + '...';
        }

    }
    catch (error) {
        alert("Ecedeu as requisições da API");

    }

}


NoticiasNew();