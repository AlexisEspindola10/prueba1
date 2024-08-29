import './twiter.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function App({ NombreImg, inicial }) {
  // Creacion de Estados
  const [isFollowing, setIsFollowing] = useState(inicial);

  // Funcion de cambio para el boton
  const cambio = () => {
    setIsFollowing(!isFollowing);
  };

  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const botonClase = isFollowing ? 'estilo1' : 'estilo2';

  return (
    <>
      <div className="page-container">
        <nav className="full-reset nav-phonestore">
          <div className="logo tittles-pages">PhoneStore</div>
          <ul className="list-unstyled full-reset navigation-list">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="product.html">Productos</a></li>
            <li><a href="news.html">Noticias</a></li>
            <li><a href="services.html">Servicios</a></li>
            <li><a href="contact.html">Contactenos</a></li>
          </ul>
          <i className="fa fa-bars visible-xs btn-mobile"></i>
        </nav>

        <div className="content-page cover-background font-content-index">
          <div className="jumbotron">
            <h1 className="tittles-pages">Bienvenido a PhoneStore</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              ipsam quod dignissimos rerum veniam rem architecto voluptas quos
              facere voluptatibus molestiae odit, suscipit atque id, voluptate
              culpa assumenda a repellendus.
            </p>
          </div>

          <section className="OS-phones section">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 text-center">
                  <p className="tittles-pages">
                    Sistemas en nuestros teléfonos y tablets
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-sm-4">
                  <div className="content-dest">
                    <p style={{ fontSize: '90px', textAlign: 'center' }}>
                      <i className="fa fa-apple"></i>
                    </p>
                    <h3 className="text-center">iOS</h3>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Saepe iure ea cum, quos, praesentium porro officia adipisci,
                      deserunt asperiores dignissimos quasi non libero eum
                      voluptate aut cumque nobis fuga. Laudantium!
                    </p>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-4">
                  <div className="content-dest">
                    <p style={{ fontSize: '90px', textAlign: 'center' }}>
                      <i className="fa fa-windows"></i>
                    </p>
                    <h3 className="text-center">Windows Phone</h3>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Saepe iure ea cum, quos, praesentium porro officia adipisci,
                      deserunt asperiores dignissimos quasi non libero eum
                      voluptate aut cumque nobis fuga. Laudantium!
                    </p>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-4">
                  <div className="content-dest">
                    <p style={{ fontSize: '90px', textAlign: 'center' }}>
                      <i className="fa fa-android"></i>
                    </p>
                    <h3 className="text-center">Android</h3>
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Saepe iure ea cum, quos, praesentium porro officia adipisci,
                      deserunt asperiores dignissimos quasi non libero eum
                      voluptate aut cumque nobis fuga. Laudantium!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="news-promo-content section">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 text-center">
                  <p className="tittles-pages">Novedades y productos</p>
                </div>

                <div className="col-xs-12 col-sm-6 text-center">
                  <div className="content-dest">
                    <img
                      src="assets/img/home-news.png"
                      alt="news-icon"
                      className="img-responsive center-box-content"
                    />
                    <h3>Noticias</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eius vitae similique quos veritatis numquam fugiat fugit ea
                      vel consectetur deserunt, provident hic nesciunt, natus
                      soluta voluptate laudantium a possimus suscipit.
                    </p>
                    <a href="#" className="btn btn-success">
                      Más información
                    </a>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 text-center">
                  <div className="content-dest">
                    <img
                      src="assets/img/home-promo.png"
                      alt="promo-icon"
                      className="img-responsive center-box-content"
                    />
                    <h3>Promociones</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eius vitae similique quos veritatis numquam fugiat fugit ea
                      vel consectetur deserunt, provident hic nesciunt, natus
                      soluta voluptate laudantium a possimus suscipit.
                    </p>
                    <a href="#" className="btn btn-success">
                      Más información
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="footer">
          <div className="container-fluid">
            <div className="col-xs-12 text-center">
              <h3>Síguenos en</h3>
              <ul className="list-unstyled list-social-icons">
                <li>
                  <a href="#!">
                    <i
                      className="fa fa-facebook"
                      style={{ backgroundColor: '#3B5998' }}
                    ></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i
                      className="fa fa-google-plus"
                      style={{ backgroundColor: '#DD4B39' }}
                    ></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i
                      className="fa fa-twitter"
                      style={{ backgroundColor: '#56A3D9' }}
                    ></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i
                      className="fa fa-youtube"
                      style={{ backgroundColor: '#BF221F' }}
                    ></i>
                  </a>
                </li>
              </ul>
              <h4>PhoneStore &copy; 2016</h4>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export function Segunda() {
  return (
    <div>
      <h2>Hola segundo</h2>
    </div>
  );
}
