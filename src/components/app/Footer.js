import React from "react";
import "../../assets/css/footer.css";
const Footer = () => {
  return (
    <footer className="app_footer">
      <div className="container flexBox flex-c">
        <h4 className="text">Sources :</h4>
        <a className="link" href="https://www.worldometers.info/coronavirus/">
          Worldometer
        </a>
        <a className="link" href="https://github.com/mathdroid/covid-19-api">
          Mathdroid
        </a>
        <a className="link" href="https://www.mohfw.gov.in/">
          Mohfw
        </a>
      </div>
    </footer>
  );
};

export default Footer;
