import { useSelector } from "react-redux";

function Footer() {
  const userData = useSelector((state) => state.auth.userData);

  return (
    <footer className="bg-dark text-light py-5 ">
      <div className="container">
        <div className="row gy-4">
          {/* Adresse */}
          <div className="col-md-4">
            <h5 className={`mb-3 text-${userData.couleur}`}>Notre Adresse</h5>
            <ul className="list-unstyled">
              <li>123 Rue de la République</li>
              <li>75001 Paris, France</li>
              <li>Tél: +33 1 23 45 67 89</li>
              <li>Email: contact@example.com</li>
            </ul>
          </div>
          {/* Liens Rapides */}
          {/* Liens Rapides */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className={`mb-3 text-${userData.couleur}`}>Liens Rapides</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="_" className="text-light">
                  Accueil
                </a>
              </li>
              <li className="mb-2">
                <a href="_" className="text-light">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="_" className="text-light">
                  À propos
                </a>
              </li>
              <li className="mb-2">
                <a href="_" className="text-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Réseaux Sociaux */}
          <div className="col-md-4">
            <h5 className={`mb-3 text-${userData.couleur}`}>Suivez-nous</h5>
            <div className="d-flex gap-3">
              <a href="_" className="text-light fs-4">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="_" className="text-light fs-4">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="_" className="text-light fs-4">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="_" className="text-light fs-4">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Separator */}
        <hr className="my-4 border-light" />

        {/* Copyright */}
        <div className="row">
          <div className="col-12 text-center">
            <p className={`m-0 text-${userData.couleur}`}>
              © 2024 MonCoin. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
