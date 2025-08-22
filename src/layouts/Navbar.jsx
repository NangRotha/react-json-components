import React from 'react'
import { Link } from 'react-router-dom'

const navbarItems = [
    {name: 'Home', path: '/'},
    {name: 'Link', path: '/link'},
    {name: 'Dropdown', path: '/dropdown', dropdown:true ,items:
        [
            {name: 'Action', path: '/action'},
            {name: 'Another action', path: '/another-action'},
            {name: 'Something else here', path: '/something-else-here'},
        ]
    },
    {name: 'Disabled', path: '/disabled', disabled:true},
]

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">Logo</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        {navbarItems.map((item, index) => (
                            item.dropdown ? (
                                <li class="nav-item dropdown" key={index}>
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {item.name}
                                    </a>
                                    <ul class="dropdown-menu">
                                        {item.items.map((dropdownItem, dropdownIndex) => (
                                            <li key={dropdownIndex}><Link class="dropdown-item" to={dropdownItem.path}>{dropdownItem.name}</Link></li>
                                        ))}
                                    </ul>
                                </li>
                            ) : (
                                <li class="nav-item" key={index}>
                                    <Link class="nav-link" to={item.path}>{item.name}</Link>
                                </li>
                            )
                        ))}
                        
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
        </nav>
    </div>
  )
}

export default Navbar