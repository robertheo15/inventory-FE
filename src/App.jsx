import React from "react";

import "../src/styles/volt.css";
import Authentification from "./data/Authentification";
import RouteApp from "./router/RouteApp";

const App = () => {
  return (
    <div className="app">
      <Authentification>
        <RouteApp />
      </Authentification>
    </div>
  );
};

export default App;
