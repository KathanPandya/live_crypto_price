import { useEffect, useState } from "react";
import Axios from "axios";
import AppDisplay from "./AppDisplay";
import Navbar from "./AppNavbar";
import SearchBar from "./SearchBar";


const AppHome = () => {
  const [listOfCrypto, setListOfCrypto] = useState([]);
  const [searchedCrypto, setSearchedCrypto] = useState("");

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=25").then(
      (response) => {
        setListOfCrypto(response.data.coins);
      }
    );
  }, []);

  const filteredCrypto = listOfCrypto.filter((coin) => {
    return coin.name.toLowerCase().includes(searchedCrypto.toLowerCase());
  });

  return (
    <div className="App">
      <br />
      <SearchBar setsearchedcrypto={setSearchedCrypto} />
      <br />
      <AppDisplay filteredCrypto={filteredCrypto} />
    </div>
  );
};

export default AppHome;
