import React from "react";
import Header from "./Header";
import Content from "./Content";
import "../styles.css";

const App = () => {
  return (
    <div className="App">
      <Header className="nav-style" />
      <Content />
    </div>
  );
};

export default App;
