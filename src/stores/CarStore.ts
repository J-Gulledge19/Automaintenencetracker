import { action } from "mobx";
import { makeObservable, observable } from "mobx";
import { Car } from "../Utilities/Interfaces"
const url = "https://carmaintenancebackend.onrender.com"

export default class CarStore{
    _cars: Car[];
    selectedCarId: number | null;
    constructor(){
        this._cars = []
        this.selectedCarId = null
        this.init()

        makeObservable(this, {
            _cars: observable,
            selectedCarId: observable,
            fetchCars: action,
        })
    }
    private async init() {
        const cars = await this.fetchCars().then(carList => {
            return carList
        })
        this._cars = cars
        return cars
    }

    /**
     * getCarsList
     */
    public getCarsList() {
        return this._cars
    }

    async fetchCars() {
        const res = (await fetch(`${url}/car/`))
        const body = (await res.json())
        console.log(body)
        return body
    }
}
