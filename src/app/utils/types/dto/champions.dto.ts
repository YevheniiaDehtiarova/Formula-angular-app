export type ChampionsDto = {
  MRData: {
    StandingsTable: {
      season: string;
      StandingsLists: {
        DriverStandings: {
          Driver: {
            givenName: string;
            familyName: string;
            nationality: string;
            driverId: string;
          };
          Constructors: {
            name: string;
          }[];
        }[];
      }[];
    };
  };
};
