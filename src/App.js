// import React, { useState, useEffect } from "react";
// import Cards from "./components/Cards";
// import Pagination from "./components/Pagination";
// import "./App.css";

// import { Form } from "react-bootstrap";
// const App = () => {
//   const url = "https://restcountries.com/v3.1/all";

//   const [countries, setCountries] = useState([]);
//   const [dark, setDark] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [cardsPerPage] = useState(24);

//   //  fetch data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const json = await response.json();
//         setCountries(json);
//       } catch (error) {
//         console.log("error", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const filterByRegion = async (region) => {
//     if (region === "all") {
//       const res = await fetch(url);
//       const data = await res.json();
//       await setCountries(data);
//     } else {
//       const res = await fetch(
//         `https://restcountries.com/v3.1/region/${region}`
//       );
//       const data = await res.json();
//       await setCountries(data);
//     }
//   };

//   const darkMode = () => {
//     setDark(!dark);
//   };

//   /////pagination

//   const indexOfLastCard = currentPage * cardsPerPage;
//   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//   const currentCards = countries.slice(indexOfFirstCard, indexOfLastCard);

//   // get numbers
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className={`${dark ? "bg-dark-blue" : "bg-light"}`}>
//       <div className="shadow ps-5 mb-5 d-flex justify-content-center py-3 align-items-center">
//         <h1 className="display-6 text-secondary text-center text-capitalize">
//           Where in the world?
//         </h1>
//         <i
//           onClick={darkMode}
//           className="fa fa-moon text-warning d-block mx-4 ms-auto cursor-pointer fs-4 dark-mode"
//         ></i>
//       </div>

//       <div className="me-5 float-end d-block shadow">
//         <Form.Select
//           className="select-region"
//           aria-label="Default select example"
//           onChange={(val) => filterByRegion(val.target.value)}
//         >
//           <option value="all">Filter by Region (All)</option>
//           <option value="africa">Africa</option>
//           <option value="america">America</option>
//           <option value="asia">Asia</option>
//           <option value="europe">Europe</option>
//           <option value="oceania">Oceania</option>
//         </Form.Select>
//       </div>

//       <Cards countries={currentCards} setCountries={setCountries} dark={dark} />
//       <Pagination
//         cardsPerPage={cardsPerPage}
//         totalCards={countries.length}
//         paginate={paginate}
//       />
//     </div>
//   );
// };

// export default App;

import Homepage from "./components/Homepage";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Country from "./components/Country";

const App = () => {
  // STATES
  const [dark, setDark] = useState(false);
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(24);

  // STATIC
  const url = "https://restcountries.com/v3.1/all";
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = countries.slice(indexOfFirstCard, indexOfLastCard);
  dark
    ? document.body.classList.add("bg-dark-blue")
    : document.body.classList.remove("bg-dark-blue");

  // FUNCTIONS

  const darkMode = () => setDark(!dark);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // FETCH DATA

  useEffect(() => {
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

  const filterByRegion = async (region) => {
    if (region === "all") {
      const res = await fetch(url);
      const data = await res.json();
      await setCountries(data);
    } else {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await res.json();
      await setCountries(data);
    }
    setSearchTerm("")
  };
  return (
    <>
      <Router>
        <Header dark={dark} darkMode={darkMode} />
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                countries={countries}
                dark={dark}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filterByRegion={filterByRegion}
                cardsPerPage={cardsPerPage}
                totalCards={countries.length}
                paginate={paginate}
              />
            }
          />
          <Route path="/country/:r" element={<Country setSearchTerm={setSearchTerm} dark={dark} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
