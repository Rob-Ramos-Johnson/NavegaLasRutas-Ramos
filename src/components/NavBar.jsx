import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">CreaTuLanding</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/category/velas">Velas</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/category/incienso">Incienso</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/category/cristales">Cristales</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/category/difusores">Difusores</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
