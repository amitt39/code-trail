import { useRef } from "react";
import useWeatherData from "../hooks/useWeatherData";
import WeatherData from "./WeatherData";

function CityInput() {
  const inputRef = useRef();

  const { fetchData, data } = useWeatherData();
  return (
    <div className="weather-content">
      <div className="search-area">
        <label className="input-label" htmlFor="city-search">
          City
        </label>
        <div className="search-control">
          <input
            ref={inputRef}
            className="city-input"
            type="text"
            name="city"
            id="city-search"
            placeholder="Enter city"
            autoComplete="address-level2"
          />
          <button
            className="search-button"
            onClick={() => {
              fetchData(inputRef.current.value);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <WeatherData data={data} />
    </div>
  );
}
export default CityInput;
