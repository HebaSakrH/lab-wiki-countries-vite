import { useState } from "react";
import countries from "./countries.json";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountriesDetails from "./components/CountryDetails";
import { Routes, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [countriesState, setCountiresState] = useState(countries);

  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countriesState} />

      <Routes>
        <Route
          path="/:countryId"
          element={<CountryDetails countries={countriesState} />}
        />
      </Routes>
    </div>
  );
}

export default App;
