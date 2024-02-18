import { PlayerData } from "../../interfaces/playerId";
import { PlayerStats } from "../../interfaces/playerStats";

export class PlayerPersonalData {
    data: { [accountId: number]: PlayerData };
    nickname: string;
    globalRating: number;
    battles: number;
    wins: number;
    winPercentage: string;

    constructor(
        {data}: PlayerStats
        ) {
        const accountId = parseInt(Object.keys(data)[0]);
        const accountData = data[accountId];

        this.data = data;
        this.nickname = accountData.nickname;
        this.globalRating = accountData.global_rating;
        this.battles = accountData.statistics.all.battles;
        this.wins = accountData.statistics.all.wins;
        this.winPercentage = (this.wins / this.battles * 100).toFixed(2);
    }
}