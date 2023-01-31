//j'initialise un tableau vide pour stocker mon JSON
let produits = [];
//on recupère les données depuis le fichier html
valid.addEventListener("click", ()=>{
    let nom = document.getElementById('nom').value;
    let ref = document.getElementById('ref').value;
    let prix = document.getElementById('prix').value;
    let quantite = parseInt(document.getElementById('qte').value);
        //on vérifie si la valeur existe deja
        if(produits.length == 0){
            let myJson = { "nom": nom, "ref": ref, "prix": prix, "quantite": quantite };
            produits.push(myJson);
        }
        for (let i = 0; i < produits.length; i++) {

            if(produits[i]["nom"] == nom && produits[i]["ref"] == ref){
                produits[i]["quantite"] += quantite;
            } else {
                let myJson = { "nom": nom, "ref": ref, "prix": prix, "quantite": quantite };
                produits.push(myJson);
            }
        }
    localStorage.setItem('produits', JSON.stringify(produits));
    });

function createTable(lignes, colonnes){
    let page = document.getElementById('body');
    let tab = document.createElement('table');
    for(let i = 1; i < lignes+1; i++){ 
        let ligne = document.createElement('tr');
        tab.appendChild(ligne);
        for(let y = 1; y < colonnes+1; y++){
            let colonne = document.createElement('td');
            ligne.appendChild(colonne);
            colonne.innerHTML = `<a href="#">`+i+"/"+y+`</a>`;
        }
    }
        
    page.appendChild(tab);
}

