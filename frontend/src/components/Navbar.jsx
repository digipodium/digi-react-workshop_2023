import React from 'react'

const Navbar = () => {
    return (
            <nav className="navbar bg-danger border-bottom border-body navbar-expand-lg " >
                <div className="container-fluid ">
                    {/* <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </div>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar