// src/Dashboard.js
import React from 'react';

const LoginScreen = () => {
  return (
    <div>
      <div className="container position-sticky z-index-sticky top-0">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
              <div className="container-fluid pe-0">
                <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3" href="#">
                  Dr Iheb Chebbi
                </a>
                <button
                  className="navbar-toggler shadow-none ms-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navigation"
                  aria-controls="navigation"
                  aria-expanded="false"
                  aria-label="Basculer la navigation"
                >
                  <span className="navbar-toggler-icon mt-2">
                    <span className="navbar-toggler-bar bar1"></span>
                    <span className="navbar-toggler-bar bar2"></span>
                    <span className="navbar-toggler-bar bar3"></span>
                  </span>
                </button>
                <div className="collapse navbar-collapse" id="navigation">
                  <ul className="navbar-nav mx-auto ms-xl-auto me-xl-7">
                    {/* Ajoutez vos éléments de navigation ici */}
                  </ul>
                  <li className="nav-item d-flex align-items-center">
                    <a
                      className="btn btn-round btn-sm mb-0 btn-outline-primary me-2"
                      target="_blank"
                      href="https://www.creative-tim.com/builder?ref=navbar-soft-ui-dashboard"
                    >
                      Formulaire
                    </a>
                  </li>
                </div>
              </div>
            </nav>
            {/* Fin de la Navbar */}
          </div>
        </div>
      </div>
      <main className="main-content mt-0">
        <section>
          <div className="page-header min-vh-75">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                  <div className="card card-plain mt-8">
                    <div className="card-header pb-0 text-left bg-transparent">
                      <h3 className="font-weight-bolder text-info text-gradient">Bienvenue de nouveau</h3>
                      <p className="mb-0">Entrez votre e-mail et votre mot de passe pour vous connecter</p>
                    </div>
                    <div className="card-body">
                      <form role="form">
                        <label>Email</label>
                        <div className="mb-3">
                          <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="email-addon" />
                        </div>
                        <label>Mot de passe</label>
                        <div className="mb-3">
                          <input type="password" className="form-control" placeholder="Mot de passe" aria-label="Mot de passe" aria-describedby="password-addon" />
                        </div>
                        <div className="text-center">
                          <button type="button" className="btn bg-gradient-info w-100 mt-4 mb-0">Se connecter</button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                      <p className="mb-4 text-sm mx-auto">
                        Vous n'avez pas de compte ?
                        <a href="javascript:;" className="text-info text-gradient font-weight-bold"> Inscrivez-vous</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                    <div
                      className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                      style={{ backgroundImage: "url('../assets/img/curved-images/curved6.jpg')" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Pied de page */}
      <footer className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-4 mx-auto text-center">
              <a href="javascript:;" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">Entreprise</a>
              <a href="javascript:;" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">À propos de nous</a>
              <a href="javascript:;" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">Équipe</a>
              <a href="javascript:;" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">Produits</a>
              <a href="javascript:;" className="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">Tarification</a>
            </div>
            <div className="col-lg-8 mx-auto text-center mb-4 mt-2">
              <a href="javascript:;" className="text-secondary me-xl-4 me-4">
                <span className="text-lg fab fa-instagram"></span>
              </a>
              <a href="javascript:;" className="text-secondary me-xl-4 me-4">
                <span className="text-lg fab fa-pinterest"></span>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-8 mx-auto text-center mt-1">
              <p className="mb-0 text-secondary">
                Copyright © <script>document.write(new Date().getFullYear())</script> Dr ihebchebbi.tn
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoginScreen;
