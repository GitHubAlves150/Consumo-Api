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
        //pub_8510193642cbb2ef57a91a9b5cef6a6ecac64
        //const APIKey = '2708f2cc67b64745be4c29e748e7277d';
        //const url = `https://api.worldnewsapi.com/search-news?api-key=${APIKey}&text=tesla`;
        const url = `https://newsdata.io/api/1/latest?apikey=pub_8510193642cbb2ef57a91a9b5cef6a6ecac64&q=motores`;

        //const url = `https://gnews.io/api/v4/search?q=maquinas&apikey=6d6bdcface1b61181abcfbc925d9022f`;
        const response = await fetch(url);
        const data = await response.json();
        console.log("--->>>>:", data.results[2]);

        if (data.results < 0) {
            alert("sem dados..");
        }
        array_ = data.results;//Armazena arrays de noticias

        //console.log("=====: ", data);
        for (let c = 4; c < 10; c++) {
            await delay(9000);
            img_.src = data.results[c].image_url;
            sub_title.textContent = data.results[c].title;
            document.getElementById('ancora').href=data.results[c].link;
            //img_.src=data.pages[c]
        }



    }
    catch (error) {
        alert("Erro no arquivo js gnews");
    }
}

Slides();
