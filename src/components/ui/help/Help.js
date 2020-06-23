import React, { Component } from "react";
import "./Help.css";
import $ from "jquery";

function irInicio(duration) {
  $("body, html").stop().animate(
    {
      scrollTop: "0px",
    },
    duration
  );
}

class Help extends Component {
  state = {
    visibleCuadro: false,
  };

  visibleHandler(){
    this.setState({
      visibleCuadro: !this.state.visibleCuadro
    })

  }



  render() {

    let cuadro = (
      <>
        <div
          className={["fixed"].join(" ")}
          onClick={(e) => this.visibleHandler()}
        >
          <div
            className={[
              "button",
              ,
              this.state.visibleCuadro ? "escondeBoton" : "muestraBoton",
            ].join(" ")}
          >
            <span>
              <i className="far fa-question-circle color-negro text20 iconHelp">
                <span className="roboto bold spanHelp text16">Ayuda</span>
              </i>
            </span>
          </div>
        </div>
        <div className={["fixed"].join(" ")}>
          <div
            className={[
              "cuadro",
              ,
              this.state.visibleCuadro ? "muestraCuadro" : "escondeCuadro",
            ].join(" ")}
          >
            <div className="cuadroHeader text-center">
              <span className="color-negro text18 bold textHelp">Ayuda</span>
              <span className="minimize" onClick={(e) => this.visibleHandler()}>
                -
              </span>
            </div>
            <div className="cuadroBody">
              <input
                className="form-control"
                type="text"
                placeholder="¿En qué podemos ayudarle?"
              ></input>
            </div>
          </div>
        </div>
      </>
    );
    return <div className="">{cuadro}</div>;
  }
}

export default Help;
