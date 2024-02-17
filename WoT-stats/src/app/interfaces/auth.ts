export interface Auth {
    status: string;
    meta: {
      count: number;
    };
    data: {
      location: string;
    };
}