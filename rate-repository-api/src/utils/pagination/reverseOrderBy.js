const reverseOrderBy = (orderBy) =>
  orderBy.map(({ column, order }) => ({
    column,
    order: order === 'desc' ? 'asc' : 'desc',
  }));

export default reverseOrderBy;
