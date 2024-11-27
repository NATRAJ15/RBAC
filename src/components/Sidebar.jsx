import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Sidebar.module.css';

const Sidebar = () => (
  <div className={styles.sidebar}>
    <ul>
      <li><NavLink to="/users">Users</NavLink></li>
      <li><NavLink to="/roles">Roles</NavLink></li>
    </ul>
  </div>
);

export default Sidebar;
