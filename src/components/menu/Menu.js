import React, { Component } from "react";
import "./Menu.css";
import logo from '../../images/logo.svg'

class Menu extends Component {
  render() {
    return (
      <div className="row header">
        <div className="container">
            <a href="https://www.coppel.com/">
              <img
                src={logo}
                alt="Abona a tu crédito Coppel"
                className="logo-coppel pull-left"
              />
            </a>
            <a href="https://www.coppel.com/" className="pull-right">
              Volver a Coppel.com
            </a>
          </div>
      </div>
    );
  }
}

export default Menu;
