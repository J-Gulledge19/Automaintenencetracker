import React from 'react'
import {observer} from 'mobx-react'
import { store } from '../router';
import { Form, useNavigate } from "react-router-dom"



function NewCar() {
  let navigate = useNavigate()

    return (
      <div className="showcard">
       <div className="form-page">
          <h2>New Vehicle</h2>
          <Form onSubmit={async (event: any) => { 
            await store.carStore.createCar(event)
            navigate('/')
            }}
            method="post">
            <h4>Type of Car</h4>
              <textarea typeof="input" name="name" placeholder='Year, Make, and Model'/><br/>
            <h4>Image of your car:</h4>
              <textarea typeof="input" name="image" placeholder='Image link'/><br/>
            <input type="submit" value='Add Car' />
          </Form>
        </div>
      </div>
  )
}

export default observer(NewCar)