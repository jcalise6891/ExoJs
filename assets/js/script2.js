// ----------------------------- Variable & Methode ---------------------------

const   t   = undefined;
let     k   = null;
let     tab = [];

function ajoutP(id,nClass,exo,message){
    let newp= document.createElement("p");
    let newt = document.createTextNode(message);
    document.getElementById(exo).appendChild(newp);
    newp.classList.add(nClass);
    newp.setAttribute("id",id);
    newp.appendChild(newt);
}

function removeP(id){
    if(document.getElementById(id) != t){
        document.getElementById(id).remove();
    }
}

function removeC(nClass){
    let elements = document.getElementsByClassName(nClass);
    while(elements.length> 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function enterTest(Event){

    let key_code = Event.keyCode;

    if(key_code == 13){
        return true;
    }
    else{
        return false;
    }
}

function estSuperieur(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}
// ----------------------------- Exo 1 ----------------------------------------

let _listenerTri_1 = function(Event){


   if(enterTest(Event)){
        let value = parseInt(document.getElementById('c-tri-1').value);

        if(Number.isInteger(value)){
            
            if(tab.length == 0){
                k = 0;
            }

            tab[k] = value;
            ajoutP('value1','pr','enon','Insertion de la valeur: '+tab[k]);

            if(tab.length > 1){

                if(document.getElementById('dResult') == t){
                    if(value == (tab[k-1]+1)){
                        if(document.getElementById('dResult') == t){
                            if(document.getElementById('cResult') == t){
                            ajoutP('cResult','rt','result','le tableau est continue');
                            }
                        }
                    }
                    else{
                        if(document.getElementById('dResult') == t){
                            removeP('cResult');
                            ajoutP('dResult','rt','result','Le contenue est discontinue');
                        }
                    }   
                }
            }

            k++;
        } 
        else{
            while(tab.length != 0){
                tab.pop();
            }
            removeC('rt');
            removeC('pr');
        }    
    }
}

document.getElementById('c-tri-1').addEventListener('click', function(){
    window.addEventListener('keydown', _listenerTri_1);
});

// ----------------------------- Exo 2 ----------------------------------------

let _listenerTri_2 = function(Event){

    let value = parseInt(document.getElementById('c-tri-2').value);

    if(enterTest(Event)){
        
    }
}