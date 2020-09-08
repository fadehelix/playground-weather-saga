/* eslint-disable react/prop-types */
import React from 'react';
import { Loader } from 'components';

function withLoader(Component) {
  return function withLoaderComponent({ isLoading, ...props }) {
    const { color: loaderColor } = props;
    // eslint-disable-next-line react/jsx-props-no-spreading
    if (!isLoading) return <Component {...props} />;
    return <Loader color={loaderColor} />;
  };
}

export default withLoader;
