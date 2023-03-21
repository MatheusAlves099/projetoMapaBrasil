export const searchState = async (stateSearch) => {
    const url = `http://localhost:8080/senai/estado/sigla/${stateSearch}`
    const response = await fetch(url)
    const data = await response.json()

    return {
        uf: data.uf,
        nome: data.descricao.toUpperCase(),
        capital: data.capital,
        regiao: data.regiao
    }
}

export const getCities = async (stateSearch) => {
    const url = `http://localhost:8080/v1/senai/cidades/estados/sigla/${stateSearch}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}