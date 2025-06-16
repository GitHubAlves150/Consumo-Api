'use strict'
let c =1;

document.getElementById('Radio1').checked = true;

setInterval(function() {
    nextImage();
    
}, 3000);

function nextImage(){
    c++;
    if(c>5){
        c=1;
    }    
    document.getElementById('Radio'+c).checked=true;
}

