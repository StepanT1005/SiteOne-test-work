import { CheckboxProps } from "./types";

const Checkbox = (props: CheckboxProps) => {
  const { index, checked, onCheckboxChange } = props;
  return (
    <div className="checkbox-container">
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onCheckboxChange(index)}
        />
        <span>Checkbox {index + 1}</span>
      </label>
    </div>
  );
};

export default Checkbox;
