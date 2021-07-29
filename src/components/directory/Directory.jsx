import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/MenuItem';

import styled from 'styled-components';

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

const DirectoryMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default connect(mapStateToProps)(Directory);