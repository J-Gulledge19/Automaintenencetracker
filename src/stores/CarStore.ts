import { makeObservable, observable, action } from "mobx";
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
            fetchSelectedCar: action,
            createMaint: action,
            updateAction: action,
            createCar: action,
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

    // Fetch Car Data
    async fetchCars() {
        const res = (await fetch(`${url}/car/`))
        const body = (await res.json())
        return body
    }

    async fetchSelectedCar(...params : number[]) {
        const res = (await fetch(`${url}/car/${params}`))
        const car = (await res.json())
        console.log(`fetchSelectedCar ${car}`)
        return car
    }

    // Creat new car
    async createCar(e: any) {
        e.preventDefault();
        const formData = new FormData(e.target)

        const newCar = {
            name: formData.get("name"),
            image: formData.get("image"),
        }

        await fetch(`${url}/car/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCar)
        })
        await this.init()
    }

    // Creat new maintenance item
    async createMaint(e: any, carId: number) {
        e.preventDefault();
        const formData = new FormData(e.target)

        const newMaint = {
            type: formData.get("type"),
            date: formData.get("date"),
            mileage: formData.get("mileage"),
            due: formData.get("due"),
            car: carId,
        }

        await fetch(`${url}/maint/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMaint)
        })
        await this.init()
    }

        

    // Update Maintenance for a car
    async updateAction(e: any, carId: number, maintId: number) {

        e.preventDefault();
        const formData = new FormData(e.target)

        const updatedMaint = {
            id: maintId,
            type: formData.get("type"),
            date: formData.get("date"),
            mileage: formData.get("mileage"),
            due: formData.get("due"),
            car: carId,
        }
    
        // send request to backend
        await fetch(`${url}/maint/${maintId}/`, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedMaint)
        })
        await this.init()
    }

    //Delete Maintenance for a car
    async deleteMaintAction(maintId: number){
        // send request to backend
        await fetch(`${url}/maint/${maintId}/`, {
            method: "delete",
        })
        await this.init()
    }
    
}
