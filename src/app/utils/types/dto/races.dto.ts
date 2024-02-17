export type RacesDto = {
  MRData: {
    RaceTable: {
      Races: {
        raceName: string;
        Results: {
          Driver: {
            givenName: string;
            familyName: string;
            nationality: string;
            driverId: string;
          };
          Constructor: {
            name: string;
          };
        }[];
      }[];
    };
  };
};
