import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { setLocationDetailsAction } from 'data/redux/location/location.actions';
import API from 'data/api';
import { Loader } from 'components';

function LocationProvider({ children }) {
  const dispatch = useCallback(useDispatch(), []);
  const locationId = useSelector((state) => state.location.data);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async (lID) => {
      setIsLoading(true);
      const response = await API.fetchLocation(lID);
      dispatch(setLocationDetailsAction(response));
      setIsLoading(false);
    };

    if (locationId) {
      fetchData(locationId);
    }
  }, [dispatch, locationId]);
  return <>{isLoading ? <Loader color="#76bcef" /> : children}</>;
}

LocationProvider.propTypes = {
  children: PropTypes.node,
};

LocationProvider.defaultProps = {
  children: <></>,
};

export default LocationProvider;
