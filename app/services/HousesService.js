import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"


// @ts-ignore
const _sandboxApi = axios.create({
    baseURL: "https://sandbox.codeworksacademy.com",
    timeout: 8000
})
class HousesService {
    async getHouses() {
        const response = await _sandboxApi.get('api/houses')

        const mappedHouses = response.data.map(dataObj => new House(dataObj))
        console.log(response.data);
        AppState.houses = mappedHouses
    }
    // post and push - this one is NOT _sandboxApi, just api
    async createHouse(formData) {
        const reply = await api.post('api/houses', formData)

        const newHouse = new House(reply.data)
        AppState.houses.push(newHouse)
        AppState.emit('houses')
    }
}


export const housesService = new HousesService()
