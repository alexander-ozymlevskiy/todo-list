import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../store/UserList/actions';
import { selectUsers } from '../store/UserList/selectors';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            ID: {user.id}, Name: {user.name}, Surname: {user.Surname}, Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;



