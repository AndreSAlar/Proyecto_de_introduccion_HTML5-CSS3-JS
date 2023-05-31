var btnMenuOpen = document.getElementById("btnMenuOpen");
var btnMenuClose = document.getElementById("btnMenuClose");
var menuResponsive = document.getElementById("menuBar");
var enlaces = document.getElementById("enlaces");

//click para abrir
btnMenuOpen.addEventListener("click", function () {
    //menuResponsive.setAttribute("class","active");  //agregar class
    //menuResponsive.className="active"; //agregar class
    menuResponsive.classList.add("active");

});

//cerrar menu con click en boton cerrar
btnMenuClose.addEventListener("click", function () {
    menuResponsive.classList.remove("active");

});

// cerrar menú con click en cualquiera de los enlaces
enlaces.addEventListener("click", function () {
    menuResponsive.style.transitionDelay = "0.5s";
    menuResponsive.classList.remove("active");

});


// Slider de productos
var contenedor = document.querySelector(".slider"),
    btnLeft = document.getElementById("btnLeft"),
    btnRight = document.getElementById("btnRight");

btnRight.addEventListener("click", function () {
    contenedor.scrollLeft += contenedor.offsetWidth; //scroll a la izq igual a tamaño de contenedor mas el tamaño de width
});

btnLeft.addEventListener("click", function () {
    contenedor.scrollLeft -= contenedor.offsetWidth; // scrollLeft=scroll que se ha hecho hay a la izquierda. offsetWidth es el width total de la pagina
})

// VALIDACIONES DEL FORMULARIO DE CONTACTACNOS
var formulario = document.getElementById("contacto-formulario");

function validar(e) {
    var inputNombre = document.getElementById("nombre"),
        inputEmail = document.getElementById("email"),
        inputComments = document.getElementById("comentario");
    var alertError = document.getElementById("alertError"),
        alertSuccess = document.getElementById("alertSuccess");

    if (inputNombre.value == 0 || inputEmail.value == 0 || inputComments.value == 0) {
        e.preventDefault();
        /*alertError.removeAttribute('class','alert hide'); /* esta es otra forma de remover atributos */
        /*alertError.setAttribute('class','alert show'); /* esta es otra forma de agregar atributos */
        alertError.classList.remove("hide") /* esta forma elimina clases del atributo de class */
        alertError.classList.add("show"); /* esta forma agrega clases al atributo de class */
        /*alert("Datos vacios!");*/

        setTimeout(function () { /* esto es un timer para que la alerta desaparezca despues de 2000ms*/
            alertError.classList.remove("show");
            alertError.classList.add("hide");
        }, 2000)
    } else {
        e.preventDefault();
        alertSuccess.removeAttribute('class', 'alert hide');
        alertSuccess.setAttribute('class', 'alert show');
        /*alert("Datos enviados!");*/

        setTimeout(function () { /* esto es un timer para que la alerta desaparezca despues de 2000ms*/
            alertSuccess.removeAttribute('class', 'alert show');
            alertSuccess.setAttribute('class', 'alert hide');
        }, 2000)


        // con esto que sigue se vacian los datos, pero vea NOTA:
        // NOTA: se quitó el .value a la declaracion de variables porque cuando se tenia "inputNombre=document.getElementById("nombre").value", al vaciar los datos, los campos del formulario no borraban el dato escrito 
        inputNombre.value = "";
        inputEmail.value = "";
        inputComments.value = "";
    }
}

formulario.addEventListener("submit", validar);



// BOTON DE SCROLL TOP
var btnTop = document.getElementById("btn-top");

//detectando scroll en la pagina web
window.addEventListener("scroll", function () {
    var scroll = document.documentElement.scrollTop; /* es el scrol que se ha hecho en la pantalla, hacia abajo (px) */
    var fullSize = document.documentElement.offsetHeight; /* trae el height de toda la pagina (px) */
    var vpSize = document.documentElement.clientHeight; /* trae el height de lo que está visible en pantalla, es decir el VIEWPORT (px) */
    /* estando abajo del todo: clientHeight+scrollTop=offsetHeight   */

    if (scroll > 100) {
        btnTop.classList.add("show");
    } else {
        btnTop.classList.remove("show");
    }

    // modificando el boton para cuando esté el scroll abajo del TODO
    if (fullSize <= (scroll + vpSize + 40)) { // el boton se moverá hacia arriba 40px antes de llegar a abajo del todo  
        //btnTop.setAttribute.add('class','scrollFinal');
        btnTop.classList.add("scrollFinal");
    } else {
        btnTop.classList.remove("scrollFinal");
    }
});

// detectando evento click en el boton
btnTop.addEventListener("click", function(){ 
    window.scrollTo(0,0); // en la ventana haga scroll a la posicion 0,0  

})

// ir arriba con click en logo, en pantallas <650px
var logo=document.getElementById("logo");
logo.addEventListener("click", function(){ 
    window.scrollTo(0,0); // en la ventana haga scroll a la posicion 0,0  

})






