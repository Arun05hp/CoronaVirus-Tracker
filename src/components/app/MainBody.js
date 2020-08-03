import React, { useState, useEffect } from "react";
import "../../assets/css/mainBody.css";
import Card from "../UI/Card";
import NumberFormat from "react-number-format";

const MainBody = () => {
  const [worldWideData, setWorldWideData] = useState({});

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setWorldWideData(data);
      });
  }, []);

  return (
    <div className="container">
      <div className="innerContainer">
        <span className="title">WorldWide</span>
        <div className="flex-grid flex-w">
          <div className="col">
            <Card>
              <p className="hero-text h3">Total Confirmed </p>
              <p className="hero-text-y h1">
                <NumberFormat
                  value={worldWideData.cases}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </p>
              <p className="hero-text">Today Confirmed</p>
              <h2 className="hero-text-y">
                <NumberFormat
                  value={worldWideData.todayCases}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </h2>
            </Card>
          </div>
          <div className="col">
            <Card>
              <p className="hero-text h3">Total Recovered </p>
              <p className="hero-text-g h1">
                <NumberFormat
                  value={worldWideData.recovered}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </p>
              <p className="hero-text">Today Recovered </p>
              <h2 className="hero-text-g">18,301</h2>
            </Card>
          </div>
          <div className="col">
            <Card>
              <p className="hero-text h3">Total Deaths </p>
              <p className="hero-text-d h1">
                <NumberFormat
                  value={worldWideData.deaths}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </p>
              <p className="hero-text">Today Deaths</p>
              <h2 className="hero-text-d">18,301</h2>
            </Card>
          </div>
          <div className="col">
            <Card>
              <p className="hero-text h3">Recovery rate </p>
              <p className="hero-text-g h1">
                <NumberFormat
                  value={worldWideData.cases}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </p>
              <p className="hero-text">Death Deaths</p>
              <h2 className="hero-text-d">2.3 %</h2>
            </Card>
          </div>
        </div>
        <span className="title">
          <select name="pets" id="pet-select">
            <option value="">Select</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="Afganistan">goldfishdsfsdf</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfishdsfsdf">goldfishdsfsdf</option>
          </select>
        </span>
      </div>
    </div>
  );
};

export default MainBody;
