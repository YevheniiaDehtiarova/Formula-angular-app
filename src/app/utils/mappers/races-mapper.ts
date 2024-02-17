import { RacesDto, Race } from '../types';

export const racesMapper = (data: RacesDto): Race[] => {
  return data.MRData.RaceTable.Races.map(item => {
    const {givenName, familyName, nationality, driverId} =
      item.Results[0].Driver;

    const {name: constructorName} = item.Results[0].Constructor;

    const {raceName} = item;

    return {
      driver: {
        name: `${ givenName } ${ familyName }`,
        nationality,
        id: driverId
      },
      constructorName,
      raceName
    };
  })
};
