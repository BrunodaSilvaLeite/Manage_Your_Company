import "../style/components/NavBar.scss";
import { Link } from "react-router-dom";

export function NavBar(totalAsset: any) {
    const id = localStorage.getItem("comunitId");
    if (totalAsset.totalAsset?.length === 0) {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to={`/`} className="nav-link"><i className="bi bi-box-arrow-in-left"></i>Company</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/overview/${id}`} className="nav-link"><i className="bi bi-card-list"></i>Home(overview)</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
    else {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to={`/`} className="nav-link"><i className="bi bi-box-arrow-in-left"></i>Company</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/overview/${id}`} className="nav-link"><i className="bi bi-card-list"></i>Home(overview)</Link>
                        </li>
                        <li className="nav-item">
                            <li><Link to={`/assetPage/${id}`} className="nav-link"><i className="bi bi-box"></i>Assets</Link></li>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}

