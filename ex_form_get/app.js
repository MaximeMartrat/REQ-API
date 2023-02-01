let url_string = window.location;
let url = new URL(url_string)
let params = url.search.split("&")
let myparams = "?";
for(i=0 ; i < params.length; i++){ 
    let couple = params[i].split("=");
    if(i===0){ couple[0] = couple[0].slice(1) }
    myparams += couple[0] + "=" + couple[1] + "&";
    result.innerHTML += " nom : " + couple[0] + " valeur : " + couple[1];
}


let myfinalURL = "receive2.html"+ myparams
myform.action = myfinalURL

myform.addEventListener("submit", function(e){
    e.preventDefault();
    let p3 = document.getElementById('p3') ;
    let p4 = document.getElementById('p4') ;
    myparams += "p3" + p3.value + "&p4" + p4.value;
    let myfinalURL = "receive.html" + myparams;
    myform.action = myfinalURL;
    window.location.href = myfinalURL;
})
