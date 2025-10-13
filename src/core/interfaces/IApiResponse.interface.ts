export interface IApiResponse<T> {
    bSuccess: boolean;
    vMessage: string;
    aData: T;
    iTotalRecords?: number;
}