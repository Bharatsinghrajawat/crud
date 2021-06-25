import axios from 'axios';
import React, { useEffect, useState  } from 'react'
import { useHistory, useParams } from 'react-router-dom';

export default function EditUser() {
    const history = useHistory();
    const { id } = useParams();
    const [user,setUser] = useState({
        name : '',
        username : '',
        email : ''
    })
    const {name,username,email} = user;
    const inputChange = e => {
        // i used spread operator to put it's prevState as it is so when we change input with new value the prevState remains save and prevent uncontrolled component error
        setUser({...user,[e.target.name] : e.target.value})
    }

    const loadUser = async () => {
       let result = await axios.get(`http://localhost:5000/users/${id}`)
       setUser(result.data)
    }

    useEffect(()=>{
        loadUser();
    },[])

    const formSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/users/${id}`,user);
        history.push('/');
    }
    return (
        <div className='border border-primary border-5'>
            <h1>Edit User</h1>
            <form onSubmit={e=>formSubmit(e)} className="row g-3 justify-content-center">
  <div className="col-md-7 mt-5">
    <label htmlFor="validationDefault01" className="form-label">Name</label>
    <input onChange={e=>inputChange(e)} type="text" className="form-control" id="validationDefault01" value={name} name='name' required />
  </div>
  <div className="col-md-7 mt-5">
    <label htmlFor="validationDefault02" className="form-label">User name</label>
    <input onChange={e=>inputChange(e)} type="text" className="form-control" id="validationDefault02" value={username} name='username' required />
  </div>
  <div className="col-md-7 mt-5">
    <label htmlFor="validationDefaultUsername" className="form-label">Email</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">@</span>
      <input onChange={e=>inputChange(e)} type="text" className="form-control" value={email} name='email' id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required />
    </div>
  </div>

  <div className="col-12 mt-5 d-flex justify-content-center">
    <button className="btn btn-warning" type="submit">Edit User</button>
  </div>
</form>
        </div>
    )
}
