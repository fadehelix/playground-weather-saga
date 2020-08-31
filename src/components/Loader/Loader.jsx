import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { ThreeBounce as Spinner } from './spinners';
import style from './Loader.module.scss';

function Loader({ color }) {
  useEffect(() => {
    document.documentElement.style.setProperty('--loader-color', color);
  }, [color]);
  return <Spinner className={style.Spinner} />;
}

Loader.propTypes = {
  color: PropTypes.string,
};
Loader.defaultProps = { color: '#fff' };

export default Loader;
