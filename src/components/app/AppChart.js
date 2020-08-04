import React, { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";
const AppChart = () => {
  const [dailyData, setDailyData] = useState([]);
  console.log(dailyData);
  useEffect(() => {
    try {
      fetch("https://api.covid19api.com/dayone/country/India")
        .then((response) => response.json())
        .then((data) => {
          const newData = data.map((item) => ({
            confirmed: item.Confirmed,
            recovered: item.Recovered,
            deaths: item.Deaths,
            date: item.Date.slice(0, 10),
          }));
          setDailyData(newData);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="chartContainer">
      <Line
        data={{
          labels: dailyData.map((item) =>
            new Date(item.date).toDateString("dd-mm-yyyy")
          ),
          datasets: [
            {
              data: dailyData.map((item) => item.confirmed),
              label: "Confirmed",
              borderColor: "#f8bd46",
              fill: false,
            },
            {
              data: dailyData.map((item) => item.recovered),
              label: "Recovered",
              borderColor: "#65b96e",
              fill: false,
            },
            {
              data: dailyData.map((item) => item.deaths),
              label: "Deaths",
              borderColor: "#e1306c",
              fill: false,
            },
          ],
        }}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default AppChart;
