export interface PlayerId {
  status: string;
  meta: {
    count: number;
  };
  data: PlayerData[];
} 

export interface PlayerData {
  nickname: string;
  account_id: number;
  global_rating: number;
  statistics: {
    all: {
        battles: number;
        wins: number;
    }
};
}