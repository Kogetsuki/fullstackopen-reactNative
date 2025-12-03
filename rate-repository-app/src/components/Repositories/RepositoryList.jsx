import { useState } from 'react'
import { FlatList, View, StyleSheet, Pressable, ScrollView } from 'react-native'
import { useNavigate } from 'react-router-native'
import { SearchBar } from 'react-native-elements'
import { useDebounce } from 'use-debounce'

import theme from '../../theme'
import ORDER_OPTIONS from '../../constants/orderOptions'

import useRepositories from '../../hooks/useRepositories'
import RepositoryItem from './RepositoryItem'
import OrderPicker from './OrderPicker'


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },

  container: {
    backgroundColor: theme.colors.mainBackground,
    flex: 1,
    paddingTop: 15
  },

  picker: {
    width: '100%',
    marginBottom: 10
  },

  pickerLabel: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5
  }
})


const ItemSeparator = () =>
  <View style={styles.separator} />


const RepositoryList = () => {
  const navigate = useNavigate()

  const [order, setOrder] = useState('LATEST')
  const [search, setSearch] = useState('')
  const [debouncedSearch] = useDebounce(search, 500)

  const { repositories, fetchMore } = useRepositories({
    ...ORDER_OPTIONS[order],
    searchKeyword: debouncedSearch,
    first: 4
  })


  const repositoryNodes =
    repositories
      ? repositories.edges.map(edge => edge.node)
      : []


  return (
    <View>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 150 }}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.5}

        ListHeaderComponent={
          <>
            <SearchBar
              placeholder='Filter'
              onChangeText={setSearch}
              value={search}
              lightTheme
              round
            />

            <OrderPicker
              order={order}
              setOrder={setOrder}
            />
          </>
        }

        renderItem={({ item }) => (
          <Pressable onPress={() => navigate(`/${item.id}`)}>
            <RepositoryItem repo={item} />
          </Pressable>
        )}
      />
    </View>
  )
}


export default RepositoryList


