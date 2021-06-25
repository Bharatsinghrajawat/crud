import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
export default function ViewUser() {
    const [users,setUsers] = useState({
        name : '',
        username : '',
        email : ''
    });
    const {id} = useParams();

    useEffect(() => {
        fetchUser()
    },[])

    const fetchUser = async () => {
        let result = await axios.get(`http://localhost:5000/users/${id}`)
        setUsers(result.data)
    }
  
    return (
        <div className='container'>
            <h1 className='display-4'>User Id : {id}</h1>
            <hr />
            <ul className='list-group w-50'>
                <li className='list-group-item'>Name: {users.name}</li>
                <li className='list-group-item'>User Name : {users.username}</li>
                <li className='list-group-item'>Email : {users.email}</li>
            </ul>
        </div>
    )
}
