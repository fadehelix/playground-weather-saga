import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, LineChart, Line, Tooltip, XAxis } from 'recharts';
import CustomTooltip from './CustomTooltip/CustomTooltip';

import style from './WeatherChart.module.scss';

const mapDailyForecastToChart = (apiData) => {
  const chartData = apiData.map((day) => ({
    name: day.applicable_date,
    theTemp: Math.round(day.the_temp),
    humidity: day.humidity,
    windSpeed: Math.round(day.wind_speed),
  }));
  return chartData;
};

function WeatherChart({ data }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (data) {
      setChartData(mapDailyForecastToChart(data));
    }
  }, [data]);
  if (!data) return <></>;

  return (
    <section className={style.Container}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <Line
            type="monotone"
            dataKey="theTemp"
            stroke={style.chartLineColor}
          />
          <Tooltip content={<CustomTooltip />} />
          <XAxis dataKey="name" axisLine={false} />
        </LineChart>
      </ResponsiveContainer>

      <CustomTooltip />
    </section>
  );
}

WeatherChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default WeatherChart;
