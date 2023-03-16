import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Car } from '../Utilities/Interfaces';
import { store } from '../router';
// console.log(store.carStore._cars)
function Header() {
  // const cars: Car[] = props.store.carStore;
  // console.log(`Header:${cars}`)

  return (
    <>
       <nav className="nav">
           <h1>My Vehicle Maintenance</h1>
           <Link to='/'>Home</Link>
          <Link to='/create'> Add Car </Link>
       </nav>

        <div className="carlist"> 
          <h3>My Vehicle's:</h3> 
            {store.carStore._cars.map(car => ( 
          <div>
            <Link to={`show/${car.id}`}>
            <h5>{car.name}</h5>
            </Link>
              <img src={car.image} alt='undefined'/>
          </div>
        ))}
      </div>
    </>  
  )
}

export default observer(Header)