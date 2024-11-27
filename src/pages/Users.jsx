import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/userSlice';
import UserTable from '../components/UserTable';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleEdit = (user) => alert(`Edit user: ${user.name}`);
  const handleDelete = (id) => alert(`Delete user with ID: ${id}`);

  return (
    <div style={{ marginLeft: '200px', padding: '20px' }}>
      <h2>Users</h2>
      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Users;
