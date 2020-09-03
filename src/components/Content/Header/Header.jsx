import React from 'react';
import PropTypes from 'prop-types';

function Header({ locationDetails }) {
  const pattern = /(\d{4})-(\d{2})-(\d{2})/g;
  const formattedDate =
    locationDetails && locationDetails.time.match(pattern)[0];
  return (
    <header>
      {locationDetails ? (
        <>
          <h1>{locationDetails.title}</h1>
          <p>{formattedDate}</p>
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
