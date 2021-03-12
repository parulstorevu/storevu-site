import React from "react";
import _ from "lodash";
import { ReactTypeformEmbed } from "react-typeform-embed";
import { Link, withPrefix, classNames } from "../utils";
import Icon from "./Icon";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.text = props.text || "Click to open the popup!";
    this.openForm = this.openForm.bind(this);
  }

  openForm() {
    this.typeformEmbed.typeform.open();
  }

  render() {
    return (
      <div className="">
        <ReactTypeformEmbed
          popup
          autoOpen={false}
          url="https://6uewfk77fpv.typeform.com/to/cPHfE8NG"
          hideHeaders
          hideFooter
          buttonText="Get in Touch"
          style={{ position: "relative" }}
          ref={(tf) => {
            this.typeformEmbed = tf;
          }}
        />
        <button
          className="button"
          onClick={this.openForm}
          style={{ cursor: "pointer" }}
        >
          {this.text}
        </button>
      </div>
    );
  }
}
