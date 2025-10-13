import type { IPlan } from "../../../../../../../store/features/planes/interfaces/IPlanesSlices.interface";

export interface IPlanesViewProps {
    userName: string;
    plans: IPlan[];
    selectedOption: string | null;
    isLoading: boolean;
    error: string | null;
    onGoBack: () => void;
    onSelectOption: (option: string) => void;
    onSelectPlan: (plan: IPlan) => void;
}