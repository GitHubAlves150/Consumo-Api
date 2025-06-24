'use strict'
const sub_title = document.getElementById('subtitle_id');
const img_ = document.getElementById('img_src');
let counter = 1;
let array_ = []//Array  para armazenar dados da api.

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function Slides() {
    try {
        //const APIKey = '2708f2cc67b64745be4c29e748e7277d';
        //const url = `https://api.worldnewsapi.com/search-news?api-key=${APIKey}&text=tesla`;

        const url = `https://gnews.io/api/v4/search?q=maquinas&apikey=6d6bdcface1b61181abcfbc925d9022f`;
        const response = await fetch(url);
        const data = await response.json();


        if (data.news && data.length < 0) {
            alert("sem dados..");
        }
        array_ = data.news;//Armazena arrays de noticias

        //console.log("=====: ", data);
        for (let c = 4; c < 10; c++) {
            await delay(5000);
            img_.src=data.articles[c].image;
            sub_title.textContent=data.articles[c].title;
            //img_.src=data.pages[c]
        }
        console.log("---:", data);


    }
    catch (error) {
        alert("Erro no arquivo js");
    }
}

Slides();
