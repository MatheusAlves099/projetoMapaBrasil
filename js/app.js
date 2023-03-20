'use strict'

const preencherEstado = async (estado) => {
    const url = `http://localhost:8080/senai/estado/sigla/${estado}`
    const response = await fetch(url)
    const data = await response.json()

    return {
        sigla: data.uf,
        estado: data.descricao,
        capital: data.capital,
        regiao: data.regiao
    }
}

const mapa = document.querySelector('svg')

const getEstados = (event) => {
    const estado = event.target.id.replace('BR-', '')
    preencherCard(estado)
}

const preencherCard = async (siglaEstado) => {
    document.getElementById('card').value
    const estado = await preencherEstado(siglaEstado)

    document.getElementById('circle_state').innerHTML = estado.uf
}

mapa.addEventListener('click', getEstados)