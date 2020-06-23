import React, { Component } from "react";
import "./Seccion1.css";

class Seccion1 extends Component {
  render() {
    return (
      <div className="landingAbono">
        <div className="BH cardr">
          <div className="maxW_9">
            <div className="row BannerPrinicipal card-banner-format sin_margin_l sin_margin_r">
              <div className="col-12 col-xs-12 col-sm-12 col-md-6 TBannerP card-banner-vertalign">
                <h1 className="TPrin card-banner-printext card-banner-color-title">
                  Abona a tu crédito Coppel donde quieras
                </h1>
                <p className="TSec card-banner-sectext">
                  Por Coppel.com, con tu App y WhatsApp puedes abonar sin salir
                  de casa
                </p>
              </div>
              <div className="col-12 col-xs-12 col-sm-12 col-md-6 picture">
                <img
                  className="img"
                  src="https://www.coppel.com/wcsstore/AuroraStorefrontAssetStore/images/abonos/img-banner-img-desktop.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Seccion1;
