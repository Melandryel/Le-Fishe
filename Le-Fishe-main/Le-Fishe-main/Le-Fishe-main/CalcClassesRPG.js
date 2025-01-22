export class calcularTudoFicha{
    constructor(classeRPG, origem, nex, atributos){
        this.classeRPG = classeRPG
        this.origem = origem
        this.nex = nex
        this.atributos = atributos
    }

    calcularPV(){
        let vigor = this.atributos.vigor
        switch(this.classeRPG){
            case 'Combatente':
                return ((20+vigor)+((4+vigor)* this.nex))

            case 'Especialista':
                return ((16+vigor)+((3+vigor)*this.nex))

            case 'Ocultista': 
                return ((12+vigor)+((2+vigor)*this.nex))

            default:
                return 8 + vigor
        }
    }

    calularPE(){

        let presença = this.atributos.presença

        switch(this.classeRPG){
            case 'Combatente':
                return (2+presença) * this.nex

            case 'Especialista':
                return (3+presença) * this.nex

            case 'Ocultista':
                return (4+presença) * this.nex

            default:
                return 1 + presença
        }
    }

    calucularSAN(){
        switch(this.classeRPG){
            case 'Combatente':
                return 12 + 3 * this.nex
            case 'Especialista':
                return 16 + 4 * this.nex
            case 'Ocultista':
                return 20 + 5 * this.nex
            default:
                return 8
        }
    }

    calcularPET(){

        let intelecto = this.atributos.intelecto

        switch(this.classeRPG){
            case 'Combatente':
                return 1 + intelecto
            case 'Especialista':
                return 7 + intelecto
            case 'Ocultista':
                return 3 + intelecto
            default:
                return 1 + intelecto
        }
    }

    calcularDEF() {
        return 10 + this.atributos.agilidade
    }

    toggleTrilhaDiv(){
        const nex10Threshold = 1
        switch (this.classeRPG){
            case 'Combatente':
                this.toggleDivVisibility('divnex10comb', this.nex > nex10Threshold)
                break
            case 'Especialista':
                this.toggleDivVisibility('divnex10espe', this.nex > nex10Threshold)
                break
            case 'Ocultista':
                this.toggleDivVisibility('divnex10ocul', this.nex > nex10Threshold)
                break
            default:
                break
        }
    }

    toggleDivVisibility(divId, isVisible){
        let div = document.getElementById(divId)
        if (isVisible) {
            div.classList.remove('hidden')
        } else {
            div.classList.add('hidden')
        }
    }
    
    atualizarStatus (){
        document.getElementById("PontoVida").textContent = "Pontos de vida: " + this.calcularPV()
        document.getElementById("Sanidade").textContent = "Sanidade: " + this.calucularSAN()
        document.getElementById("PontoEsfor").textContent = "Pontos de esforço: "+this.calularPE()
        document.getElementById("Defesadiv").textContent = "Defesa: "+ this.calcularDEF()
    }

}