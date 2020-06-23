import React, { Component } from "react";
import "./Seccion4.css";
import Box from "../ui/box/Box";

class Seccion4 extends Component {
  render() {
    return (
      <>
        <div className="container sin_padding">
          <div className="marginTop35">
            <h2 className="col-12 col-xs-12 roboto bold text-center text22">
              Pagar a tiempo tiene grandes beneficios para ti
            </h2>
          </div>
          <div className="marginTop20 ">
            <div className="bloqueBeneficios  card-shadow card-beneficios-padding-fix row">
                    <div className="tMargin primero col-12 col-xs-12 col-sm-12 col-md-4 card-beneficios-subpadding-fix card-beneficios-height-fix row">
                        <div className="col-2"> <img className="icono card-beneficios-img" src="https:coppel.com/wcsstore/AuroraStorefrontAssetStore/images/abonos/circulo_tarjeta.png" alt=""/> </div>
                        <div className="col-10 card-beneficios-text-container">
                            <p className="card-beneficios-text-width">Compra a crédito con un mayor plazo y sin pago inicial</p>
                        </div>
                    </div>
                    <div className="tMargin segundo  col-12 col-xs-12 col-sm-12 col-md-4 card-beneficios-subpadding-fix card-beneficios-height-fix row">
                        <div className="col-2"> <img className="icono card-beneficios-img" src="https:coppel.com/wcsstore/AuroraStorefrontAssetStore/images/abonos/circulo_llave.png" alt=""/> </div>
                        <div className="col-10 card-beneficios-text-container">
                            <p className="card-beneficios-text-width">Usa tu crédito para comprar en negocios afiliados con <a href="/coppel-pay" className="card-link-format" data-nd1="Landing abonos" data-nd2="Pagar a tiempo tiene grandes beneficios para ti" data-nd3="Coppel Pay" data-nd4="" data-evento="clicGeneral">Coppel Pay</a></p>
                        </div>
                    </div>
                    <div className="tercero col-12 col-xs-12 col-sm-12 col-md-4 card-beneficios-subpadding-fix card-beneficios-height-fix row">
                        <div className="col-2"> <img className="icono card-beneficios-img" src="https:coppel.com/wcsstore/AuroraStorefrontAssetStore/images/abonos/circulo_mano.png" alt=""/> </div>
                        <div className="col-10 card-beneficios-text-container">
                            <p className="card-beneficios-text-width">Solicita <a href="/solicitar-prestamo-personal" className="card-link-format" data-nd1="Landing abonos" data-nd2="Pagar a tiempo tiene grandes beneficios para ti" data-nd3="préstamos de dinero" data-nd4="" data-evento="clicGeneral">préstamos de dinero</a> en cualquier momento en Coppel.com, tu App y en tienda</p>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </>
    );
  }
}

export default Seccion4;
