// ----------------------------- Exo 1 ----------------------------------------

let _listener = function(Event){
    let key_code = Event.keyCode;

    if(key_code == 13 ){
        let value = document.getElementById('c-13').value;
        let t = undefined;
        console.log(value);

        if(value < 1 || value > 3){
            document.getElementById('c-13').style.color="red";
            alert("La valeur : "+value+" N'est pas comprise entre 1 et 3");
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
            document.getElementById('c-13').style.color="black";
        }
    }
}

document.getElementById('c-13').addEventListener("click", function(){
    window.addEventListener('keydown', _listener);
})

//-----------------------------------------------------------------------------


