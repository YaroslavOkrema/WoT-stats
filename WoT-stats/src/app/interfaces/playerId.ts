export interface PlayerId {
  status: string;
  meta: {
    count: number;
  };
  data: PlayerData[];
} 

interface PlayerData {
  nickname: string;
  account_id: any;
}