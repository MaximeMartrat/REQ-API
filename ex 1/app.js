//let mydate = new Date(Date.UTC(2023, 11, 31, 20, 00, 0));
let today = new Date();
let time = today.getTime();
let expireTime = time + (2*24*60*60*1000);
today.setTime(expireTime);
document.cookie = `username=TOTO;expires=${today.toUTCString()};path=/;priority=high`;
//recupérer les valeurs d'un cookie
let myC = document.cookie ;
console.log(myC.split('=')[1]);

//modifier un cookie
document.cookie = `username=TUTU;expires=${today.toUTCString()};path=/;priority=high`;

//suprimer un cookie
//document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

//ajouter des champs dans le cookie
document.cookie = "birthday=281080"