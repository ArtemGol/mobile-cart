export interface IUserInfo {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}

export interface IAuthInfo {
  access_token: string;
  refresh_token: string;
}

export interface IAuthState {
  userInfo: IUserInfo;
  authInfo: IAuthInfo;
  isLoading: boolean;
  initialLoad: boolean;
  value: number;
}

export interface IAuthorization {
  email: string;
  password: string;
}

export interface IAuthResponse extends IAuthInfo {
  user: IUserInfo;
}
