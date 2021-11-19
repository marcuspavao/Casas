const {casas, apartamentos} = require('./imobiliaria')
const imobiliaria = require('./imobiliaria')


const filtrarValor = (teto, moradia) => {
    const moradiaFiltradas = []
    for(let i = 0; i < moradia.length; i++) {
        if(moradia[i].valor <= teto) {
            moradiaFiltradas.push(moradia[i])
        }
    }
    return moradiaFiltradas
}
//console.log(filtrarValor(100000000, imobiliaria.casas))

const datadeVenda = (casas) => {
    for(let i=0; i<casas.length; i++){
    data = new Date()
    casas[i].data = `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()} - ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`}
    return casas
}
datadeVenda(imobiliaria.casas)
console.log(casas)
