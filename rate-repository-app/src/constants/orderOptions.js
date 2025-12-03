/**
 * Repository ordering options with labels for sorting
 */
const ORDER_OPTIONS = {
  LATEST: {
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC',
    label: 'Latest repositories'
  },
  HIGHEST: {
    orderBy: 'RATING_AVERAGE',
    orderDirection: 'DESC',
    label: 'Highest rated repositories'
  },
  LOWEST: {
    orderBy: 'RATING_AVERAGE',
    orderDirection: 'ASC',
    label: 'Lowest rated repositories'
  }
}

export default ORDER_OPTIONS
