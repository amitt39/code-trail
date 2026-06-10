import "./App.css";
import CityInput from "./components/CityInput";

function App() {
  return (
    <main className="app-shell">
      <section className="weather-dashboard" aria-labelledby="app-title">
        <header className="app-header">
          <p className="app-kicker">Current conditions</p>
          <h1 id="app-title">Weather</h1>
        </header>
        <CityInput />
      </section>
    </main>
  );
}

export default App;
