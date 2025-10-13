export interface IQuoteData {
    sDocumento: string;
    sCelular: string;
    sTipoDocumento: string;
}

export interface IUser {
    sName: string;
    sLastName: string;
    sBirthDay: string;
}

export interface IUserState {
    oUser: IUser | null;
    oQuoteData: IQuoteData | null;
    bLoading: boolean;
    sError: string | null;
}

export interface IApiUserResponse {
    name: string;
    lastName: string;
    birthDay: string;
}