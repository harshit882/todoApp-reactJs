import React  from 'react'

export default function Navbar(props) {
   
  return (
    <div className='Nabvar'>
    <nav className="navbar  bg-dark Navbar-dark p-3 navbar-fixed-top ">
  <div className="container-fluid">
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search"  name="search" value={props.input} onChange={props.handelChange} placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
      
    </div>
  )
}
