
//table that is shown uses sat as a prop, used arrow function to deconstruct, th tags are the headers, td are the cells with the information, used dot.notation to pull those into it
//used a ternary operator for the operational property that way if it's true it will show as active and false as inactive
const Table = ({ sat }) => {

  return (<table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type of Satellite</th>
        <th>Launch Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {sat.map((data, id) => {
        return (
          <tr key={id}>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{data.operational !== false ? 'active' : 'inactive'}</td> 
          </tr>
        );
      })}
    </tbody>
  </table>
  );
};

export default Table;