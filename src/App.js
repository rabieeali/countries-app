import React, { useState, useEffect } from "react";
import Cards from "./components/Cards";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Form } from "react-bootstrap";
const App = () => {
  const [countries, setCountries] = useState([]);
  const [dark, setDark] = useState(false)
  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setCountries(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const filterByRegion = async region => {
    if (region === '') return
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
    const data = await res.json()
    await setCountries(data)
  }



  const darkMode = () => {
    if (!dark) {
      document.body.classList.add('bg-dark')
      document.querySelector('.dark-mode').classList.remove('fa-moon')
      document.querySelector('.dark-mode').classList.add('fa-sun')
    } else {
      document.body.classList.remove('bg-dark')
      document.querySelector('.dark-mode').classList.add('fa-moon')
      document.querySelector('.dark-mode').classList.remove('fa-sun')
     
    }

    setDark(!dark)
  }
  return (
    <>
      <div className="shadow w-100 ps-5 mb-5 d-flex justify-content-center py-3 align-items-center">
        <h1 className="display-6 text-secondary text-center text-capitalize">
          Where in the world?
        </h1>
        <i onClick={darkMode} className="fa fa-moon text-warning d-block mx-4 ms-auto cursor-pointer fs-4 dark-mode" ></i>
      </div>

      <div className="me-5 float-end d-block shadow">
        <Form.Select  style={{border:'2px solid #ededed'}} aria-label="Default select example" onChange={val => filterByRegion(val.target.value)}>
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </Form.Select>
      </div>

      <Cards
        countries={countries}
        setCountries={setCountries}
        className={`${dark ? 'bg-dark text-white' : 'bg-white'}`}
      />
    </>
  );
};

export default App;
