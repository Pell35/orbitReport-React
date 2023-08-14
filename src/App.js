import useState from "react";
import satData from "./components/satData";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";

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
    <div>
      <Banner />
      <Buttons
           filterByType={filterByType}
           setSat={setSat}
           displaySats={displaySats}/>
      <Table sat={sat}/>
    </div>
  );
}

export default App;
export const displaySats = (displaySats) => {
  let id = `input-${displaySats.id}`;
  return (
  <>
  <input id={id} />
  <label for={id}>{displaySats.label}</label>
  </>
  );
  };
  export const filterByType = (filterByType) => {
    let id = `input-${filterByType.id}`;
    return (
    <>
    <input id={id} />
    <label for={id}>{filterByType.label}</label>
    </>
    );
    };
    export const setSat = (setSat) => {
      let id = `input-${setSat.id}`;
      return (
      <>
      <input id={id} />
      <label for={id}>{setSat.label}</label>
      </>
      );
      };