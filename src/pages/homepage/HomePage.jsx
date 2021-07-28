import React from 'react';

import Directory from '../../components/directory/Directory';

import styled from 'styled-components';

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default HomePage;