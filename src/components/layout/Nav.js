import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Nav() {
  const userData = useSelector((state) => state.auth.userData);

  return (
    <nav className={`bg-dark shadow-sm pt-2`}>
      <ul className="list-unstyled d-flex justify-content-around align-items-center mb-0">
        <li>
          <Link
            to="/dashboard"
            className={`btn btn-${userData.couleur} rounded-0 rounded-top-3 btn-sm fw-bold`}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="profile"
            className={`btn btn-${userData.couleur} rounded-0 rounded-top-3 btn-sm fw-bold`}
          >
            Profil
          </Link>
        </li>
        <li>
          <Link
            to="appearance"
            className={`btn btn-${userData.couleur} rounded-0 rounded-top-3 btn-sm fw-bold`}
          >
            Modifier couleur
          </Link>
        </li>
        <li>
          <Link
            to="password"
            className={`btn btn-${userData.couleur} rounded-0 rounded-top-3 btn-sm fw-bold`}
          >
            Modifier mot de passe
          </Link>
        </li>
        <li>
          <Link
            to="users"
            className={`btn btn-${userData.couleur} rounded-0 rounded-top-3 btn-sm fw-bold`}
          >
            Liste utilisateurs
          </Link>
        </li>
        <li>
          <Link
            to="users/new"
            className={`btn btn-${userData.couleur} rounded-0 rounded-top-3 btn-sm fw-bold`}
          >
            Ajouter utilisateur
          </Link>
        </li>
        <li>
          <Link
            to="requests/new"
            className={`btn btn-${userData.couleur} rounded-0 rounded-top-3 btn-sm fw-bold`}
          >
            Ajouter une demande
          </Link>
        </li>
        <li>
          <Link
            to="requests/user"
            className={`btn btn-${userData.couleur} rounded-0 rounded-top-3 btn-sm fw-bold`}
          >
            Afficher les demandes
          </Link>
        </li>
        <li>
          <Link
            to="requests/admin"
            className={`btn btn-${userData.couleur} rounded-0 rounded-top-3 btn-sm fw-bold`}
          >
            Gestion des demandes
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
