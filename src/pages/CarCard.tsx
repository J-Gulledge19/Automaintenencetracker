import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { IoIosAddCircleOutline } from 'react-icons/io'
import { Link} from "react-router-dom"
import { Car } from '../Utilities/Interfaces';
import { Maint } from '../Utilities/Interfaces';
import { store } from '../router';

interface CarCardProps {
    selectedCar: Car;
}

const CarCard: React.FC<CarCardProps> = ({selectedCar}: CarCardProps) => {
  return (
        <div className="showcard">
            <div className="show-page">
                <div className="container">
                    <div className="image">
                        <img className="img" src={selectedCar.image} alt="" />
                    </div>
                </div>
                <h1 className='showtitle'>{selectedCar.name}</h1>
                <Link className="button" to={`/newmaint/${selectedCar.id}`}>
                New Maintenance
                <IoIosAddCircleOutline/>
                </Link>
                <table>
                    <tr>
                        <th>Maintenance Done</th>
                        <th>Date Completed</th>
                        <th>Current Mileage</th>
                        <th>Next Mileage Due</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr> 
                {selectedCar.maintenance.map((maint: Maint) => ( 
                    <tr>
                        <td>{maint.type}</td>
                        <td>{maint.date}</td>
                        <td>{maint.mileage}</td>
                        <td>{maint.due}</td>
                        <Link className="link" to={`/edit/${selectedCar.id}/${maint.id}`}>
                            <td className='show-edit'><AiFillEdit/></td>
                        </Link>
                            <td onClick={async () => {
                                await store.carStore.deleteMaintAction(maint.id)
                            }}>
                                <RiDeleteBin5Line className='deletebutton' />
                            </td> 
                    </tr>    
                ))}  
                </table>
            </div>
        </div>
    )
}

export default CarCard