import { useLocation } from "react-router-dom";
import Banner from "./Banner";

const Country = ({dark,setSearchTerm}) => {
  const { state } = useLocation();
  const { name, img, capital, region, population,map,language } = state;

  return (
    <div>
     <Banner
       name={name}
       capital={capital}
       img={img}
       region={region}
       population={population}
       dark={dark}
       setSearchTerm={setSearchTerm}
       language={language}
       map={map}
     />
    </div>
  );
};

export default Country;
