import { Form } from "react-bootstrap";
import Card from "./Card";
import Pagination from "./Pagination";
import "./Loader.css";

const Homepage = ({
  countries,
  setCountries,
  dark,
  searchTerm,
  setSearchTerm,
  filterByRegion,
  paginate,
  totalCards,
  cardsPerPage,
}) => {
  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col">
            {/* serchbar */}
            <div className="row">
              <div className="col text-start">
                <div className="wrapper  border-5">
                  <div className="searchBar shadow-lg border-5 position-relative">
                    <input
                      className={`form-control`}
                      style={{ border: "2px solid #ededed" }}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      id="searchQueryInput"
                      type="text"
                      name="searchQueryInput"
                      placeholder="Search By Country Name"
                    />

                    <svg
                      className="position-absolute end-10"
                      style={{ width: "24px", height: "24px" }}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#666666"
                        d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* end of serchbar */}
          </div>
          <div className="col">
            <Form.Select
              className="select-region shadow select-custom ms-auto form-select-sm"
              aria-label="Default select example"
              onChange={(val) => filterByRegion(val.target.value)}
            >
              <option value="all">Select Region (All)</option>{" "}
              <option value="africa">Africa</option>{" "}
              <option value="america">America</option>{" "}
              <option value="asia">Asia</option>{" "}
              <option value="europe">Europe</option>{" "}
              <option value="oceania">Oceania</option>{" "}
            </Form.Select>{" "}
          </div>
        </div>

        {!countries.length ? (
          <div className="loader"></div>
        ) : (
          <div className="row g-5 mt-5">
            {countries
              .filter((countri) => {
                if (searchTerm === "") {
                  return countri;
                } else if (
                  countri.name.common
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return countri;
                }
              })
              .map((country, index) => (
                
                  <Card
                    key={index}
                    name={country.name.common}
                    capital={country.capital}
                    img={country.flags.png}
                    region={country.region}
                    population={country.population}
                    dark={dark}
                    language={country.languages}
                    map={country.maps.googleMaps}

                  />
             
              ))}
          </div>
        )}
      </div>
      {/* <Pagination cardsPerPage={cardsPerPage} paginate={paginate} totalCards={totalCards} /> */}
    </>
  );
};

export default Homepage;
