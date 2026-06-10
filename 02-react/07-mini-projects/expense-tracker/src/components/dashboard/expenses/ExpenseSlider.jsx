import * as Slider from "@radix-ui/react-slider";
import useExpanseStore from "../../../store/useExpenseStore";
import "./expenseList.css";

function ExpenseSliderFilter({
  setMinAmount,
  setMaxAmount,
  minAmount,
  maxAmount,
}) {
  const { budget } = useExpanseStore();

  return (
    <>
      <div className="sliderWrapper">
        <input
          type="number"
          value={minAmount}
          onChange={(e) => setMinAmount(Number(e.target.value))}
          onBlur={(e) => {
            if (Number(e.target.value) > maxAmount) setMinAmount(maxAmount);
            if (Number(e.target.value) < 0) setMinAmount(0);
          }}
        />
        <Slider.Root
          className="sliderRoot"
          min={0}
          max={10000}
          step={100}
          value={[minAmount, maxAmount]}
          onValueChange={([min, max]) => {
            setMinAmount(min);
            setMaxAmount(max);
          }}
        >
          <Slider.Track className="sliderTrack">
            <Slider.Range className="sliderRange" />
          </Slider.Track>
          <Slider.Thumb className="sliderThumb" />
          <Slider.Thumb className="sliderThumb" />
        </Slider.Root>
        <input
          type="number"
          value={maxAmount}
          onChange={(e) => setMaxAmount(Number(e.target.value))}
          onBlur={(e) => {
            if (Number(e.target.value) < minAmount) setMaxAmount(minAmount);
            if (Number(e.target.value) > budget) setMaxAmount(budget);
          }}
        />
      </div>
    </>
  );
}

export default ExpenseSliderFilter;
