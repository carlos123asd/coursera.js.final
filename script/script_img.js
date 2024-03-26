function shoot_functions(){
    tab_index(); //Set atribute tabindex onload
    focus_firstimg(); //Focus First Image onload
}

function change_img(element){
    var url_edit = element.src;
    document.getElementById('content_view').style.backgroundImage = 'url('+url_edit+')';
 
    document.getElementById('box_text').style.backgroundColor = "rgba(0, 0, 0, 0.212)";
    document.getElementsByTagName('span')[0].style.display = "none";
    document.getElementsByTagName('h1')[0].innerHTML = element.alt;
}

function out_img(){
    document.getElementsByTagName('span')[0].style.display = "block";
    document.getElementsByTagName('h1')[0].innerHTML = "Imagen Seleccionada";
    document.getElementById('content_view').style.backgroundImage = "url('')";
}

function focus_firstimg(){
    document.getElementsByTagName("img")[0].focus();
}

function tab_index(){
    let imgs = document.getElementsByTagName("img");
    for(let i = 0; i < imgs.length; i++){
        imgs[i].setAttribute("tabindex", i+1); //i-(i+i) form. negative value / Clean errors AXE, Element has a tabindex greater than 0
    }
}