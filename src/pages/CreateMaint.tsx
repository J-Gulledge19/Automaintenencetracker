import React from 'react'
import {observer} from 'mobx-react'
import { store } from '../router';
import { Form, useParams, useNavigate } from "react-router-dom"
import { Car } from '../Utilities/Interfaces';


function CreatMaint() {
  const { id } = useParams()
  let navigate = useNavigate()
  const car: Car | undefined = store.carStore._cars.find(car => car.id === parseInt(id!))

    return (
      <div className="showcard">
         <div className="form-page">
          <h2>Add Maintenance Item</h2>
          <Form onSubmit={async (event: any) => { 
            await store.carStore.createMaint(event, car!.id)
            navigate(`/show/${car!.id}`)
            }}
            method="post">
            <h4>Type of maintenance done:</h4>
              <textarea typeof="input" name="type" placeholder='oil change, air filter, etc'/><br/>
            <h4>Date Done:</h4>
              <textarea typeof="input" name="date" placeholder='date'/><br/>
            <h4>Current Mileage:</h4>
              <textarea typeof="input" name="mileage" placeholder='mileage'/><br/>
            <h4>Mileage maintence is due next:</h4>
              <textarea typeof="input" name="due" placeholder='next mileage it should be done'/><br/>
            <input type="submit" value='Add Maintenance'/>
          </Form>
        </div>
      </div>
  )
}

export default observer(CreatMaint)