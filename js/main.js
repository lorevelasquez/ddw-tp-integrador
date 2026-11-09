'use strict';

//ARRAYS

const arrRecetas = [
    {id: "pesto", titulo: "Fideos con Pesto", imagen: "img/pesto.jpg", url:"https://cookpad.com/ar/recetas/1634695"},
    {id: "pollocurry", titulo: "Pollo al Curry", imagen: "img/pollocurry.jpg", url:"https://cookpad.com/ar/recetas/24913123?ref=search&search_term=pollo+al+curry"},
    {id: "ensaladaatunypalta", titulo: "Ensalada de Atún y Palta", imagen: "img/ensaladaatunypalta.jpg", url:"https://cookpad.com/ar/recetas/25136195?ref=search&search_term=ensalada+at%C3%BAn+y+palta"},
    {id: "ClubSandwich", titulo: "Club Sandwich", imagen: "img/ClubSandwich.jpg", url:"https://cookpad.com/ar/recetas/14427260?ref=search&search_term=club+sandwich"}
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
git 
//FUNCIONES

function renderizarGaleria() {

    for (let galeriafoto of arrGaleria) {

        const imgGaleria = document.createElement('img');
        imgGaleria.src = galeriafoto.src;
        imgGaleria.alt = galeriafoto.alt;
        galeriaContenedor.appendChild(imgGaleria);


}
}

renderizarGaleria();