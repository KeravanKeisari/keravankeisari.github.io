document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    if(localStorage.getItem("kirjautunut") === "kyllä"){
        document.getElementById("tervetuloteksti").textContent += localStorage.getItem("nimi");
        document.getElementById("kirjautumislomake").style.display ="none";
    }
    else{
        document.getElementById("kirjauduUlos").style.display ="none";
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kyllä")
}

function kirjauduUlos(){  
    localStorage.clear("nimi", "kirjautunut")
}