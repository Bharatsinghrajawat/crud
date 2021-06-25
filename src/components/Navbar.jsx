import {Link} from 'react-router-dom'
const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link"  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
    <Link className='btn btn-outline-light me-2' to='/user/add'>Add User</Link>
  </div>
</nav>
    )
}
export default Navbar