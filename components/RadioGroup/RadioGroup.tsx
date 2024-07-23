import {
  createContext,
  ReactElement,
  useContext,
  useCallback,
  ChangeEvent,
} from "react";
export interface RadioGroupContext {
  value?: string | number;
  onChange?(nextValue: string): void;
}
export const RadioGroupContext = createContext<RadioGroupContext>({});
export interface RadioGroupProps {
  value?: string;
  onChange?: any;
  children: ReactElement[];
}
export const useRadioGroupContext = () => {
  const { value, onChange: onChangeProp } = useContext(RadioGroupContext);
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.target.value;

      onChangeProp?.(nextValue);
    },
    [onChangeProp]
  );
  return { value, onChange };
};

export const RadioGroup = ({ value, onChange, children }: RadioGroupProps) => {
  return (
    <RadioGroupContext.Provider value={{ value, onChange }}>
      <ul className="flex flex-col gap-y-4">{children}</ul>
    </RadioGroupContext.Provider>
  );
};
