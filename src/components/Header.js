import logo from "../logo.png";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="mfs-header">
      <div className="mfs-logo">
        <Link to="/">
          <img src={logo} alt="mfs logo"></img>
        </Link>
      </div>
      <div className="mfs-right-header">
        <Link to="/finance">Finance</Link>
      </div>
    </header>
  );
}
