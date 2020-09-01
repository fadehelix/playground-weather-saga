import React from 'react';
import PropTypes from 'prop-types';

function Header({ location }) {
  return (
    <header>
      {location ? (
        <>
          <h1>{location.title}</h1>
          <p>Check date</p>
        </>
      ) : (
        <h1>Choose city</h1>
      )}
    </header>
  );
}

Header.propTypes = {
  location: PropTypes.object,
};
Header.defaultProps = {
  location: null,
};

export default Header;
