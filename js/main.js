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