import React, { Component } from "react";
import { FaShoppingBag, FaMobileAlt } from "react-icons/fa";
import { FcPhoneAndroid } from "react-icons/fc";
var logo = require("../img/elogo1.png");
var shortlogo = require("../img/elogo.png");

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__details">
          {/* <a className="header__details--logo" href="/"> */}
          <div>
            <FaShoppingBag />
            <FaMobileAlt />
            <FcPhoneAndroid /> E-Mall{" "}
          </div>
          {/* </a> */}
        </div>
      </div>
    );
  }
}

export default Header;
