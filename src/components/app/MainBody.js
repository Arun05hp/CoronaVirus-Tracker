import React, { useState, useEffect } from "react";
import "../../assets/css/mainBody.css";
import Card from "../UI/Card";
import NumberFormat from "react-number-format";

const MainBody = () => {
  const [worldWideData, setWorldWideData] = useState({});
  const [countries, setCountries] = useState([]);
  const [country, setInputCountry] = useState("IN");
  const [countryInfo, setCountryInfo] = useState({});

  console.log(countryInfo);
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
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    const url = `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInputCountry(countryCode);
        setCountryInfo(data);
      });
  };

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
        <span className="title">
          <select value={country} onChange={onCountryChange}>
            <option value="IN">India</option>
            {countries.map((country, index) => (
              <option key={index} value={country.value}>
                {country.name}
              </option>
            ))}
          </select>
        </span>
      </div>
    </div>
  );
};

export default MainBody;
