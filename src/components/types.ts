export interface Checkbox {
  checked: boolean;
}

export interface CheckboxProps {
  index: number;
  checked: boolean;
  onCheckboxChange: (index: number) => void;
}

export interface CheckboxFormProps {
  checkboxes: Checkbox[];
  onCheckboxChange: (index: number) => void;
}

export interface ChevronChartProps {
  checkboxes: Checkbox[];
}
