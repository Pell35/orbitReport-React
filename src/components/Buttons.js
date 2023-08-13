import satData from "./satData";
import filterByType from "src/App.js";
import setSat from "src/App.js";
import displaySats from "src/App.js";
const Buttons = () => {
  {displaySats.map((sat, id) => {
    return (
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
    );
  })
}
return (
  <button onClick={() => setSat(satData)} key={id}>
    {sat} Not Sure
  </button>
  )
};

export default Buttons;