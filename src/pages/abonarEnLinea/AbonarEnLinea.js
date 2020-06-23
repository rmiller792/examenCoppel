import React, { Component } from "react";
import "./AbonarEnLinea.css";
import Menu from "../../components/menu/Menu";
import Seccion1 from "../../components/seccion1/Seccion1";
import Seccion2 from "../../components/seccion2/Seccion2";
import Seccion3 from "../../components/seccion3/Seccion3";
import Seccion4 from "../../components/seccion4/Seccion4";
import Footer from "../../components/footer/Footer";
import Help from "../../components/ui/help/Help";
import Experiencia from "../../components/ui/experiencia/Experiencia";

class AbonarEnLinea extends Component {
  render() {
    return (
      <>
        <Menu />
        <Seccion1 />
        <Seccion2 />
        <Seccion3 />
        <Seccion4 />
        <Footer />
        <Help />
        <Experiencia />
      </>
    );
  }
}

export default AbonarEnLinea;
