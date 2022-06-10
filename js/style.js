var btnMoins = document.getElementsByClassName('fa-circle-minus');

btnMoinws.addEventListener('click', function(e){
    var elt = e.target.nextSibling();
    var nombre = elt.parseInt()-1;
    elt.textContent=nombre;
});