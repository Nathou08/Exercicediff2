function converter(){
    var euro = parseInt(document.getElementById("saisie").value);
    var cuivre = 0.1;
    var argent = 10;
    var or = 100;
    var platine = 5000;
    var mithril = 100000;
    var result;
    
    if(euro < argent){
        document.getElementById("resultat").value = euro+cuivre
    }
    
    alert(result);
}

