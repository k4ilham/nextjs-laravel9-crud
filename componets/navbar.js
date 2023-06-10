//import Link
import Link from 'next/link';

function Navbar() {

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark fixed-top border-0 shadow-sm">
                <div className="container">
                    <Link href="/">
                        <a className="navbar-brand">LARAVEL & NEXT.JS</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link href="/posts"><a className="nav-link">POSTS</a></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://santrikoding.com" target="_blank">SANTRIKODING</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )

}

export default Navbar