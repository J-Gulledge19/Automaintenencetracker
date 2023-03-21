import {observer} from 'mobx-react'
import { store } from '../router';
import Index from './Index';
import { useParams } from "react-router-dom"
import CarCard from './CarCard';
import { Car } from '../Utilities/Interfaces';



function Show() {
  const { id } = useParams()
  const selectedCar: Car | undefined = store.carStore._cars.find(car => car.id === parseInt(id!))
  
  return (
        <div className="card">
            <div className="page">
                {!selectedCar ? <Index /> : <CarCard selectedCar={selectedCar as Car}/>}
                
            </div>
        </div>
    )
}

export default observer(Show)