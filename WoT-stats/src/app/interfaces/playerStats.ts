export interface PlayerStats {
  status: string;
  data: {
    [accountId: number]: {
      nickname: string;
      global_rating: number;
      last_battle_time: string;
      statistics: {
        all: {
          battles: number;
          wins: number;
          global_rating: number;
        }
      }
    }
  };
}
