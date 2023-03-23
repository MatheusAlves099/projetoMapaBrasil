'use strict'

import { searchState } from "./estadosAPI.js"
import { getCities } from "./estadosAPI.js"

const mapa = document.querySelector('svg')

const dadosEstado = document.getElementById('card_state')

const getEstados = async (event) => {
    const estado = event.target.id.replace('BR-', '')
    const estadoPesquisado = await searchState(estado)
    const cidadesEstadoPesquisado = await getCities(estado)

    document.getElementById('stateAcronym').innerHTML = estadoPesquisado.uf
    document.getElementById('name_state').innerHTML = estadoPesquisado.nome
    document.getElementById('capital').innerHTML = estadoPesquisado.capital
    document.getElementById('region').innerHTML = estadoPesquisado.regiao

    const ul = document.getElementById('listCities')
    ul.textContent = ""

    cidadesEstadoPesquisado.cidades.forEach(function (city) {
        const citiesList = document.createElement('li')
        citiesList.textContent = city

        ul.append(citiesList)
    })

    dadosEstado.classList.remove('none')
}

mapa.addEventListener('click', getEstados)