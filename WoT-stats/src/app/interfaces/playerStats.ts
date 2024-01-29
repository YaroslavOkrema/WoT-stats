import { PlayerData } from "./playerId";

export interface PlayerStats {
  [key: string]: any;
  data: { [accountId: number]: PlayerData };
    globalRating: number;
    battles: number;
    wins: number;
    nickname: string;
    winPercentage: string;
}