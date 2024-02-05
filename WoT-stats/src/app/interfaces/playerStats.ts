import { PlayerData } from "./playerId";

export interface PlayerStats {
  [key: string]: number | string | object;
  data: { [accountId: number]: PlayerData };
    globalRating: number;
    battles: number;
    wins: number;
    nickname: string;
    winPercentage: string;
}
