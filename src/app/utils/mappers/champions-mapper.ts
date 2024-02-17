import { ChampionsDto, Champion } from '../types';

export const championsMapper = (data: ChampionsDto[]): Champion[] => {
  const result: (Champion | null)[] = data.map(item => {
    const isEmpty = !item.MRData.StandingsTable.StandingsLists.length;

    if (isEmpty) return null;

    const {givenName, familyName, nationality, driverId} =
      item.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver;

    const {name: constructorName} =
      item.MRData.StandingsTable.StandingsLists[0].DriverStandings[0]
        .Constructors[0];

    const {season} = item.MRData.StandingsTable;

    return {
      season,
      driver: {
        name: `${ givenName } ${ familyName }`,
        nationality,
        id: driverId
      },
      constructorName
    };
  });

  return result.filter(Boolean) as Champion[];
};
