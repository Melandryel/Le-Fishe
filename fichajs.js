function calcular() {
    var classe = document.getElementById('clas').value
    var origem = document.getElementById('orig').value
    var nex = parseInt(document.getElementById('lvl').value)
    
    var força = parseInt(document.getElementById('for').value)
    var agili = parseInt(document.getElementById('agi').value)
    var vigor = parseInt(document.getElementById('vig').value)
    var intel = parseInt(document.getElementById('int').value)
    var prese = parseInt(document.getElementById('pre').value)

    var pv = 8+vigor
    var pe = 1+prese
    var san = 8
    var pet = 1+intel

    var def = 10+agili
    
    document.getElementById("divnex10comb").style.display = "none"
    document.getElementById("divnex10spec").style.display = "none"
    document.getElementById("divnex10ocul").style.display = "none"

    if (nex >= 1 && classe === "Combatente" && classe !== "Especialista" && classe !== "Ocultista") {
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
    } 

}