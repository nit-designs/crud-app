import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
//import { data } from './UserData';
// import './App.css';

function UserComponent({ user, setUser }) {
  //const [users, setUsers] = useState(data);
  const history = useHistory();

  const handleDeleteUser = (id) => {
    const alterList = (user.filter(user => user.id !== id));
    setUser(alterList);

  };

  return (
    <div>
      <div className="user-component">
        <Button variant="success"
          onClick={() => history.push("/add/user")}>Add User</Button>
        

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
            {user.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Button variant="primary" className="action-button" onClick={() => history.push(`/view/${user.id}`)}>View</Button>
                  <Button variant="primary" className="action-button" onClick={() => history.push(`/edit/${user.id}`)}>Edit</Button>
                  <Button variant="danger" className="action-button" onClick={() => handleDeleteUser(user.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

    </div>
  );
}

export default UserComponent;

