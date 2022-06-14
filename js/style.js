
 var montant = 0;

function totalCommade(){
    var prixArticle = document.getElementsByClassName('prix-total');
        for(var i=0;i<prixArticle.length;i++){
            montant = montant + parseInt(prixArticle[i].innerHTML);
        } 
        total.innerHTML = montant; 
        montant = 0; 
}
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

for(var i=0;i<btnMoins.length;i++){
    btnMoins[i].addEventListener('click', function(e){
        if(e.currentTarget.nextElementSibling.innerHTML > 0){
            e.currentTarget.nextElementSibling.innerHTML -= 1;
            e.currentTarget.parentNode.nextElementSibling.innerHTML = parseInt(e.currentTarget.parentNode.previousElementSibling.innerHTML) * parseInt(e.currentTarget.nextElementSibling.innerHTML);
            totalCommade();
        }
        }
    );
}

    //bouton plus
var btnPlus = document.getElementsByClassName('plus');
var total = document.getElementById('total');

for(var i=0;i<btnPlus.length;i++){
    btnPlus[i].addEventListener('click', function(e){
        e.currentTarget.previousElementSibling.innerHTML =parseInt(e.currentTarget.previousElementSibling.innerHTML) + 1;
        e.currentTarget.parentNode.nextElementSibling.innerHTML = parseInt(e.currentTarget.parentNode.previousElementSibling.innerHTML) * parseInt(e.currentTarget.previousElementSibling.innerHTML);
        totalCommade();
        }
    );
}

  //bouton supprimer
  var btnSupprimer = document.getElementsByClassName('supprimer');
  
  
  for(var i=0;i<btnSupprimer.length;i++){
    btnSupprimer[i].addEventListener('click', function(e){
        e.currentTarget.parentNode.remove();
        totalCommade();
        }
      );
  }  
