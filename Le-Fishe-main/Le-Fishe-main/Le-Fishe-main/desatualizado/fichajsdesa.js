function limitarPericias() {
    let checkboxes = document.querySelectorAll('input[name="pericia"]:checked');
    let uncheckedBoxes = document.querySelectorAll('input[name="pericia"]:not(:checked)');
    if (checkboxes.length >= pet) {
        uncheckedBoxes.forEach(function (box) {
            box.disabled = true;
        });
    } else {
        uncheckedBoxes.forEach(function (box) {
            box.disabled = false;
        });
    }
}

document.querySelectorAll('input[name="pericia"]').forEach(function (checkbox) {
    checkbox.addEventListener('change', limitarPericias);
});

limitarPericias();



function toggletrilhaDiv(nex, minValue, divId){
    let div = document.getElementById(divId)
    if(nex > minValue){
        div.classList.remove('hidden')
    } else {
        div.classList.add('hidden')
    }
}


function calcular() {
    let classe = document.getElementById('clas').value
    let origem = document.getElementById('orig').value
    let nex = parseInt(document.getElementById('lvl').value)
    let trilhac = document.getElementById('tcomb').value
    
    let força = parseInt(document.getElementById('for').value)
    let agili = parseInt(document.getElementById('agi').value)
    let vigor = parseInt(document.getElementById('vig').value)
    let intel = parseInt(document.getElementById('int').value)
    let prese = parseInt(document.getElementById('pre').value)
    

    let pv = 8+vigor
    let pe = 1+prese
    let san = 8
    let pet = 1+intel    
    let defesa = 10+agili
    

    document.getElementById("divnex10comb").classList.add('hidden')
    document.getElementById("divnex10spec").classList.add('hidden')
    document.getElementById("divnex10ocul").classList.add('hidden')

    switch(classe){
        case "Combatente":
            pv = (20+vigor)+((4+vigor)*nex)
            pe = (2+prese)*(nex)
            san = 12+(3*nex)
            pet = 1+int
            toggletrilhaDiv(nex, 1, 'divnex10comb')
            
            break;
            
            case "Especialista":
                pv = (16+vigor)+((3+vigor)*nex)
                pe = (3+prese)*(nex)
                san = 16+(4*nex)
                pet = 7+intel
                toggletrilhaDiv(nex, 1, 'divnex10spec')
            break;
            
            case "Ocultista":
                pv = (12+vigor)+((2+vigor)*nex)
                pe = (4+prese)*(nex)
                san = 12+(3*nex)
                pet = 3+intel
                toggletrilhaDiv(nex, 1, 'divnex10ocul')
                
                break;
                
                default:
                    
                    break;
                }

                document.getElementById("PontoVida").textContent = ("Pontos de vida: " + pv)
                document.getElementById("Sanidade").textContent = ("Sanidade: " + san)
                document.getElementById("PontoEsfor").textContent = ("Pontos de Esforço: " + pe)
                document.getElementById("Defesadiv").textContent = ("Defesa: " + defesa)
                
            }
            
            
            //Abaixo é o código desatualizado
            
            /*if (nex >= 1 && classe === "Combatente" && classe !== "Especialista" && classe !== "Ocultista") {
                document.getElementById('divnex10comb').style.display = "block"
                
                pv = (20+vigor)+((4+vigor)*nex)
                pe = (2+prese)*(nex+1)
                san = 12+(3*nex)
                
                
            } else if (nex >= 1 && classe === "Especialista" && classe !== "Combatente" && classe !== "Ocultista") {
                document.getElementById('divnex10spec').style.display = "block"
                
                pv = (16+vigor)+((3+vigor)*nex)
                pe = (3+prese)*(nex+1)
                san = 16+(4*nex)
                pet = 7+intel
                
            } else if (nex >= 1 && classe === "Ocultista" && classe !== "Combatente" && classe !== "Especialista") {
                document.getElementById('divnex10ocul').style.display = "block"
                
                pv = (20+vigor)+((4+vigor)*nex)
                pe = (2+pre)*(nex+1)
                san = 12+(3*nex)
                pet = 3+intel
                
            } else {
                document.getElementById('divnex10comb').style.display = "none"
        } */
       
       /* caso precise dessas variaveis 
       
       let periciaLuta = document.getElementById("luta").value
       let periciaPontaria = document.getElementById("pontaria").value
       let periciaFortitude = document.getElementById("fortitude").value
       let periciaReflexos = document.getElementById("reflexos").value

       if(periciaLuta.checked){
           periciaPontaria.disabled = true
       }
       if(periciaFortitude.checked){
           periciaFortitude.disabled = true
       } */
       