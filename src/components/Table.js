const Table = ({ sat }) => {
  return (    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>  
     </tr>
     </thead>
     <tbody> 
    {sat.map((id, data) => {
       return(
    <tr  key={id}>
     <td>{data.name}</td>
     <td>{data.type}</td>
     <td>{data.launchDate}</td>
     <td>{data.status}${ data.operation = true ? 'active' : 'inactive' }</td>
      </tr>
       );})}
     </tbody>
   </table>
  );
};

export default Table;