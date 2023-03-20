'use strict'

export const preencherEstado = async (estadoClicado) => {
    const url = `http://localhost:8080/senai/estado/sigla/${estadoClicado}`
    const response = await fetch(url)
    const data = await response.json()

    return {
        sigla: data.uf,
        estado: data.descricao,
        capital: data.capital,
        regiao: data.regiao
    }
}