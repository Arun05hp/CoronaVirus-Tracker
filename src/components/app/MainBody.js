import React, { useState, useEffect } from "react";
import "../../assets/css/mainBody.css";
import Card from "../UI/Card";
import NumberFormat from "react-number-format";

const MainBody = () => {
  const [worldWideData, setWorldWideData] = useState({});
  const [countryData, setCountryData] = useState({});
  const [stateData, setStateData] = useState([]);

  useEffect(() => {
    try {
      fetch("https://disease.sh/v3/covid-19/all")
        .then((response) => response.json())
        .then((data) => {
          setWorldWideData(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const getCountryData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries/IN")
        .then((response) => response.json())
        .then((data) => {
          setCountryData(data);
        });
    };
    const getStateData = async () => {
      await fetch("https://api.covidindiatracker.com/state_data.json")
        .then((response) => response.json())
        .then((data) => {
          const stateData = data.map((item) => ({
            state: item.state,
            confirmed: item.confirmed,
            recovered: item.recovered,
            deaths: item.deaths,
          }));
          console.log("s", stateData);
          setStateData(stateData);
        });
    };

    getCountryData();
    getStateData();
  }, []);

  return (
    <div className="container">
      <div className="innerContainer">
        <span className="title">WorldWide</span>
        <div className="flex-grid flex-csb text-center-sm">
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
              <h2 className="hero-text-g">
                <NumberFormat
                  value={worldWideData.todayRecovered}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </h2>
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
              <h2 className="hero-text-d">
                <NumberFormat
                  value={worldWideData.todayDeaths}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </h2>
            </Card>
          </div>
          <div className="col">
            <Card>
              <p className="hero-text h3">Recovery Rate </p>
              <p className="hero-text-g h1">
                <NumberFormat
                  value={(
                    (worldWideData.recovered / worldWideData.cases) *
                    100
                  ).toFixed(2)}
                  displayType={"text"}
                  thousandSeparator={true}
                />{" "}
                %
              </p>
              <p className="hero-text">Death Rate</p>
              <h2 className="hero-text-d">
                <NumberFormat
                  value={(
                    (worldWideData.deaths / worldWideData.cases) *
                    100
                  ).toFixed(2)}
                  displayType={"text"}
                  thousandSeparator={true}
                />{" "}
                %
              </h2>
            </Card>
          </div>
        </div>
        <span className="title">{countryData.country}</span>
        <div className="flex-grid flex-csb text-center-sm">
          <div className="col">
            <Card>
              <p className="hero-text h3">Total Confirmed </p>
              <p className="hero-text-y h1">
                <NumberFormat
                  value={countryData.cases}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </p>
              <p className="hero-text">Today Confirmed</p>
              <h2 className="hero-text-y">
                <NumberFormat
                  value={countryData.todayCases}
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
                  value={countryData.recovered}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </p>
              <p className="hero-text">Today Recovered </p>
              <h2 className="hero-text-g">
                <NumberFormat
                  value={countryData.todayRecovered}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </h2>
            </Card>
          </div>
          <div className="col">
            <Card>
              <p className="hero-text h3">Total Deaths </p>
              <p className="hero-text-d h1">
                <NumberFormat
                  value={countryData.deaths}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </p>
              <p className="hero-text">Today Deaths</p>
              <h2 className="hero-text-d">
                <NumberFormat
                  value={countryData.todayDeaths}
                  displayType={"text"}
                  thousandSeparator={true}
                />
              </h2>
            </Card>
          </div>
          <div className="col">
            <Card>
              <p className="hero-text h3">Recovery Rate </p>
              <p className="hero-text-g h1">
                <NumberFormat
                  value={(
                    (countryData.recovered / countryData.cases) *
                    100
                  ).toFixed(2)}
                  displayType={"text"}
                  thousandSeparator={true}
                />{" "}
                %
              </p>
              <p className="hero-text">Death Rate</p>
              <h2 className="hero-text-d">
                <NumberFormat
                  value={(
                    (countryData.deaths / countryData.cases) *
                    100
                  ).toFixed(2)}
                  displayType={"text"}
                  thousandSeparator={true}
                />{" "}
                %
              </h2>
            </Card>
          </div>
        </div>
        <div className="table-responsive">
          <Card>
            <table>
              <thead>
                <tr>
                  <th className="text-w">State</th>
                  <th className="text-w">Confirmed</th>
                  <th className="text-w">Recovered</th>
                  <th className="text-w">Deaths</th>
                </tr>
              </thead>
              <tbody>
                {stateData.map((s) => (
                  <tr>
                    <td className="text-w">{s.state}</td>
                    <td className="hero-text-y">{s.confirmed}</td>
                    <td className="hero-text-g">{s.recovered}</td>
                    <td className="hero-text-d">{s.deaths}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
