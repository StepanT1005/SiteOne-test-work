import "./App.css";
import { useState } from "react";
import CheckboxForm from "./components/checkbox-form";
import ChevronChart from "./components/chevron-chart";

function App() {
  const [checkboxes, setCheckboxes] = useState([{ checked: true }]);

  const handleCheckboxChange = (index: number) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index].checked = !newCheckboxes[index].checked;

    if (!newCheckboxes.find((el) => el.checked)) {
      if (checkboxes.length > 1) {
        return alert("Alespoň jeden checkbox musí být vždy zaškrtnutý");
      }
    }

    if (newCheckboxes[newCheckboxes.length - 1].checked) {
      newCheckboxes.push({
        checked: false,
      });
    }
    setCheckboxes(newCheckboxes);
  };

  return (
    <div>
      <div className="App">
        <CheckboxForm
          checkboxes={checkboxes}
          onCheckboxChange={handleCheckboxChange}
        />
        <ChevronChart checkboxes={checkboxes} />
      </div>
    </div>
  );
}

export default App;
