import React, { Component } from "react";
import "./Seccion3.css";
import Box from "../ui/box/Box";
import informacion from "./informacion.json";

class Seccion3 extends Component {
  render() {
    const cuadros = informacion.map((itm, i) => {
      
      return(
   <Box content={itm.content} title={itm.title} image={itm.image} tipo={2} i={i} key={itm.title}/>
   )
  })
    return (
      <>
        <div className="container d-sm-none d-md-block">
          <div className="marginTop35">
            <h2 className="col-xs-12 roboto bold text-center text22">
              Otras formas de abonar
            </h2>
          </div>
          <div className="marginTop20 row">{cuadros}</div>
        </div>
      </>
    );
  }
}

export default Seccion3;
