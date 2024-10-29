// types.ts
export interface FormData {
  name: string;
  email: string;
}

export interface StepProps {
  onNext: (data: Partial<FormData>) => void;
  onBack?: () => void;
  initialData: FormData;
}
