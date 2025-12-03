import { useState } from 'react'
import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'
import { Picker } from '@react-native-picker/picker'
import { SearchBar } from 'react-native-elements'
import { useDebounce } from 'use-debounce'

import useRepositories from '../../hooks/useRepositories'
import RepositoryItem from './RepositoryItem'

import theme from '../../theme'


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


const ORDER_OPTIONS = {
  LATEST: { orderBy: 'CREATED_AT', orderDirection: 'DESC', label: 'Latest repositories' },
  HIGHEST: { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC', label: 'Highest rated repositories' },
  LOWEST: { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC', label: 'Lowest rated repositories' }
}


const OrderPicker = ({ order, setOrder }) => (
  <View>
    <Picker
      style={styles.picker}
      selectedValue={order ?? null}
      onValueChange={(value) =>
        setOrder(value)}
    >
      {/* Placeholder label */}
      <Picker.Item label='Sort by...' value={null} enabled={false} color='#888' />

      {/* Actual options */}
      {Object.entries(ORDER_OPTIONS).map(([key, { label }]) => (
        <Picker.Item key={key} label={label} value={key} />
      ))}
    </Picker>
  </View>
)


const RepositoryList = () => {
  const navigate = useNavigate()

  const [order, setOrder] = useState('LATEST')
  const [search, setSearch] = useState('')
  const [debouncedSearch] = useDebounce(search, 500)

  const { repositories } = useRepositories({
    ...ORDER_OPTIONS[order],
    searchKeyword: debouncedSearch
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

