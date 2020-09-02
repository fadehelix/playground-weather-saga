import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Detail from './Detail/Detail';

import style from './WeatherDetails.module.scss';

function WeatherDetails({ locationDetails }) {
  if (!locationDetails) {
    return <></>;
  }

  const location = locationDetails.consolidated_weather[0];
  const {
    the_temp: theTemp,
    max_temp: maxTemp,
    min_temp: minTemp,
    humidity,
    wind_speed: windSpeed,
    weather_state_name: weatherStateName,
  } = location;

  return (
    <section className={style.WeatherDetails}>
      {/* START Big Detail */}
      <article className={classnames(style.Detail, style.Current)}>
        <Detail
          title="Current"
          value={theTemp}
          valueSuffix="&#8451;"
          variant="large"
        />
        <section className={style.CurrentWeatherState}>
          {weatherStateName}
        </section>
      </article>
      {/* END Big Detail */}
      <Detail title="max" value={maxTemp} valueSuffix="&#8451;" />
      <Detail title="min" value={minTemp} valueSuffix="&#8451;" />
      <Detail title="rain" value={humidity} valueSuffix="%" />
      <Detail title="wind" value={windSpeed} valueSuffix="mph" />
    </section>
  );
}

WeatherDetails.propTypes = {
  locationDetails: PropTypes.object,
};
WeatherDetails.defaultProps = {
  locationDetails: null,
};

export default WeatherDetails;
