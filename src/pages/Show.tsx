import {observer} from 'mobx-react'
import { store } from '../router';
import Index from './Index';

function Show() {

  const selectedCar = store.carStore._cars.find(car => car.id)
  return (
        <div className="showcard">
            <div className="show-page">
                {!selectedCar ? <Index /> : <h3 className="showTitle">{selectedCar.name}</h3>}

            </div>
        </div>
    )
}

export default observer(Show)