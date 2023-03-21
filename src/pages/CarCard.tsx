import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Link} from "react-router-dom"
import { Car } from '../Utilities/Interfaces';
import { Maint } from '../Utilities/Interfaces';

interface CarCardProps {
    selectedCar: Car;
}

const CarCard: React.FC<CarCardProps> = ({selectedCar}: CarCardProps) => {
  return (
        <div className="showcard">
            <div className="show-page">
                <img className="showImage" src={selectedCar.image} alt="" />
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
                        <Link to={`/edit/${selectedCar.id}/${maint.id}`}>
                            <td><AiFillEdit/></td>
                        </Link>
                            <td><RiDeleteBin5Line/></td> 
                    </tr>    
                ))}  
                </table>
            </div>
        </div>
    )
}

export default CarCard