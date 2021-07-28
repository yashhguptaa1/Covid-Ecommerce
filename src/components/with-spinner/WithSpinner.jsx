import React from "react";

import styled from "styled-components";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export default WithSpinner;

/*
What we're doing is we're making a new with-Spinner component, a higher order component.
It's a function that takes some component that we want to wrap with the functionality of our Spiner
loading feature.
And that WrappedComponent gets passed into this new component that wraps around it.

And then what it does is it determines based on an is loading property that's passed into this component.
If it's loading, render my spinner overlay, if it's loading is false, then just render the component
that we passed in as normal, receiving all the props that it would receive.

*/