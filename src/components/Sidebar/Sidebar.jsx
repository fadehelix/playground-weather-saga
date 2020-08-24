import React from 'react';
import PropTypes from 'prop-types';

import style from './Sidebar.module.scss';

const Sidebar = ({ children }) => {
  return <aside className={style.Sidebar}>{children}</aside>;
};

Sidebar.propTypes = {
  children: PropTypes.any,
};
Sidebar.defaultProps = {
  children: <></>,
};
export default Sidebar;
