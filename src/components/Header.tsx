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
          <h2 className='maindrop'>My Vehicle's:</h2> 
            {store.carStore._cars.map(car => ( 
            <div className='vehicles'>
              <div className="dropdown">
                <button className="dropbtn">{car.name}</button>
                <div className="dropdown-content">
                <Link className="link" to={`show/${car.id}`}>
                <p>View</p>
                </Link>
                  <Link className="link" to={`/editcar/${car.id}`}>
                    <AiFillEdit/>Edit
                  </Link>
                  <div className='deletebutton'
                    onClick={async () => {
                    await store.carStore.deleteCarAction(car.id)}}>
                      <RiDeleteBin5Line />Delete
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
    </>  
  )
}

export default observer(Header)