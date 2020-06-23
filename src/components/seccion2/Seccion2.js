import React, { Component } from "react";
import "./Seccion2.css";
import Box from "../ui/box/Box";
import informacion from "./informacion.json";

class Seccion2 extends Component {
  render() {
    const cuadros = informacion.map(itm => {
      
      return(
   <Box content={itm.content} title={itm.title} tipo={1} key={itm.title}/>
   )
  })
    return (
      <>
        <div className="container">
          <div className="marginTop35">
            <h2 className="col-xs-12 roboto bold text-center text22">
              Sigue estos pasos para abonar en:
            </h2>
          </div>
          <div className="marginTop20 row">{cuadros}</div>
        </div>
      </>
    );
  }
}

export default Seccion2;
