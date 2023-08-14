import satData from "./satData";
// import {filterByType, setSat, displaySats} from "../App";

const Buttons = ({filterByType, setSat, displaySats}) => {//creates buttons on page
 return(
 <div>
  {displaySats.map((sat, id) => // these make the 3 "low,medium,and high orbit" buttons, filter by type filters through the sat prop from satData to give up the the elements for the table.
    <button onClick={() => filterByType(sat)} key={id}> 
    {sat} Orbit 
    </button>)
} 
/
<button onClick={() => setSat(satData)}>
  All Orbits
</button>
</div>)
// last button that shows All Orbits
}
export default Buttons;