import React from 'react';
import PropTypes from 'prop-types';

function Header({ locationDetails }) {
  return (
    <header>
      {locationDetails ? (
        <>
          <h1>{locationDetails.title}</h1>
          <p>Check date</p>
        </>
      ) : (
        <h1>Choose city</h1>
      )}
    </header>
  );
}

Header.propTypes = {
  locationDetails: PropTypes.object,
};
Header.defaultProps = {
  locationDetails: null,
};

export default Header;
