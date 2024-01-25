export interface PlayerResponse {
    status: string;
    meta: {
        count: number;
    };
    data: {
        nickname: string;
        account_id: number;
    }[];
}