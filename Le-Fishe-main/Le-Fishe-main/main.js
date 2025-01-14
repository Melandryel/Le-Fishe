import { calcularTudoFicha } from "./CalcClassesRPG.js"
import { Pericias } from "./Pericias.js"

function calcular() {
    let classeRPG = document.getElementById('clas').value
    let origem = document.getElementById('orig').value
    let nex = parseInt(document.getElementById('lvl').value)

    let atributos = {
        forca: parseInt(document.getElementById('for').value),
        agilidade: parseInt(document.getElementById('agi').value),
        vigor: parseInt(document.getElementById('vig').value),
        intelecto: parseInt(document.getElementById('int').value),
        presença: parseInt(document.getElementById('pre').value),
    }

    console.log("Função calcular chamada")

    let ficha = new calcularTudoFicha(classeRPG, origem, nex, atributos)
    ficha.toggleTrilhaDiv()
    ficha.atualizarStatus()

    let pericias = new Pericias(ficha.calcularPET())

    if (classeRPG === 'Combatente'){
        document.getElementById('combatente-choices').style.display = 'block'
        pericias.marcarPericiasCombatente()
    } else {
        document.getElementById('combatente-choices').style.display = 'none'
    }

    pericias.adicionarListenerPericias()
    pericias.limitarPericias()
    
}

document.getElementById('main-form').addEventListener('submit', function(event){
    event.preventDefault()
    console.log('Evento submit acionado')
    calcular()
})