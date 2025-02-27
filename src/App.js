import {useState} from "react";
import satData from "./components/satData";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
//maps through data and filters by type, props are added in the table and buttons tags below and are returned
function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
       return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  };
  return (
    <>
      <Banner />
      <Buttons
           filterByType={filterByType}
           setSat={setSat}
           displaySats={displaySats}/>
      <Table sat={sat}/>
    </>
  );
}

export default App; //has to be exported for index file

