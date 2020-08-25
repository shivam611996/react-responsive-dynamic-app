import React from "react";
import SelectDataSource from "./components/SelectDataSource/SelectDataSource";
import CricketScoresByCountry from "./components/CricketScoresByCountry/CricketScoresByCountry";
import {
  getCricketScores,
  getDummyCricketScores,
} from "./services/cricketScores";
import { getCricketScoresByCountry } from "./utils/getCricketScoresByCountry";
import { getDummyCricketScoresByCountry } from "./utils/getDummyCricketScoresByCountry";
import { TEST_DATA } from "./constants/dataSource";
import "./App.css";

const App = () => {
  const [dataSource, setDataSource] = React.useState(TEST_DATA);
  const [cricketScoresByCountry, setCricketScoresByCountry] = React.useState(
    {}
  );
  const [error, setError] = React.useState(null);
  const searchFieldCount = Array(2).fill();

  const onDataSourceChange = ({ target: { value } }) => {
    setDataSource(value);
  };
  const fetchCricketScores = React.useCallback(async () => {
    let rawResponse, normalizedResponse;
    if (dataSource === TEST_DATA) {
      rawResponse = getDummyCricketScores();
      normalizedResponse = getDummyCricketScoresByCountry(rawResponse);
    } else {
      try {
        const promise = await getCricketScores();
        rawResponse = await promise.json();
        normalizedResponse = getCricketScoresByCountry(rawResponse);
      } catch (error) {
        setError("Error occured, please try again later.");
      }
    }
    setCricketScoresByCountry(normalizedResponse);
  }, [dataSource]);

  React.useEffect(() => {
    fetchCricketScores();
  }, [fetchCricketScores]);

  return (
    <main>
      <section>
        <SelectDataSource onDataSourceChange={onDataSourceChange} />
        {!error &&
          cricketScoresByCountry &&
          searchFieldCount.map((_, index) => (
            <CricketScoresByCountry
              key={index}
              cricketScoresByCountry={cricketScoresByCountry}
            />
          ))}
        {error && <div className="error">{error}</div>}
      </section>
    </main>
  );
};

export default App;
