import React from "react";
import { getCountries } from "../../utils/getCountries";
import "./CricketScoresByCountry.css";

const CricketScoresByCountry = ({ cricketScoresByCountry }) => {
  const [country, setCountry] = React.useState("");
  const countries = getCountries(cricketScoresByCountry).map((country) =>
    country.toLowerCase()
  );
  let averageScore = "-";
  const barWidthStyle = { width: "0px" };

  const onCountrySearch = ({ target: { value } }) => {
    setCountry(value);
  };

  if (countries.includes(country.toLowerCase())) {
    const { totalScore, matchesCount } = cricketScoresByCountry[country];
    averageScore = totalScore / matchesCount;
    barWidthStyle.width = averageScore * 2 + "px";
  }

  return (
    <div className="row">
      <div className="country">
        <form>
          The Country:{" "}
          <input
            className="country-input"
            type="text"
            onChange={onCountrySearch}
            value={country}
          />
        </form>
      </div>
      <div className="average">The Average: {averageScore}</div>
      <div className="horiz-bar" style={barWidthStyle}>
        &nbsp;
      </div>
    </div>
  );
};

export default CricketScoresByCountry;
