export interface LoginRequestBody {
    grant_type: string;
    client_id: string;
    client_secret: string;
    username: string;
    password: string;
    scope: string;
}

export interface ResetRequestBody {
  email: string;
}
