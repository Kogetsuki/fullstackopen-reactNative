import { View, StyleSheet, Picker } from 'react-native'
import ORDER_OPTIONS from '../../constants/orderOptions'


const styles = StyleSheet.create({
  picker: {
    width: '100%',
    marginBottom: 10
  }
})

/**
 * Order picker component for sorting repositories
 */
const OrderPicker = ({ order, setOrder }) => (
  <View>
    <Picker
      style={styles.picker}
      selectedValue={order ?? null}
      onValueChange={setOrder}
    >
      <Picker.Item label='Sort by...' value={null} enabled={false} color='#888' />

      {Object.entries(ORDER_OPTIONS).map(([key, { label }]) => (
        <Picker.Item key={key} label={label} value={key} />
      ))}
    </Picker>
  </View>
)

export default OrderPicker
