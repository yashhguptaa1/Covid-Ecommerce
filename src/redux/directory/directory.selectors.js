import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;//directory in store.js

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections// in directory.reducer.js inital state
);