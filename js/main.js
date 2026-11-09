'use strict';

//ARRAYS

const arrRecetas = [
    {id: "pesto", titulo: "Fideos con Pesto", imagen: "img/fideosconpesto.jpg", url:"https://cookpad.com/ar/recetas/1634695"},
    {id: "pollocurry", titulo: "Pollo al Curry", imagen: "img/polloalcurry.jpg", url:"https://cookpad.com/ar/recetas/24913123?ref=search&search_term=pollo+al+curry"},
    {id: "ensaladaatunypalta", titulo: "Ensalada de Atún y Palta", imagen: "img/atunypaltasalad.jpg", url:"https://cookpad.com/ar/recetas/25136195?ref=search&search_term=ensalada+at%C3%BAn+y+palta"},
    {id: "ClubSandwich", titulo: "Club Sandwich", imagen: "img/Clubsandwich.jpg", url:"https://cookpad.com/ar/recetas/14427260?ref=search&search_term=club+sandwich"}
];


const arrGaleria = [
    {src:"img/cuchillo_japones.jpg", alt:"Cuchillo Japonés"},
    {src:"img/paltas.jpg", alt:"Paltas"},
    {src:"img/cucharones.jpg", alt:"Cucharones de madera"},
    {src:"img/pansalvado.jpg", alt:"Pan de salvado"},
    {src:"img/sartengrill.jpg", alt:"Sartén grill"},
    {src:"img/pesto.jpg", alt:"Salsa pesto"}
];

//VARIABLES

const recetasContenedor = document.getElementById('recetas-contenedor');
const galeriaContenedor = document.getElementById('galeria-contenedor');

//FUNCIONES


        //Renderizado de la Galería
function renderizarGaleria() {

    for (let galeriafoto of arrGaleria) {

        const imgGaleria = document.createElement('img');
        imgGaleria.src = galeriafoto.src;
        imgGaleria.alt = galeriafoto.alt;
        galeriaContenedor.appendChild(imgGaleria);
}
}

        //Renderizado de las Recetas
function renderizarRecetas() {

    for (let receta of arrRecetas) {

        const cardReceta = document.createElement("figure");
        cardReceta.classList.add("contenedorfoto");
        recetasContenedor.appendChild(cardReceta);

            const cardAnchor = document.createElement("a");
            cardAnchor.href = receta.url;
            cardAnchor.target = "_blank";
            cardReceta.appendChild(cardAnchor);

                const cardArticle = document.createElement("article");
                cardArticle.classList.add("card");
                cardArticle.id = receta.id;

                // Uso IA en esta línea: en el array guardo solo la ruta de la foto.
                // Para poner una foto de fondo con CSS no alcanza con la ruta,
                // hay que escribirla como url("ruta"). Armo el texto con "${}""
                // para meter la ruta adentro del url().
                cardArticle.style.backgroundImage = `url("${receta.imagen}")`;
                cardAnchor.appendChild(cardArticle);                          
                
            
            const cardFigCaption = document.createElement("figcaption");
            cardFigCaption.classList.add("nombre-receta");
            cardFigCaption.textContent = receta.titulo;
            cardReceta.appendChild(cardFigCaption);
    }
}

renderizarRecetas();
renderizarGaleria();

//FAVORITOS (localStorage)

const CLAVE_FAVORITOS = "cocinaysabor_favoritos";

// lee del localStorage los ids guardados como favoritos
// si todavia no hay nada guardado, devuelve un array vacío
function cargarFavoritos() {
    const guardado = localStorage.getItem(CLAVE_FAVORITOS);
    if (guardado === null) {
        return [];
    }
    return JSON.parse(guardado);
}

// guarda el array de favoritos actual en localStorage
function guardarFavoritos() {
    localStorage.setItem(CLAVE_FAVORITOS, JSON.stringify(favoritos));
}

// deja el boton con el texto y el estilo que le corresponde
// segun si ese id esta o no en favoritos.
function pintarBoton(boton, id) {
    if (favoritos.indexOf(id) === -1) {
        boton.textContent = "☆";
        boton.style.backgroundColor = "";
        boton.style.color = "";
    } else {
        boton.textContent = "★";
        boton.style.backgroundColor = "#f6c343";
        boton.style.color = "#0d0d0d";
    }
}

// Agrega un boton de favorito a cada card de receta ya renderizada.
// No toca renderizarRecetas(): trabaja sobre lo que esa funcion
// ya dejo armado en el DOM.
function renderizarFavoritos() {
    for (let i = 0; i < arrRecetas.length; i++) {
        const receta = arrRecetas[i];
        const figure = recetasContenedor.children[i];

        const btnFavorito = document.createElement("button");
        btnFavorito.type = "button";
        btnFavorito.classList.add("btn-favorito");
        pintarBoton(btnFavorito, receta.id);

        btnFavorito.addEventListener("click", function () {
            if (favoritos.indexOf(receta.id) === -1) {
                favoritos.push(receta.id);
            } else {
                favoritos.splice(favoritos.indexOf(receta.id), 1);
            }
            guardarFavoritos();
            pintarBoton(btnFavorito, receta.id);
            aplicarFiltroFavoritas();
        });

        figure.appendChild(btnFavorito);
    }
}

const favoritos = cargarFavoritos();
renderizarFavoritos();

//FILTRO: VER SOLO FAVORITAS

const btnFiltroFavoritas = document.getElementById("btn-filtro-favoritas");

// true = en este momento se estan mostrando solo las favoritas.
let mostrandoSoloFavoritas = false;

// Recorre las cards ya renderizadas y, segun el filtro activo,
// oculta (display: none) o muestra (display: "") cada una.
function aplicarFiltroFavoritas() {
    for (let i = 0; i < arrRecetas.length; i++) {
        const receta = arrRecetas[i];
        const figure = recetasContenedor.children[i];

        if (mostrandoSoloFavoritas && favoritos.indexOf(receta.id) === -1) {
            figure.style.display = "none";
        } else {
            figure.style.display = "";
        }
    }
}

btnFiltroFavoritas.addEventListener("click", function () {
    mostrandoSoloFavoritas = !mostrandoSoloFavoritas;

    if (mostrandoSoloFavoritas) {
        btnFiltroFavoritas.textContent = "Ver todas";
    } else {
        btnFiltroFavoritas.textContent = "Ver solo favoritas";
    }

    aplicarFiltroFavoritas();
});