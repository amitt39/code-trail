function WeatherData({ data }) {
  console.log(data);

  return (
    <>
      {data === null ? (
        <section className="weather-card empty-state" aria-live="polite">
          <p className="card-kicker">Forecast</p>
          <h2>No data yet</h2>
          <p className="muted-copy">Waiting for a city.</p>
        </section>
      ) : (
        <section className="weather-card result-card" aria-live="polite">
          <div className="weather-card-top">
            <div>
              <p className="card-kicker">City</p>
              <h2 className="city-name">{data.name}</h2>
            </div>
            <span className="status-mark" aria-hidden="true" />
          </div>

          <div className="condition-row">
            <span className="condition-label">Condition</span>
            <p className="condition-text">{data.weather[0].description}</p>
          </div>

          <div className="metric">
            <span className="metric-label">Humidity</span>
            <strong className="metric-value">{data.main.humidity}%</strong>
          </div>
        </section>
      )}
    </>
  );
}
export default WeatherData;
