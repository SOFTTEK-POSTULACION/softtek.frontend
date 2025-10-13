export interface IPlan {
    sName: string;
    nPrice: number;
    aDescription: string[];
    nAge: number;
}

export interface IPlansState {
    aList: IPlan[];
    sSelectedOption: string | null;
    oSelectedPlan: IPlan | null,
    bLoading: boolean;
    sError: string | null;
}