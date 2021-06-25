import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
       fetchData()
    // axios.get('http://localhost:5000/users')
    // .then(res=>setUsers(res.data))
    },[])
    const fetchData = async ()=>{
        let result = await axios.get('http://localhost:5000/users')
         setUsers(result.data.reverse())
     };

    const deleteHandler = async id => {
        await axios.delete(`http://localhost:5000/users/${id}`);
        fetchData();
    } 
    return(
        <div>
            Home Page
            
            <table className="table table-dark table-hover shadow">
                <thead>
                    <tr>
                        <th scope="col">Sr.</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope='col'>Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                     {users.map((user,index)=>(
                         <tr key={user.id}>
                             <th scope='row'>{index+1}</th>
                             <td>{user.name}</td>
                             <td>{user.username}</td>
                             <td>{user.email}</td>
                             <td>
                                 <Link to={`/user/${user.id}`} className='btn btn-primary mr-2'>View</Link>
                                 <Link to={`/user/edit/${user.id}`} className='btn btn-outline-primary mr-2'>Edit</Link>
                                 <button onClick={()=>deleteHandler(user.id)} className='btn btn-danger'>Delete</button>
                             </td>
                         </tr>
                     ))}   
                </tbody>
            </table>
        </div>
    )
}
export default Home