import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';


const EditUser = ({ user, setUser }) => {
  const [name, setName] = useState("");
  const [idx, setIdx] = useState("");
  const [email, setEmail] = useState("");


  const { id } = useParams();
  const history = useHistory()
  

  const selectedUser = user.find((per) => per.id === id);

  useEffect(() => {
    setIdx(selectedUser.id)
    setName(selectedUser.name)
    setEmail(selectedUser.email)


  }, []);

  //
  const updateUser = () => {
    // step 1 : collecting new data
    const editIndex = user.findIndex(per => per.id === id)
    console.log(editIndex)
    //chnaged data in the input field
    const editedData = {
      id: idx,
      name,
      email

    }
    //updating the user
    user[editIndex] = editedData
    setUser([...user]);
    history.push("/");
  }

  return (
    <div>
      <div className='user-component'>
        <Button variant='secondary' onClick={() => history.push('/')}>
          Home
        </Button>
      </div>

      <div className='add_page'>
        <h1 style={{ color: 'crimson', textAlign: 'center' }}>Edit User Details</h1>

        <input
          placeholder='name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Button variant='primary' className='action-button' onClick={updateUser}>
          Update
        </Button>


      </div>
    </div>


  )
}

export default EditUser;