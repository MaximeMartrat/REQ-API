// //let mydate = new Date(Date.UTC(2023, 11, 31, 20, 00, 0));
// let today = new Date();
// let time = today.getTime();
// let expireTime = time + (2*24*60*60*1000);
// today.setTime(expireTime);
// document.cookie = `username=TOTO;expires=${today.toUTCString()};path=/;priority=high`;
// //recupérer les valeurs d'un cookie
// let myC = document.cookie ;
// console.log(myC.split('=')[1]);

// //modifier un cookie
// document.cookie = `username=TUTU;expires=${today.toUTCString()};path=/;priority=high`;

// //suprimer un cookie
// //document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// //ajouter des champs dans le cookie
// document.cookie = "birthday=281080"
// document.cookie = "otherinfos=this is a long string;"

//funtions to manage cookies
//SET cookie

function setCookie(cname,cvalue,exdays){
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// setCookie("username", "TITI", 300);
function getCookie(cname){
    //je cherche la chaine "cname="
    let name = cname + "=" ;
    //je récupère le cookie
    let decodedCookie = decodeURIComponent(document.cookie);
    //on sépare les différentes clés séparées par ";"
    let valArr = decodedCookie.split(";");
    //on boucle sur tous les éléments du tableau splitté
    for(let i=0; i<valArr.length; i++){
        //raccourci syntaxique
        let c = valArr[i];
        //si ma clé commence par " " je décale au caractère suivant (pour éviter de passer à coté)
        while(c.charAt(0) == ' '){
            c = c.substring(1);
        }
        //je teste si le nom de la clé est présent
        if(c.indexOf(name) == 0) {
            //je retourne la valeur si elle a été trouvée
            return c.substring(name.length, c.length);
        }
    }
    //la clé n'a pas été trouvée...
    return "";
    // console.log(valArr);
}

console.log(getCookie("username"));

function checkCookie(){
    let username = getCookie("username");
    if (username != "") {
        alert("welcome again mister " + username);
    }
    else {
        username = prompt("Please enter your username", "")
        if(username != "" && username != null){
            setCookie("username",username, 365);
        }
    }
}
checkCookie();