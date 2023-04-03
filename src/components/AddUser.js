import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


export default function AddUser({ user, setUser }) {
  const history = useHistory();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addNewUser = () => {
    if (id && name && email) { // Check if all required fields have values
      const newUser = {
        id,
        name,
        email
      };
      setUser([...user, newUser]); // Add new user to existing user array
      history.push("/"); // Navigate back to home page
    }
  };
  
  
  
  return (
    <div>
      <div className='user-component'>
        <Button variant="secondary"
          onClick={() => history.push("/")}>
          Home
        </Button>
      </div>     
      
      <div className='add_page'>   
      <h1 style={{color:"crimson",textAlign:'center'}}>Add User Details</h1>  
        <input
          placeholder='id'
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
        <input
          placeholder='name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          placeholder='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        /> {" "}

        <Button variant="primary" className="action-button"
          onClick={addNewUser}
        >Add</Button>
      </div>
    </div>

  )
};

