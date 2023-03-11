import url from "./url";

export interface Car {
    id:number
    maintenance: []
    name: string
    image: string
}

export function indexLoader(): Promise<Car[]> {

    return fetch(`${url}/car/`)
            .then(res => res.json())
            .then(res => {
                    console.log(res)
                    return res as Car[] 
            })
}