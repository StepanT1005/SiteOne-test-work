import { ChevronChartProps } from "./types";

const ChevronChart = (props: ChevronChartProps) => {
  const { checkboxes } = props;
  return (
    <div className="chevron-chart">
      {checkboxes.map((checkbox, index) =>
        checkbox.checked ? (
          <div
            key={index}
            className="chevron"
            style={{
              backgroundColor: `hsl(${
                (index * 360) / checkboxes.length
              }, 70%, 50%)`,
            }}
          />
        ) : null
      )}
    </div>
  );
};

export default ChevronChart;
