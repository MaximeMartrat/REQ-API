let produits;
let panier = [];
// si il y a deja des infos dans le localStorage
if (localStorage.getItem("prods")) {
    produits = JSON.parse(localStorage.getItem("prods"));
}
else {
    // première utilisation(pas de données dans le localStorage)
    produits = [];
}
createTable();
// quand le bouton "Ajouter un produit" est cliqué
valid.addEventListener("click", function () {
    // initialisation de l'état
    if (produits.length == 0) {
        // envoi du Json
        newpdt = inputsToJson();
        // push dans le tableau
        produits.push(newpdt);
        // stockage dans le localStorage
        localStorage.setItem("prods", JSON.stringify(produits));
    }
    // déjà des produits en magasin, on vérifie si de nouveaux produits existent déjà
    else {
        let counted = 0; // sert de drapeau pour vérifier si la fin du tableau est atteinte 
        // on loope sur les produits
        for (i = 0; i < produits.length; i++) {
            // si le produit existe déjà on ajoute aux stocks
            if (produits[i]['nom'] == document.getElementById("nom").value
                &&
                produits[i]['ref'] == document.getElementById("ref").value) {
                produits[i]['stock'] += parseInt(document.getElementById("stock").value);
                localStorage.setItem("prods", JSON.stringify(produits));
            }
            // sinon on continu le processus normal 
            else {
                // pas celui-ci mais peut-être le suivant ?
                counted++;
            }
        }// fin de la loop 
        // boucle terminée, cocher le drapeau "counted" (fin atteinte sans trouver d'occurrence de produit)
        if (counted === produits.length) {
            newpdt = inputsToJson();
            produits.push(newpdt);
            // stocker dans le localStorage
            localStorage.setItem("prods", JSON.stringify(produits));
        } // fin du if
    } // fin du else
    createTable();
}); // fin de la fonction

// fonction pour convertir les données en Json
function inputsToJson() {
    // recupération des inputs 
    let nom = document.getElementById("nom").value;
    let ref = document.getElementById("ref").value;
    let prix = parseInt(document.getElementById("prix").value);
    let stock = parseInt(document.getElementById("stock").value);
    // retourner un prdt en json
    return pdt_json = {
        "nom": nom,
        "ref": ref,
        "prix": prix,
        "stock": stock
    };
};// fin de la fct

function createTable() {
    let table = document.getElementById("tableContainer");
    let myTab = `<table id="table">
            <tr>
                <th>Nom</th>
                <th>Référence</th>
                <th>Prix</th>
                <th>Quantité</th>
                <th>Commander</th>
            </tr>`;
    for (i = 0; i < produits.length; i++) {
        myTab += `<tr>`;
        myTab += "<td>" + produits[i]["nom"] + "</td>"
        myTab += "<td>" + produits[i]["ref"] + "</td>"
        myTab += "<td>" + produits[i]["prix"] + " €</td>"
        myTab += "<td>" + produits[i]["stock"] + "</td>"
        myTab +=`<td><input type="button" value="valider" class="selectedbtn" id=${produits[i]['ref']}></td>`
        myTab += "</tr>";
        }// fin du for
    myTab += `</table>`;
    table.innerHTML = myTab;
    //boucle pour décrémenter les stocks en fct des commandes
    let cmd = document.getElementsByClassName("selectedbtn");
    for(i=0; i < cmd.length; i++){
        //listener du bouton de commande
        cmd[i].addEventListener("click", function(){
            let pdRef= this.id;
            for(j=0; j < produits.length; j++){
                if(produits[j].ref === pdRef){
                    panier.push(produits[j]);
                    produits[j].stock --;
                    localStorage.setItem("prods", JSON.stringify(produits));
                    createTable();
                }// fin du if 
            }// fin du for interne   
        })// fin du listener
    }// fin du for externe
};// fin de la fct