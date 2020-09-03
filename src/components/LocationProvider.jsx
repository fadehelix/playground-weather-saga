import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// TODO: remove mock before production
// import { Details } from 'data/mocks/location';

import { setLocationDetailsAction } from 'data/redux/location/location.actions';
import API from 'data/api';
import { Loader } from 'components';

function LocationProvider({ children }) {
  const dispatch = useCallback(useDispatch(), []);
  const locationId = useSelector((state) => state.location.id);
  const [isLoading, setIsLoading] = useState(false);
  // TODO: Separate data source from component (e.g. to allow inject local object)
  useEffect(() => {
    const fetchData = async (lID) => {
      setIsLoading(true);
      const response = await API.fetchLocation(lID);
      // TODO: remove mock before production
      // const response = Details;
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
