import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type UseFormLocalStorageReturn<T> = [
  T,
  (data: Partial<T>) => void,
  () => void,
  number,
  Dispatch<SetStateAction<number>> // Correct type for setState function
];

function useFormLocalStorage<T>(
  key: string,
  initialState: T
): UseFormLocalStorageReturn<T> {
  const [data, setData] = useState<T>(() => {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : initialState;
  });

  const [activeStep, setActiveStep] = useState<number>(() => {
    const savedStep = localStorage.getItem(`${key}-step`);
    return savedStep ? parseInt(savedStep, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  useEffect(() => {
    localStorage.setItem(`${key}-step`, String(activeStep));
  }, [key, activeStep]);

  const updateData = (newData: Partial<T>) => {
    setData((prevData) => ({ ...prevData, ...newData }));
  };

  const clearData = () => {
    setData(initialState);
    setActiveStep(0);
    localStorage.removeItem(key);
    localStorage.removeItem(`${key}-step`);
  };

  return [data, updateData, clearData, activeStep, setActiveStep];
}

export default useFormLocalStorage;
