//metodos para las peticiones
import axios from 'axios'

const URL_DB = 'http://localhost:3001/api/places'
export const getAllPlaces = async () => {
    try {
        const response = await axios.get(URL_DB)
        console.log(response.data.placesDB)
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