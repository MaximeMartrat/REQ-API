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
// console.log("au départ => ", produits)
// quand le bouton "Ajouter un produit" est cliqué

createTable();

valid.addEventListener("click", function () {
    // initialisation de l'état
    if (produits.length == 0) {
        // envoi du Json
        newpdt = inputsToJson();
        // push dans le tableau
        produits.push(newpdt);
        // affichage pour verification
        // console.log(produits);
        // stockage dans le localStorage
        localStorage.setItem("prods", JSON.stringify(produits));
    }
    // déjà des produits en magasin, on vérifie si de nouveaux produits existent déjà
    else {
        let counted = 0; // sert de drapeau pour vérifier si la fin du tableau est atteinte 
        // on loope sur les produits
        for (i = 0; i < produits.length; i++) {
            // console.log("\ndebut de la boucle ... ");
            // console.log("produit courant : ", produits[i]);
            // si le produit existe déjà on ajoute aux stocks
            if (produits[i]['nom'] == document.getElementById("nom").value
                &&
                produits[i]['ref'] == document.getElementById("ref").value) {
                // console.log("deja dans le magasin !");
                produits[i]['stock'] += parseInt(document.getElementById("stock").value);
                localStorage.setItem("prods", JSON.stringify(produits));
            }
            // sinon on continu le processus normal 
            else {
                // pas celui-ci mais peut-être le suivant ?
                counted++;
            }
        }// fin de la loop 
        // console.log(counted);
        // boucle terminée, cocher le drapeau "counted" (fin atteinte sans trouver d'occurrence de produit)
        if (counted === produits.length) {
            // console.log("ajoute un nouveau produit ...");
            newpdt = inputsToJson();
            produits.push(newpdt);
            // afficher pour verification
            // console.log(produits);
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
    // console.log(produits[i]);
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
    let a = document.getElementsByClassName("selectedbtn");
    for(i=0; i < a.length; i++){
        a[i].addEventListener("click", function(){
            // console.log(this.id)
            let pdRef= this.id;
            console.log("produit")
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