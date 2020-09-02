import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './Detail.module.scss';

const roundNumber = (number) => Math.round(number);
const Variant = {
  LARGE: 'large',
  NORMAL: 'normal',
};

function Detail({ title, value, valueSuffix, variant }) {
  const fomrattedValue = typeof value === 'number' ? roundNumber(value) : value;
  return (
    <article
      className={classnames(style.Detail, {
        [style.Large]: variant === Variant.LARGE,
      })}
    >
      <h3 className={style.Title}>{title}</h3>
      <p className={style.Value}>
        {fomrattedValue}{' '}
        <span className={style.ValueSuffix}>{valueSuffix}</span>
      </p>
    </article>
  );
}

Detail.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  valueSuffix: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([Variant.NORMAL, Variant.LARGE]),
};

Detail.defaultProps = {
  variant: 'normal',
};

export default Detail;
