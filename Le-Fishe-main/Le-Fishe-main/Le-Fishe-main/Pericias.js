//import { calcularTudoFicha } from "./CalcClassesRPG"

export class Pericias{
    constructor(pet){
        this.pet = pet
        this.bonusPericias = []
        this.escolhaCombatente = {
            lutaOuPontaria: '',
            reflexosOuFortitude: ''
        }
    }

    marcarPericiasCombatente(){
        const lutaOuPontariaSelect = document.getElementById('luta-pontaria')
        const reflexoOuFortitudeSelect = document.getElementById('reflexos-fortitude')

        const escolha1 = lutaOuPontariaSelect.value
        const escolha2 = reflexoOuFortitudeSelect.value

        if (escolha1) {
            this.escolhaCombatente.lutaOuPontaria = escolha1
        }
        if (escolha2){
            this.escolhaCombatente.reflexosOuFortitude = escolha2
        }

        let periciasCombatente = [this.escolhaCombatente.lutaOuPontaria, this.escolhaCombatente.reflexosOuFortitude]
        periciasCombatente.forEach((id)=>{
            let checkbox = document.getElementById(id)
            if (checkbox){
                checkbox.checked = true
                checkbox.disabled = true
            }
        })

        this.bonusPericias = periciasCombatente
    }

    //periMarcadaComb(){
    //    const periciaLuta = document.getElementById('luta')
    //    const periciaFortitude = document.getElementById('fortitude')
//
    //    if (classeRPG == 'Combatente'){
    //        periciaLuta.forEach(function(box){
    //            box.checked = true
    //        })
    //        periciaFortitude.forEach(function(box){
    //            box.checked = true
    //        })
    //    }
    //    
    //}


    limitarPericias() {
        let checkboxes = document.querySelectorAll('input[name="pericia"]:checked')
        let uncheckedBoxes = document.querySelectorAll('input[name="pericia"]:not(:checked)')

        
        let selectedCount = [...checkboxes].filter((checkbox) => !this.bonusPericias.includes(checkbox.id)).length

        if (selectedCount >= this.pet) {
            uncheckedBoxes.forEach(function(box) {
                if (!this.bonusPericias.includes(box.id)) {
                    box.disabled = true
                }
            }.bind(this))
        } else {
            uncheckedBoxes.forEach(function(box) {
                if (!this.bonusPericias.includes(box.id)) {
                    box.disabled = false
                }
            }.bind(this))
        }
    }

    adicionarListenerPericias() {
        document.querySelectorAll('input[name="pericia"]').forEach((checkbox) => {
            checkbox.addEventListener('change', () => this.limitarPericias())
        })
    }
    adicionarListenerPericias() {
        document.querySelectorAll('input[name="pericia"]').forEach((checkbox)=>{
            checkbox.addEventListener('change', () => this.limitarPericias())
        })
    }
}

 //   limitarPericias(){
 //       const checkboxes = document.querySelectorAll('input[name="pericia"]:checked')
 //       const uncheckedBoxes = document.querySelectorAll('input[name="pericia"]:not(:checked)')
//
 //       if (checkboxes.length >= this.pet){
 //           uncheckedBoxes.forEach(function(box){
 //               box.disabled = true
 //           })
 //       } else {
 //           uncheckedBoxes.forEach(function(box){
 //           box.disabled = false
 //       })
 //       }
 //   }




