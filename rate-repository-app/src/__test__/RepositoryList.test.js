import { screen, render } from '@testing-library/react-native'
import { within } from '@testing-library/react-native'

import { RepositoryListContainer } from '../components/Repositories/RepositoryList'


const repositories = {
  totalCount: 8,
  pageInfo: {
    hasNextPage: true,
    endCursor:
      'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
  },
  edges: [
    {
      node: {
        id: 'jaredpalmer.formik',
        fullName: 'jaredpalmer/formik',
        description: 'Build forms in React, without the tears',
        language: 'TypeScript',
        forksCount: 1619,
        stargazersCount: 21856,
        ratingAverage: 88,
        reviewCount: 3,
        ownerAvatarUrl:
          'https://avatars2.githubusercontent.com/u/4060187?v=4',
      },
      cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
    },
    {
      node: {
        id: 'async-library.react-async',
        fullName: 'async-library/react-async',
        description: 'Flexible promise-based React data loader',
        language: 'JavaScript',
        forksCount: 69,
        stargazersCount: 1760,
        ratingAverage: 72,
        reviewCount: 3,
        ownerAvatarUrl:
          'https://avatars1.githubusercontent.com/u/54310907?v=4',
      },
      cursor:
        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
    },
  ],
}


const matchNumberOrK = (container, value) => {
  const raw = String(value)
  const formatted = `${(value / 1000).toFixed(1)}k`.replace('.0', '')
  const regex = new RegExp(`^(${raw}|${formatted})`, 'i')

  expect(container.getByText(regex)).toBeTruthy()
}


export default matchNumberOrK


describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      render(<RepositoryListContainer repositories={repositories} />)

      const repoItems = screen.getAllByTestId('repositoryItem')
      const [firstItem, secondItem] = repoItems

      const firstRepo = repositories.edges[0].node
      const secondRepo = repositories.edges[1].node

      // Function to test one item
      const testRepo = (item, repo) => {
        const utils = within(item)

        expect(utils.getByText(repo.fullName)).toBeTruthy()
        expect(utils.getByText(repo.description)).toBeTruthy()
        expect(utils.getByText(repo.language)).toBeTruthy()

        matchNumberOrK(utils, repo.forksCount)
        matchNumberOrK(utils, repo.stargazersCount)
        matchNumberOrK(utils, repo.ratingAverage)
        matchNumberOrK(utils, repo.reviewCount)
      }

      testRepo(firstItem, firstRepo)
      testRepo(secondItem, secondRepo)
    })
  })
})