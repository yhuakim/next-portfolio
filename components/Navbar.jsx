import Link from 'next/link'

function Navbar() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
        <div className="container row align-items-center">
          <Link href="/">
            <a className="navbar-brand active col-1">
              Ekene
            </a>
          </Link>
          <div className="navbar-conten align-content-center col-7 me-3" id="navbarContent">
            <ul className="navbar-nav d-flex flex-row me-auto mb-2 mb-lg-0 ">
              <li className="nav-item px-2">
                <Link href="/talks">
                  <a className="nav-link">
                    Talks
                  </a>
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link href="/articles">
                  <a className="nav-link">
                    Articles
                  </a>
                </Link>
              </li>
              <li className="nav-item px-1">
                <Link href="/archives">
                  <a className="nav-link" >
                    Archives
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="social col-1 me-3">
            <ul className="flex-row navbar-nav">
              <li className="nav-item pe-1"><a className="nav-link" href="https://twitter.com" target='_blank'>
                <i className="fab fa-twitter"></i>
              </a></li>
              <li className="nav-item pe-1"><a className="nav-link" href="https://skype.com" target='_blank'>
                <i className="fab fa-skype"></i>
              </a></li>
              <li className="nav-item pe-1"><a className="nav-link" href="https://github.com" target='_blank'>
                <i className="fab fa-github"></i>
              </a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;