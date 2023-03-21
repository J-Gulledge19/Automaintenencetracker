import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { store } from '../router';

function Header() {

  return (
    <>
       <nav className="nav">
           <h1>My Vehicle Maintenance</h1>
           <Link to='/'>Home</Link>
          <Link to='/create'> Add Car </Link>
       </nav>

        <div className="carlist"> 
          <h2>My Vehicle's:</h2> 
            {store.carStore._cars.map(car => ( 
              <div>
            <Link to={`show/${car.id}`}>
            <h3>{car.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </>  
  )
}

export default observer(Header)