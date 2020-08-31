import React from 'react';
import PropTypes from 'prop-types';
import style from './ThreeBounce.module.scss';

function ThreeBounce({ className }) {
  return (
    <div className={className}>
      <div className={style.Bounce1} />
      <div className={style.Bounce2} />
      <div className={style.Bounce3} />
    </div>
  );
}

ThreeBounce.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ThreeBounce;
