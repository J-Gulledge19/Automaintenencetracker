import React from 'react'
import {observer} from 'mobx-react'
import { store } from '../router';
import { Form, useParams, useNavigate } from "react-router-dom"
import { Car } from '../Utilities/Interfaces';


function UpdateCar() {
  const { id } = useParams()
  let navigate = useNavigate()
  const car: Car | undefined = store.carStore._cars.find(car => car.id === parseInt(id!))
  console.log(car)

    return (
      <div className="showcard">
        {car && <div className="form-page">
          <h2>Update {car.name}</h2>
          <Form onSubmit={async (event: any) => { 
            await store.carStore.updateCarAction(event, car!.id)
            navigate('/')
            }}
            method="post">
            <h4>Type of Car:</h4>
              <textarea typeof="input" name="name" defaultValue={car.name} /><br/>
            <h4>Date Done:</h4>
              <textarea typeof="input" name="image" defaultValue={car.image} /><br/>
            <input type="submit" value={`Update ${car.name}`} />
          </Form>
        </div>}
      </div>
  )
}

export default observer(UpdateCar)