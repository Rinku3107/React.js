import React from "react";
import Table from 'react-bootstrap/Table';
function ComponetTable(porps)
{
    return(
        <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{porps.data.id}</td>
          <td>{porps.data.name}</td>
          <td>{porps.data.Email}</td>
        </tr>
      </tbody>
    </Table>
        </div>
    )
}
export default ComponetTable;