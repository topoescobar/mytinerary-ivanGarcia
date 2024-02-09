//metodos para las peticiones
import axios from 'axios'

const URL_DB = 'http://localhost:3001/api/places/search'

export const getByQuery = async (queryParam="") => {
    try {
        const response = await axios.get(URL_DB+queryParam) //para realizar busquedas en backend, x ej usando la funcion searchPlace en places
        console.log(response.data.placesDB)
        return response.data.placesDB
    } catch (error) {
        console.log(error)
        return []
    }
}

