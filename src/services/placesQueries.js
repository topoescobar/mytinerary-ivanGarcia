//metodos para las peticiones
import axios from 'axios'

const URL_DB = 'http://localhost:3001/api/places'

export const getAllPlaces = async () => {
    try {
        const response = await axios.get(URL_DB) 
        console.log("resp from db", response.data.placesDB)
        return response.data.placesDB
    } catch (error) {
        console.log(error)
        return []
    }
}

export const getByQuery = async (queryParam = "") => {
    try {
        const response = await axios.get(URL_DB+queryParam) //para realizar busquedas en backend, x ej usando la funcion searchPlace en places
        console.log("getbyquery DB resp", response.data.placesDB)
        return response.data.placesDB
    } catch (error) {
        console.log(error)
        return []
    }
}

export const getById = async (id) => {
    try {
        const response = await axios.get(URL_DB+'/'+id)
        console.log("getbyid DB resp", response.data.placesDB)
        return response.data.placesDB
    } catch (error) {
        console.log(error)
        return []
    }
}


/* 
axios('http://localhost:3001/api/places/')
.then(response => 
   setPlaces(response.data.placesDB)
  )
.then(() => setLoading(false)) */