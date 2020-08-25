import React from "react";
import SelectDataSource from "./components/SelectDataSource/SelectDataSource";
import SearchCountryScores from "./components/SearchCountryScores/SearchCountryScores";
import {
  getCricketScores,
  getDummyCricketScores,
} from "./services/cricketScores";
import { normalizeCricketScores } from "./utils/normalizeCricketScores";
import { normalizeDummyCricketScores } from "./utils/normalizeDummyCricketScores";
import "./App.css";

const App = () => {
  const [dataSource, setDataSource] = React.useState("test");
  const [cricketScoresByCountry, setCricketScoresByCountry] = React.useState(
    {}
  );
  const searchFieldCount = Array(2).fill();

  const onDataSourceChange = ({ target: { value } }) => {
    setDataSource(value);
  };
  const fetchCricketScores = React.useCallback(async () => {
    let rawResponse, normalizedResponse;
    if (dataSource === "test") {
      rawResponse = getDummyCricketScores();
      normalizedResponse = normalizeDummyCricketScores(rawResponse);
    } else {
      // todo: handle failure
      const promise = await getCricketScores();
      rawResponse = await promise.json();
      normalizedResponse = normalizeCricketScores(rawResponse);
    }
    console.log(normalizedResponse);
    setCricketScoresByCountry(normalizedResponse);
  }, [dataSource]);

  React.useEffect(() => {
    fetchCricketScores();
  }, [fetchCricketScores]);

  return (
    <main>
      <section>
        <SelectDataSource onDataSourceChange={onDataSourceChange} />
        {cricketScoresByCountry &&
          searchFieldCount.map((index) => (
            <SearchCountryScores
              key={index}
              cricketScoresByCountry={cricketScoresByCountry}
            />
          ))}
      </section>
    </main>
  );
};

export default App;
