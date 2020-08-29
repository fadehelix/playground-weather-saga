import React from 'react';
import PropTypes from 'prop-types';

function Header({ location }) {
  return (
    <header>
      <h1>{(location && location.title) || 'Choose city'}</h1>
      <p>Check date</p>
    </header>
  );
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Header;
