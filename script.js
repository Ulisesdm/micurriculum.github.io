let menuInvisible = false;

//funcion que muestra o oculta el menu
function mostrarOcultarMenu(){
    if(menuInvisible){
    document.getElementById("nav").classList="";
    menuInvisible = false
    }else{
        document.getElementById("nav").classList="responsive";

    } 
}

function seleccionar(){
    //oculto el menu una que selecciono una opcion
    document.getElementById("nav").classList="";
    menuInvisible =false;
}
//funcion que aplica las animaciones de las habilidades 

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmilcss");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("c");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("te");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
        habilidades[8].classList.add("proactividad");
    }
}

//detector de scrolling para detectar la animacion
window.onscroll = function(){
    efectoHabilidades();
}