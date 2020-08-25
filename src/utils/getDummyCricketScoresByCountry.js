export const getDummyCricketScoresByCountry = (data) => {
  const data2 = data.reduce((acc, { country, score }) => {
    return {
      ...acc,
      // doing toLowerCase() for easy search of any country via search field
      [country.toLowerCase()]: {
        totalScore: !acc[country] ? score : acc[country].totalScore + score,
        matchesCount: !acc[country] ? 1 : acc[country].matchesCount + 1,
      },
    };
  }, {});
  return data2;
};
