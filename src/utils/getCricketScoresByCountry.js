export const getCricketScoresByCountry = (data) => {
  return data.reduce((acc, [country, score]) => {
    return {
      ...acc,
      // doing toLowerCase() for easy search of any country via search field
      [country.toLowerCase()]: {
        totalScore: !acc[country] ? score : acc[country].totalScore + score,
        matchesCount: !acc[country] ? 1 : acc[country].matchesCount + 1,
      },
    };
  }, {});
};
