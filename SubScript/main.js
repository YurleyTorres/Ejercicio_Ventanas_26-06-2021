
addEventListener("DOMContentLoaded", function(){
    document.body.innerHTML = "";
    let framen = new DocumentFragment();
    let p = document.createElement("P");
    let texto = document.createTextNode("Hola Mundo");
    let titulo = document.createTextNode("Formulario");
    // let contenido = 
    p.append(texto);
    framen.appendChild(p);
    document.body.appendChild(framen);
    document.title.appendChild(titulo);
    // document.body.style.backgroundColor = "yellow";
})