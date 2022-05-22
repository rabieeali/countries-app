import { useNavigate } from "react-router-dom";

const Card = ({
  name,
  img,
  capital,
  region,
  population,
  dark,
  map,
  language,
}) => {
  const navigate = useNavigate();
  const goToPage = () => {
    navigate(`/country/${name.replace(/\s+/g, "-")}`, {
      state: { name, img, capital, region, population, map, language, dark },
    });
  };
  return (
    <div onClick={goToPage} className="col-md-3">
      <div
        className={`card  animation shadow-lg cursor-pointer h-100 ${
          dark ? "bg-light-blue text-white" : "bg-light"
        }`}
      >
        <img
          src={img}
          className="text-center m-auto my-2 img-costum border-1 shadow-lg flag"
          alt={name}
        />
        <div className="card-body d-flex flex-column">
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
                className={`fw-light ${dark ? "text-info" : "text-secondary"}`}
              >
                {capital}
              </span>
            </li>
            <li className="card-text fw-bold ">
              Population{" "}
              <span
                className={`fw-light ${dark ? "text-info" : "text-secondary"}`}
              >
                {population}
              </span>
            </li>
            <li className="card-text fw-bold ">
              Region{" "}
              <span
                className={`fw-light ${dark ? "text-info" : "text-secondary"}`}
              >
                {region}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
