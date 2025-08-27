
import { Link } from 'react-router-dom'

const navbarItems = [
    {name: 'Home', path: '/'},
    {name: 'All Product', path: '/link'},
]

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to="#">MyStore</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {navbarItems.map((item, index) => (
                            item.dropdown ? (
                                <li className="nav-item dropdown" key={index}>
                                    <a className="nav-link dropdown-toggle hover-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {item.name}
                                    </a>
                                    <ul className="dropdown-menu">
                                        {item.items.map((dropdownItem, dropdownIndex) => (
                                            <li key={dropdownIndex}><Link className="dropdown-item hover-link" to={dropdownItem.path}>{dropdownItem.name}</Link></li>
                                        ))}
                                    </ul>
                                </li>
                            ) : (
                                <li className="nav-item" key={index}>
                                    <Link className="nav-link hover-link" to={item.path}>{item.name}</Link>
                                </li>
                            )
                        ))}
                        
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
        </nav>
    </div>
  )
}

export default Navbar