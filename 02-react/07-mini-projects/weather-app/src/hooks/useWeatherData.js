import { useState } from "react";

function useWeatherData() {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  async function fetchData(city) {

    setLoading(true)
    setError(null)

    try {

      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`)

      if (!response.ok) {
        throw new Error("Error " + Error)
      }
      const data = await response.json();
      setData(data)

      console.log(data);
      setLoading(false)
    } catch (error) {
      setError(error)
    }
    finally {

      setLoading(false)
    }
  }

  return { fetchData, data, error, loading }
}
export default useWeatherData
