import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';

export const getUsers = () => {
  return (dispatch) => {
    axios
      .get('https://651ec67044a3a8aa4768fd9c.mockapi.io/users/users')
      .then((response) => {
        const users = response.data;
        dispatch({
          type: FETCH_USERS,
          payload: users,
        });
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };
};
