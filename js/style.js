
 var montant = 0;
//bouton like
var btnLike = document.getElementsByClassName('btnlike');
var etat = false;

for(var i=0;i<btnLike.length;i++){
    btnLike[i].addEventListener('click', function(e){
        e.currentTarget.style.color='red';
        if(!etat){
            e.currentTarget.style.color='red';
            etat = true;
        }
        else{
            e.currentTarget.style.color='black';
            etat = false;
        }
     }
    );
}

//bouton moins
var btnMoins = document.getElementsByClassName('moins');
var j = 0;

for(var i=0;i<btnMoins.length;i++){
    btnMoins[i].addEventListener('click', function(e){
        if(e.currentTarget.nextElementSibling.innerHTML > 0){
            e.currentTarget.nextElementSibling.innerHTML -= 1;
            e.currentTarget.parentNode.nextElementSibling.innerHTML = parseInt(e.currentTarget.parentNode.previousElementSibling.innerHTML) * parseInt(e.currentTarget.nextElementSibling.innerHTML);
        }
        }
    );
}

    //bouton plus
var btnPlus = document.getElementsByClassName('plus');

for(var i=0;i<btnPlus.length;i++){
    btnPlus[i].addEventListener('click', function(e){
        e.currentTarget.previousElementSibling.innerHTML =parseInt(e.currentTarget.previousElementSibling.innerHTML) + 1;
        e.currentTarget.parentNode.nextElementSibling.innerHTML = parseInt(e.currentTarget.parentNode.previousElementSibling.innerHTML) * parseInt(e.currentTarget.previousElementSibling.innerHTML);
        var prixArticle = document.getElementsByClassName('prix-article');
        for(var i=0;i<prixArticle.length;i++){
            montant += parseInt(prixArticle[i].innerHTML);
            console.log(montant);
        }   
        }
    );
}
