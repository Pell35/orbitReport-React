import satData from "./satData";
import {filterByType, setSat, displaySats} from "../App";

const Buttons = () => {
  displaySats.map((sat, id) => {
    return (
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
    );
  })

return (
  <button onClick={() => setSat(satData)}>
  </button>
  )
};

export default Buttons;