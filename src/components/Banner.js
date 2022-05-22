import { useNavigate } from "react-router-dom";
const Banner = ({
  name,
  img,
  capital,
  region,
  population,
  dark,
  setSearchTerm,
  map,
  language,
}) => {
  const navigate = useNavigate();
  const backHandler = () => {
    setSearchTerm("");
    navigate(-1);
  };
  return (
    <div className="container banner my-5">
      <button onClick={backHandler} className="btn btn-warning mb-5 shadow">
        {" "}
        <i className="fa fa-chevron-left me-1" aria-hidden="true"></i>Back
      </button>
      <div className="card border-1 card-custom shadow-lg mb-3">
        <div
          className={`row g-0  ${
            dark
              ? "text-white bg-light-blue border-1"
              : "text-dark bg-white border-1"
          }`}
        >
          <div className="col-md-4 p-5">
            <img
              src={img}
              className="img-fluid shadow-lg rounded rounded-start"
              alt={name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5
                className={`card-title  display-6 text-start${
                  !dark ? "text-white" : "text-secondary"
                }`}
              >
                {name}
              </h5>
              <ul className="list-unstyled mt-auto">
                <li className="card-text fw-bold ">
                  Capital{" "}
                  <span
                    className={`fw-light ${
                      dark ? "text-info" : "text-secondary"
                    }`}
                  >
                    {capital}
                  </span>
                </li>
                <li className="card-text fw-bold ">
                  Population{" "}
                  <span
                    className={`fw-light ${
                      dark ? "text-info" : "text-secondary"
                    }`}
                  >
                    {population}
                  </span>
                </li>
                <li className="card-text fw-bold ">
                  Region{" "}
                  <span
                    className={`fw-light ${
                      dark ? "text-info" : "text-secondary"
                    }`}
                  >
                    {region}
                  </span>
                </li>
                <li className="card-text fw-bold ">
                  Languages
                 
                    {Object.values(language).map((lang) =>  <span key={Math.random(100)}
                    className={`fw-light mx-1 ${
                      dark ? "text-info" : "text-secondary"
                    }`}
                  >{lang}
                  </span>)}
                </li>
                <li className="card-text fw-bold ">
                  <span
                    className={`fw-light ${
                      dark ? "text-info" : "text-secondary"
                    }`}
                  >
                    <a
                      className="btn btn-primary mt-4 text-capitalize"
                      href={map}
                    >
                      {" "}
                      see on google map
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
