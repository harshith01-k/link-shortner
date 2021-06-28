import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Advanced from "./components/Advanced";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Shorten from "./components/Shorten";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
      <Shorten />
      <Advanced />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
