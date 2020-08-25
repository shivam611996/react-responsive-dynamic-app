import { testData } from "../constants/testData";

export const getCricketScores = () => {
  return fetch("https://assessments.reliscore.com/api/cric-scores/");
};

export const getDummyCricketScores = () => {
  return testData;
};
