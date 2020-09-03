import React from 'react';
import PropTypes from 'prop-types';

import style from './CustomTooltip.module.scss';

function CustomTooltip({ payload }) {
  if (!payload.length) {
    return <></>;
  }
  const { theTemp, humidity, windSpeed } = payload[0].payload;
  return (
    <div className={style.Container}>
      <section className={style.Section}>
        <h4 className={style.Name}>Temp</h4>
        <p className={style.Value}>{theTemp} &#8451;</p>
      </section>
      <section className={style.Section}>
        <h4 className={style.Name}>Humidity</h4>
        <p className={style.Value}>{humidity} %</p>
      </section>
      <section className={style.Section}>
        <h4 className={style.Name}>Wind</h4>
        <p className={style.Value}>{windSpeed} mph</p>
      </section>
    </div>
  );
}

CustomTooltip.propTypes = {
  payload: PropTypes.array,
};
CustomTooltip.defaultProps = {
  payload: [],
};

export default CustomTooltip;
