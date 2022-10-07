// import { React, useStat } from 'react';
import './App.css';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import ListEmployee from './components/ListEmployee';
import React, { useState } from 'react';
import EmployeeService from '../src/services/EmployeeService'

function App() {

  React.useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      console.log("test", res.data);
    });
  }, []); // <-- Have to pass in [] here! https://stackoverflow.com/questions/53219113/where-can-i-make-api-call-with-hooks-in-react

  const usersData = [
    { id: 1, name: 'Test1', designation: 'Testing1' },
    { id: 2, name: 'Test2', designation: 'Testing2' },
    { id: 3, name: 'Test3', designation: 'Testing3' }
  ];

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    setEditing(false);
  }

  const [users, setUsers] = useState(usersData);

  const [editing, setEditing] = useState(false);

  const initFormState = { id: null, name: '', designation: '' };

  const [currentUser, setCurrentUser] = useState(initFormState);

  const editUser = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, designation: user.designation });
  }

  const update = (id, data) => {
    setEditing(false);
    setUsers(users.map((user) => user.id === id ? data : user))
  }

  // const [firstName, setFirstName] = React.useState(null);
  // const [lastName, setLastName] = React.useState(null);

  return (
    <div className="container">
      <div className='row'>
        <div className='col-12'>
          {editing ?
            (<div>
              <EditEmployee setEditing={setEditing} currentUser={currentUser} update={update} />
            </div>) :
            (<div>
              <AddEmployee addUser={addUser} />
            </div>)
          }


        </div>
        <div className='col-12 pt-3'>
          <ListEmployee editUser={editUser} deleteUser={deleteUser} users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;

