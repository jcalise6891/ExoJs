// ----------------------------- Variable & Methode ---------------------------

let k = 0;
let tab = [];
let nbChevaux = null;
let nbJouer = null;

function fact(n){
    if (n == 0) {
        return 1;
    }
    else {
        return n * fact(n-1);
    }
}


// ----------------------------- Exo 1 ----------------------------------------

let _listener13 = function(Event){
    let key_code = Event.keyCode;

    if(key_code == 13 ){
        let value = parseInt(document.getElementById('c-13').value);
        let t = undefined;

        if(Number.isInteger(value)){
            if(value < 1 || value > 3){
                document.getElementById('c-13').style.color="red";
                if(document.getElementById('value') != t){
                    document.getElementById('value').remove();
                }
            }
            else{
                if(document.getElementById('value') != t){
                    document.getElementById('value').remove();
                }
                let newp = document.createElement("p")
                let newt = document.createTextNode(" La valeur est: "+value);
                newp.setAttribute("id","value");
                newp.appendChild(newt);
                document.getElementById("exo-1").appendChild(newp);
                document.getElementById('c-13').style.color="green";
            }
        }
    }
}

document.getElementById('c-13').addEventListener("click", function(){
    window.addEventListener('keydown', _listener13);
});

//------------------------------ Exo 2 ----------------------------------------

let _listener1020 = function(Event){

    let key_code = Event.keyCode;

    if(key_code == 13 ){
        let value = parseInt(document.getElementById('c-1020').value);
        let t = undefined;
        console.log(value);

        if(Number.isInteger(value)){    
            if(document.getElementById('value2') != t){
                document.getElementById('value2').remove();
            }

            if(value < 10 || value > 20){
                document.getElementById('c-1020').style.color="red";
                if(value < 10){
                    let newp = document.createElement("p")
                    let newt = document.createTextNode("C'est plus!");

                    newp.setAttribute("id","value2");
                    newp.appendChild(newt);

                    document.getElementById("exo-2").appendChild(newp);
                }
                else if(value > 20){

                    let newp = document.createElement("p")
                    let newt = document.createTextNode("C'est moins!");

                    newp.setAttribute("id","value2");
                    newp.appendChild(newt);

                    document.getElementById("exo-2").appendChild(newp);
                }
            }
            else{
                let newp = document.createElement("p")
                let newt = document.createTextNode(" La valeur est: "+value);
                newp.setAttribute("id","value2");
                newp.appendChild(newt);
                document.getElementById("exo-2").appendChild(newp);
                document.getElementById('c-1020').style.color="green";
            }
        }
    }
}

document.getElementById('c-1020').addEventListener("click", function(){
    window.addEventListener('keydown', _listener1020);
});

//------------------------------ Exo 3 ----------------------------------------

let _listener10nb = function(Event){

    let key_code = Event.keyCode;

    if(key_code == 13 ){

        let value = parseInt(document.getElementById('c-10nb').value);
        let t = undefined;
   
        if(document.getElementById('value3') != t){
            document.getElementById('value3').remove();
        } 
        
        if(Number.isInteger(value)){
            let newp= document.createElement("p");
            let newt = document.createTextNode("Les valeurs sont: ");
            document.getElementById("exo-3").appendChild(newp);
            newp.setAttribute("id","value3");
            newp.appendChild(newt);
            
            let newvalue = value;

            for(let i = 0; i <= 10; i++){ 
                document.getElementById("value3").textContent += newvalue+", ";
                newvalue++;
                
            }
        }
    }
}

document.getElementById('c-10nb').addEventListener("click",function(){
    window.addEventListener('keydown', _listener10nb);
});

//------------------------------ Exo 5 ----------------------------------------

    let _listenertbMp = function(Event) {

        let key_code = Event.keyCode;

        if (key_code == 13){

            let value = parseInt(document.getElementById('c-tbMp').value);

            while(document.getElementsByClassName('value5').length > 0){
                document.getElementsByClassName('value5')[0].parentNode.removeChild(document.getElementsByClassName('value5')[0]);
            }
            
            if(Number.isInteger(value)){

                let newp= document.createElement("p");
                let newt = document.createTextNode("La table de "+value+" est : ");
                document.getElementById("exo-5").appendChild(newp);
                newp.classList.add("value5");
                newp.appendChild(newt);

                let newvalue = value;

                for(let i = 0; i <= 10; i++){
                    let newp = document.createElement('p');
                    let newt = document.createTextNode(value+" x "+i+" = "+(newvalue*i));

                    document.getElementById("exo-5").appendChild(newp);
                    newp.classList.add("value5");
                    newp.appendChild(newt);
                }
            }
        }
    }

    document.getElementById('c-tbMp').addEventListener("click",function(){
        window.addEventListener('keydown', _listenertbMp);
    });

//------------------------------ Exo 6 ----------------------------------------

    let _listenerad = function(Event){

        let key_code = Event.keyCode;
        

        if(key_code == 13){

            let value = parseInt(document.getElementById('c-ad').value);
            const t = undefined;

            if(document.getElementById('value6') != t){
                document.getElementById('value6').remove();
            } 
            
            if(Number.isInteger(value)){
                
                let resultat = 0;
    
                for(let i = 0; i <= value; i++){ 
                    resultat += i;
                }

                let newp= document.createElement("p");
                let newt = document.createTextNode("Le résultat est: "+resultat);
                document.getElementById("exo-6").appendChild(newp);
                newp.setAttribute("id","value6");
                newp.appendChild(newt);
            }
        }
    }

    document.getElementById('c-ad').addEventListener("click",function(){
        window.addEventListener('keydown', _listenerad);
    });

//------------------------------ Exo 7 ----------------------------------------

let _listenerfac = function(Event){

    let key_code = Event.keyCode;
    

    if(key_code == 13){

        let value = parseInt(document.getElementById('c-fac').value);
        const t = undefined;

        if(document.getElementById('value7') != t){
            document.getElementById('value7').remove();
        } 
        
        if(Number.isInteger(value)){
            
            let resultat = 1;

            for(let i = 1; i <= value; i++){ 
                resultat *= i;
            }

            let newp= document.createElement("p");
            let newt = document.createTextNode("Le résultat est: "+resultat);
            document.getElementById("exo-7").appendChild(newp);
            newp.setAttribute("id","value7");
            newp.appendChild(newt);
        }
    }
}

document.getElementById('c-fac').addEventListener("click",function(){
    window.addEventListener('keydown', _listenerfac);
});

//------------------------------ Exo 8 ----------------------------------------

let _listenercomp = function(Event){

    let key_code = Event.keyCode; 
    const t = undefined;

    if (key_code == 13){

        let value = parseInt(document.getElementById('c-comp').value);

        let result = null;

        if(document.getElementById('value8') == t){
            let newp= document.createElement("p");
            let newt = document.createTextNode("Des valeurs suivantes: ");
            document.getElementById("exo-8").appendChild(newp);
            newp.setAttribute("id","value8");
            newp.appendChild(newt);
        }

        if(Number.isInteger(value)){
            if(tab.length <= 4){
                tab[k] = value;
                k++;
                console.log(tab);
                console.log(tab.length);
                document.getElementById("value8").textContent += value+", ";
            }
            else{
                for(let j = 0; j < tab.length; j++){
                    if(tab[j] > result){
                        result = tab[j];
                    }
                }
                let newp= document.createElement("p");
                let newt = document.createTextNode("Le plus grand est: "+result);
                document.getElementById("exo-8").appendChild(newp);
                newp.setAttribute("id","value8-1");
                newp.appendChild(newt);

                k=0;
            }
        }
        else{
            if(document.getElementById('value8') != t){
                document.getElementById('value8').remove();
                if(document.getElementById('value8-1')){
                    document.getElementById('value8-1').remove();
                }
            }
            while(tab.length > 0)
            {
                tab.pop();
            } 
        }
    }
}

document.getElementById('c-comp').addEventListener('click', function(){
    window.addEventListener("keydown", _listenercomp);
});

//------------------------------ Exo 9 ----------------------------------------

let _listenerNbChevaux = function(Event){

    let key_code = Event.keyCode; 
    const t = undefined;

    if (key_code == 13){
        value = parseInt(document.getElementById('c-nbCh').value);

        if(Number.isInteger(value)){

            if(nbChevaux != value){

                if(document.getElementById('value9') != t){
                    document.getElementById('value9').remove();
                }

                nbChevaux = value;

                let newp= document.createElement("p");
                let newt = document.createTextNode("Il y à "+nbChevaux+" chevaux dans cette course");
                document.getElementById("exo-9").appendChild(newp);
                newp.setAttribute("id","value9");
                newp.appendChild(newt);
            }
        }
        else{
            if(document.getElementById('value9') != t){
                document.getElementById('value9').remove();
            }
        
        }
    }
}

let _listenerNbJouer = function(Event){

    let key_code = Event.keyCode; 
    const t = undefined;

    if (key_code == 13){
        value = parseInt(document.getElementById('c-nbPl').value);

        if(Number.isInteger(value)){

            if(nbJouer != value){

                if(document.getElementById('value9-1') != t){
                    document.getElementById('value9-1').remove();
                }

                nbJouer = value;

                let newp= document.createElement("p");
                let newt = document.createTextNode("Vous voulez jouer "+nbJouer+" chevaux");
                document.getElementById("exo-9").appendChild(newp);
                newp.setAttribute("id","value9-1");
                newp.appendChild(newt);
            }
        }
        else{
            if(document.getElementById('value9-1') != t){
                document.getElementById('value9-1').remove();
            }
        
        }
    }
}

let _listenerCalc = function(){

    const t = undefined;
    
        if(nbChevaux != null && nbJouer != null){
            if(document.getElementById('value9') != t && document.getElementById('value9-1') != t){

                if(document.getElementById('value9-2') != t){
                    document.getElementById('value9-2').remove();
                }

                order = fact(nbChevaux) / fact((nbChevaux - nbJouer));
                disorder = fact(nbChevaux) / (fact(nbJouer) * fact((nbChevaux - nbJouer)));

                let newp= document.createElement("p");
                let newt = document.createTextNode("Vous avez 1/"+order+" de gagner dans l'ordre et 1/"+disorder+" dans le désordre");
                document.getElementById("exo-9").appendChild(newp);
                newp.setAttribute("id","value9-2");
                newp.appendChild(newt);
            }
        }


}

document.getElementById('c-nbPl').addEventListener('click',function(){
    window.addEventListener("keydown", _listenerNbJouer);
});

document.getElementById('c-nbCh').addEventListener('click',function(){
    window.addEventListener("keydown", _listenerNbChevaux);
});

document.getElementById('chance').addEventListener('click', _listenerCalc);
