addEventListener("DOMContentLoaded", function(){    
    let ventana = open("html","","");
    let script = document.createElement("SCRIPT");
    script.src = "http://127.0.0.1:5500/SubScript/main.js";
    ventana.document.head.appendChild(script);
})