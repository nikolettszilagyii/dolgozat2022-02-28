//Készítette: Szilágyi Nikolett Viola
//Dátum: 2022-02-28
//Github: https://github.com/nikolettszilagyii/


console.log("Szilágyi Nikolett, 2022-02-28, Szoft_1_N");
var szamIn= document.getElementyById("szam");
var szamInn= document.getElementyById("szam1");
var szamolgomb= document.getElementyById("szamolgomb");
var eredmenyId= document.getElementyById("eredmeny");

szamolgomb.addEventListener("click",function(){
    let szam = Number("szamIn.value");
    let szamm = Number("szamInn.value");
    var absz = (Math.PI/180)*(szamm);
    let kiscica = (1/2)*szam*Math.sin(absz);
    console.log(kiscica.toFixed(2));
    eredmenyId.value=kiscica.toFixed(2);

});
