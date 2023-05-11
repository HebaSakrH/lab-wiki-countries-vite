import React from "react";
import { Link } from "react-router-dom";

function CountriesList({ countries }) {
  return (
    <div>
      {countries.map((country) => {
        return (
        <div key={country.alpha3Code}>
          <Link to={`/${country.alpha3Code}`}> {country.name.common}</Link>
    
        </div>
        )
    })}
    </div>
  );
}
      
export default CountriesList;
