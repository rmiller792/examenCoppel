import React, { Component } from "react";
import "./Box.css";

class Box extends Component {
  render() {
    let data = null;
    if (this.props.tipo === 1) {
      data = (
        <div className="sin_padding_left col-12 col-sm-12 col-md-4">
          <div className="BRegistro cards-top-color col-xs-12">
            <div className="marginTop35">
              <h3 className=" bold text18 color-blue text-center">
                {this.props.title}
              </h3>
            </div>
            <div className="col-xs-12 card-height-format">
              <div
                dangerouslySetInnerHTML={{ __html: this.props.content }}
              ></div>
            </div>
          </div>
        </div>
      );
    }else{
          data = (
            <div className="sin_padding_left col-12 col-sm-12 col-md-3">
              <div className="BRegistro col-xs-12 card-shadow card-borders-bottom">
                  <div className={["card-second-section-img-container", this.props.i % 2 === 0 ? "card-primary-img" : "card-secundary-img" ].join(" ")}>
                		<img className="lazyImg lazyImg-loaded" src={this.props.image} alt="{this.props.title}" />
                	</div>
                <div className="marginTop35">
                  <h3 className=" bold text18 color-blue text-center">
                    {this.props.title}
                  </h3>
                </div>
                <div className="col-xs-12 card-height-format2">
                  <div
                    dangerouslySetInnerHTML={{ __html: this.props.content }}
                  ></div>
                </div>
              </div>
            </div>
          );
    }
    return  data ;
  }
}

export default Box;
