import React, { Component } from "react";
import Routes from "./src/routes";
import "intl";
import "intl/locale-data/jsonp/pt-BR";

export default class App extends Component {
  render() {
    return <Routes />;
  }
}
