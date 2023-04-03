import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom'

function ViewUser({ user }) {
  const { id } = useParams();
  const history = useHistory();
  const person = user[id];
  return (
    <div>
      <div className='user-component'>
        <Button variant="secondary"
          onClick={() => history.push("/")}>
          Home
        </Button>
      </div>

      <div className='user-card'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Email</th>
              
            </tr>
          </thead>
          <tbody>
            <tr key={user.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.email}</td>
            </tr>
          </tbody>
        </Table>
      </div>

    </div>


  )
}
export default ViewUser