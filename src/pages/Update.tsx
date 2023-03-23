import React from 'react'
import {observer} from 'mobx-react'
import { store } from '../router';
import { Form, useParams, useNavigate } from "react-router-dom"
import { Car } from '../Utilities/Interfaces';


function Update() {
  const { id, maintId } = useParams()
  let navigate = useNavigate()
  const car: Car | undefined = store.carStore._cars.find(car => car.id === parseInt(id!))
  const maint = car!.maintenance.find(maint => maint.id === parseInt(maintId!))

    return (
      <div className="showcard">
        {maint && <div className="form-page">
          <h2>Update {maint.type}</h2>
          <Form onSubmit={async (event: any) => { 
            await store.carStore.updateAction(event, car!.id, parseInt(maintId!))
            navigate(`/show/${car!.id}`)
            }}
            method="post">
            <h4>Type of maintenance done:</h4>
              <textarea typeof="input" name="type" defaultValue={maint.type} /><br/>
            <h4>Date Done:</h4>
              <textarea typeof="input" name="date" defaultValue={maint.date} /><br/>
            <h4>Current Mileage:</h4>
              <textarea typeof="input" name="mileage" defaultValue={maint.mileage} /><br/>
            <h4>Mileage maintence is due next:</h4>
              <textarea typeof="input" name="due" defaultValue={maint.due} /><br/>
            <input type="submit" value={`Update ${maint.type}`} />
          </Form>
        </div>}
      </div>
  )
}

export default observer(Update)