import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function Aside() {
  const [isOpen, setIsOpen] = useState(true);
  const userData = useSelector((state) => state.auth.userData);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-light py-4 shadow-sm d-flex gap-0">
      <button
        onClick={toggleMenu}
        className="btn btn-dark fw-bold btn-sm rounded-0 rounded-end-2 "
        aria-expanded={isOpen}
      ></button>
      <ul
        className={`list-unstyled d-flex flex-column gap-2 mt-4  ${
          isOpen ? "" : "d-none"
        }`}
      >
        <li>
          <Link
            to="/dashboard"
            className={`btn btn-dark text-${userData.couleur} btn-sm rounded-0 rounded-end-2 w-100 fw-bold`}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="profile"
            className={`btn btn-dark text-${userData.couleur} btn-sm rounded-0 rounded-end-2 w-100 fw-bold`}
          >
            Profil
          </Link>
        </li>
        <li>
          <Link
            to="appearance"
            className={`btn btn-dark text-${userData.couleur} btn-sm rounded-0 rounded-end-2 w-100 fw-bold`}
          >
            Modifier couleur
          </Link>
        </li>
        <li>
          <Link
            to="password"
            className={`btn btn-dark text-${userData.couleur} btn-sm rounded-0 rounded-end-2 w-100 fw-bold`}
          >
            Modifier mot de passe
          </Link>
        </li>
        <li>
          <Link
            to="users"
            className={`btn btn-dark text-${userData.couleur} btn-sm rounded-0 rounded-end-2 w-100 fw-bold`}
          >
            Liste utilisateurs
          </Link>
        </li>
        <li>
          <Link
            to="users/new"
            className={`btn btn-dark text-${userData.couleur} btn-sm rounded-0 rounded-end-2 w-100 fw-bold`}
          >
            Ajouter utilisateur
          </Link>
        </li>
        <li>
          <Link
            to="requests/new"
            className={`btn btn-dark text-${userData.couleur} btn-sm rounded-0 rounded-end-2 w-100 fw-bold`}
          >
            Ajouter une demande
          </Link>
        </li>
        <li>
          <Link
            to="requests/user"
            className={`btn btn-dark text-${userData.couleur} btn-sm rounded-0 rounded-end-2 w-100 fw-bold`}
          >
            Afficher les demandes
          </Link>
        </li>
        <li>
          <Link
            to="requests/admin"
            className={`btn btn-dark text-${userData.couleur} btn-sm rounded-0 rounded-end-2 w-100 fw-bold`}
          >
            Gestion des demandes
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Aside;
