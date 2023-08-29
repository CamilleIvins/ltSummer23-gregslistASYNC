import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawHouses() {
    console.log('drawing Houses')
    let template = ''
    AppState.houses.forEach(house => template += house.houseTemplate)
    setHTML('houses', template)
}

export class HousesController {
    constructor() {
        console.log('houses controller up');
        this.gethouses()
        AppState.on('houses', _drawHouses)
    }

    async gethouses() {
        try {
            housesService.getHouses()
        } catch (error) {
            Pop.error(error.message)
        }
    }
}