import React from "react";
import Header from "./components/app/Header";
import MainBody from "./components/app/MainBody";
import Footer from "./components/app/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
