export const setFilterType = filterType => ({
  type: 'FILTERS:SET_TYPE',
  filterType,
});

export const setFilterQuery = query => ({
  type: 'FILTERS:SET_QUERY',
  query,
});
