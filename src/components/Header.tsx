import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { store } from '../router';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';

function Header() {

  return (
    <>
       <nav className="nav">
           <h1>My Vehicle Maintenance</h1>
           <Link to='/'>Home</Link>
          <Link to='/create'> Add Vehicle </Link>
       </nav>

        <div className="carlist"> 
          <h2>My Vehicle's:</h2> 
            {store.carStore._cars.map(car => ( 
            <div className='vehicles'>
              <Link className="link" to={`show/${car.id}`}>
              <h3>{car.name}</h3>
              </Link>
              <Link className="link" to={`/editcar/${car.id}`}>
                <AiFillEdit/>
              </Link>
              <div className='deletebutton'
                onClick={async () => {
                await store.carStore.deleteCarAction(car.id)}}>
                  <RiDeleteBin5Line />
              </div>
            </div>
        ))}
      </div>
    </>  
  )
}

export default observer(Header)