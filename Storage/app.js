//le storage : 
//  -local : persistant
//- session : jusqu'à fermeture du navigateur

// //pour stocker une valeur :
// localStorage.setItem("la clé", "la valeur");

// //pour récupérer une valeur :
// console.log(localStorage.getItem("la clé"));

// //la même chose avec session
// sessionStorage.setItem("la clé session", "la valeur session");
// console.log(sessionStorage.getItem("la clé session"));

// for (let i = 0; i < 5; i++) {
//     sessionStorage.setItem("clé"+i,"valeur_modified"+i);
// }

/*key(n) Returns the name of the  nth key in storage
length Returns the number of date items stored in Storage object
getItem(keyname) Returns the value of the specified key name
setItem(keyname, value) Adds key to the storage, or updates a key value (if it already exist)
removeItem(keyname) Removes that key from the storage
clear() Empty all key out the storage*/

let tab = [{"nom": "A", "prenom": "B"}, {"nom": "C", "prenom": "D"}, {"nom": "E", "prenom": "F"}, {"nom": "G", "prenom": "H"}]

localStorage.setItem("tab", JSON.stringify(tab));
