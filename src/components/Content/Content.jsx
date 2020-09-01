import React from 'react';
import PropTypes from 'prop-types';
import style from './Content.module.scss';

function Content({ children }) {
  return <main className={style.Content}>{children}</main>;
}

Content.propTypes = {
  children: PropTypes.any,
};
Content.defaultProps = {
  children: null,
};

export default Content;
