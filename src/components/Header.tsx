import { useLoaderData, Link } from 'react-router-dom';
import { Car } from '../loaders';

function Header() {
  const cars = useLoaderData() as unknown as Car[];
  console.log(`Header:${cars}`)

  return (
    <>
       <nav className="nav">
           <h1>My Vehicle Maintenance</h1>
           <Link to='/'>Home</Link>
          <Link to='/create'> Add Car </Link>
       </nav>

        <div className="carlist"> 
          <h3>My Vehicle's:</h3> 
            {cars.map(car => (
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

export default Header