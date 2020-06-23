import React, { Component } from "react";
import "./Footer.css";
import $ from "jquery";

function irInicio(duration) {
  $("body, html").stop().animate(
    {
      scrollTop: "0px",
    },
    duration
  );
}

class Footer extends Component {
  render() {
    return (
      <div className="row">
        <div className="irInicio">
          <div className="irIniciocontent text-center">
            <a
              className="color-blanco"
              href="#"
              className="color-blanco text-center"
              onClick={(e) => irInicio(700)}
            >
              Ir al inicio<i className="fa fa-angle-up" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="contenidoFooter">
          <div className="footer">
            <ul>
              <li>
                <a
                  className="color-blanco"
                  href="https://www.coppel.com/aviso-de-privacidad"
                >
                  Aviso de privacidad
                </a>
              </li>
              <li>
                <a
                  className="color-blanco"
                  href="https://www.coppel.com/terminos-y-condiciones"
                >
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a
                  className="color-blanco"
                  href="https://www.coppel.com/compra-segura"
                >
                  Seguridad en Coppel.com
                </a>
              </li>
              <li>
                <a
                  className="color-blanco"
                  href="https://www.coppel.com/mapa-del-sitio"
                >
                  Mapa del sitio
                </a>
              </li>
              <li>
                <a className="color-blanco" href="https://www.coppel.com.ar/">
                  Coppel Argentina{" "}
                </a>
              </li>
              <li>
                <a
                  className="color-blanco"
                  href="https://www.hearcolors.com.mx/SelloAccesibilidad.php?num_clte=FA30D267"
                >
                  Declaración de accesibilidad
                </a>
              </li>
            </ul>
            <p>
              {new Date().getFullYear()} © Coppel todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
