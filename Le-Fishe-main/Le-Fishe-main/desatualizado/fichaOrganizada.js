document.addEventListener('DOMContentLoaded', init)

function init() {
    configurarEventos()
    limitarPericias()
}

function configurarEventos(){
    document.getElementById('orig').addEventListener('change', atualizarPericias)
    document.querySelectorAll('input[name="pericia"]').forEach(checkbox =>{
        checkbox.addEventListener('change', limitarPericias)
    })
}

/*function toggletrilhaDiv(nex, minValue, divId){
    let div = document,getElementById(divId)
    div.classList.toggle('hidden', nex <= minValue)
}*/

function calcular(){
    let classe = document.getElementById('clas').value
    let nex = parseInt(document.getElementById('lvl').value) 
    let força = parseInt(document.getElementById('for').value)
    let vigor = parseInt(document.getElementById('vig').value)
    let agili = parseInt(document.getElementById('agi').value)
    let intel = parseInt(document.getElementById('int').value)
    let prese = parseInt(document.getElementById('pre').value)

    let pv = calcularPontosVida(classe, vigor, nex)
    let pe = calcularPontosEsforço(classe, prese, nex)
    let san = calcularSanidade(classe, nex)
    let pet = calcularPET(classe, intel)
    let defesa = calcularDefesa(agili)
}

function calcularPontosVida(classe, vigor, nex){
    switch(classe) {
        case "Combatente":
            return(20+vigor) + ((4 + vigor)*nex)

        case "Especialista":
            return (16+vigor)+((3+vigor)*nex)

        case "Ocultista":
            return (12+vigor)+((2+vigor)*nex)

        default:
            return 8+vigor
    }
}