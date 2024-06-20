import Checkbox from "./checkbox";
import { CheckboxFormProps } from "./types";

const CheckboxForm = (props: CheckboxFormProps) => {
  const { checkboxes, onCheckboxChange } = props;
  return (
    <form>
      {checkboxes.map((checkbox, index) => (
        <Checkbox
          key={index}
          index={index}
          checked={checkbox.checked}
          onCheckboxChange={onCheckboxChange}
        />
      ))}
    </form>
  );
};

export default CheckboxForm;
