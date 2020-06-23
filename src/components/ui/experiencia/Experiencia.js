import React, { Component } from "react";
import "./Experiencia.css";
import $ from "jquery";

class Experiencia extends Component {
  state = {
    visibleCuadroExperiencia: true,
    option: null,
    optionCuadricula: null,
    changeOptions: false,
  };

  visibleHandler() {
    this.setState({
      visibleCuadroExperiencia: !this.state.visibleCuadroExperiencia,
    });
  }

  changeOptions(e, option) {
    e.preventDefault();
    this.setState({ option: option });
  }
  changeOptionRecomendacion(option) {
    this.setState({ optionCuadricula: option });
  }
  siguienteOpciones() {
    this.setState({ changeOptions: !this.state.changeOptions });
  }

  render() {
    let cuadroExperiencia = (
      <>
        <div className={["fixedExperiencia"].join(" ")}>
          <div
            className={[
              "buttonExperiencia",
              ,
              this.state.visibleCuadroExperiencia
                ? "escondeBotonExperiencia"
                : "muestraBotonExperiencia",
            ].join(" ")}
          >
            <div className="cuadroMinimize">
              <i
                className={[
                  "color-blanco icon-arrow",
                  this.state.visibleCuadroExperiencia
                    ? "fas fa-caret-up"
                    : "fas fa-caret-down",
                ].join(" ")}
                onClick={(e) => this.visibleHandler()}
              ></i>
            </div>
            <div className="contentExperiencia  text-center">
              <div
                className={[!this.state.changeOptions ? null : "d-none"].join(
                  " "
                )}
              >
                <div className="pregunta">
                  <span className="color-blanco ">
                    ¿Nos compartes tu experiencia en Coppel.com?
                  </span>
                </div>
                <div className="text-left">
                  <form>
                    <div className="form">
                      <input
                        type="radio"
                        id="si"
                        name="no"
                        value="si"
                        onChange={(e) => this.changeOptions(e, 1)}
                      />
                      <label htmlFor="si">Si</label>
                    </div>
                    <div className="form">
                      <input
                        type="radio"
                        id="no"
                        name="no"
                        value="no"
                        onChange={(e) => this.changeOptions(e, 2)}
                      />
                      <label htmlFor="no">No</label>
                    </div>
                  </form>
                  <div className="text-right bottonSiguiente">
                    <button
                      type="button"
                      className="btn btn-success"
                      disabled={this.state.option === null}
                      onClick={(e) => this.siguienteOpciones()}
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={[
                  this.state.changeOptions && this.state.option === 1
                    ? null
                    : "d-none",
                ].join(" ")}
              >
                <div className="pregunta">
                  <span className="color-blanco ">
                    ¿Qué tan probable es que recomiendes Coppel.com a tus amigos
                    y familiares?
                  </span>
                </div>
                <div className="text-left contenedorCuadricula">
                  <div
                    className={[
                      "cuadricula",
                      this.state.optionCuadricula === 0 ? "activeOption" : null,
                    ].join(" ")}
                    onClick={(e) => this.changeOptionRecomendacion(0)}
                  >
                    0
                  </div>
                  <div
                    className={[
                      "cuadricula",
                      this.state.optionCuadricula === 1 ? "activeOption" : null,
                    ].join(" ")}
                    onClick={(e) => this.changeOptionRecomendacion(1)}
                  >
                    1
                  </div>
                  <div
                    className={[
                      "cuadricula",
                      this.state.optionCuadricula === 2 ? "activeOption" : null,
                    ].join(" ")}
                    onClick={(e) => this.changeOptionRecomendacion(2)}
                  >
                    2
                  </div>
                  <div
                    className={[
                      "cuadricula",
                      this.state.optionCuadricula === 3 ? "activeOption" : null,
                    ].join(" ")}
                    onClick={(e) => this.changeOptionRecomendacion(3)}
                  >
                    3
                  </div>
                  <div
                    className={[
                      "cuadricula",
                      this.state.optionCuadricula === 4 ? "activeOption" : null,
                    ].join(" ")}
                    onClick={(e) => this.changeOptionRecomendacion(4)}
                  >
                    4
                  </div>
                  <div
                    className={[
                      "cuadricula",
                      this.state.optionCuadricula === 5 ? "activeOption" : null,
                    ].join(" ")}
                    onClick={(e) => this.changeOptionRecomendacion(5)}
                  >
                    5
                  </div>
                  <div
                    className={[
                      "cuadricula",
                      this.state.optionCuadricula === 6 ? "activeOption" : null,
                    ].join(" ")}
                    onClick={(e) => this.changeOptionRecomendacion(6)}
                  >
                    6
                  </div>
                  <div
                    className={[
                      "cuadricula",
                      this.state.optionCuadricula === 7 ? "activeOption" : null,
                    ].join(" ")}
                    onClick={(e) => this.changeOptionRecomendacion(7)}
                  >
                    7
                  </div>
                  <div
                    className={[
                      "cuadricula",
                      this.state.optionCuadricula === 8 ? "activeOption" : null,
                    ].join(" ")}
                    onClick={(e) => this.changeOptionRecomendacion(8)}
                  >
                    8
                  </div>
                  <div
                    className={[
                      "cuadricula",
                      this.state.optionCuadricula === 9 ? "activeOption" : null,
                    ].join(" ")}
                    onClick={(e) => this.changeOptionRecomendacion(9)}
                  >
                    9
                  </div>
                  <div
                    className={[
                      "cuadricula",
                      this.state.optionCuadricula === 10
                        ? "activeOption"
                        : null,
                    ].join(" ")}
                    onClick={(e) => this.changeOptionRecomendacion(10)}
                  >
                    10
                  </div>
                  <div className="pull-left">
                    <span className="color-blanco">Poco probable</span>
                  </div>
                  <div className="pull-right">
                    <span className="color-blanco">Muy probable</span>
                  </div>
                </div>
                <div className="text-right bottonSiguiente marginTop20">
                  <button
                    type="button"
                    className="btn btn-success"
                    disabled={this.state.option === null}
                    onClick={(e) => this.visibleHandler()}
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
            <div className="contentExperiencia  text-center">
              <div
                className={[
                  this.state.changeOptions && this.state.option === 2
                    ? null
                    : "d-none",
                ].join(" ")}
              >
                <div className="pregunta">
                  <span className="color-blanco ">Gracias</span>
                </div>
                <div className="text-right bottonSiguiente marginTop20">
                  <button
                    type="button"
                    className="btn btn-success"
                    disabled={this.state.option === null}
                    onClick={(e) => this.visibleHandler()}
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
    return <div className="">{cuadroExperiencia}</div>;
  }
}

export default Experiencia;
