export interface Car {
    id:number
    maintenance: Maint[] 
    name: string
    image: string
}

export interface Maint {
    id:number
    type:string
    date:string
    mileage:string
    due:string
    car:number
}