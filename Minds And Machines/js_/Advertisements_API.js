'use stritct'



async function API_ML() {
    //const url = `https://fathomless-hollows-78979-ecc98fbb7725.herokuapp.com?limit=10`;
    const url = `https://afiliadosfavoritos.onrender.com/`;
    const response = await fetch(url);
    const data = await response.json();


    document.getElementById('publi8').src = data[8].image_url;
    document.getElementById('link4').href = data[8].link_url;

    document.getElementById('publi7').src = data[7].image_url;
    document.getElementById('link5').href = data[7].link_url;

    document.getElementById('publi6').src = data[6].image_url;
    document.getElementById('link6').href = data[6].link_url;

}

//document.getElementById('Autor').innerHTML="Lucas Lorenço Alves";

//API_ML();
