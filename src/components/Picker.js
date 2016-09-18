import React, { PropTypes } from 'react'
import { View, Text, Picker } from 'react-native'

const PickerReddit = ({ value, onChange, options }) => {
  return (
    <View>
      <Text>{value}</Text>
      <View>
        <Picker
          onValueChange={() => console.log('OK!')}
          >
          {options.map(item =>
            <Picker.Item key={item} label={item} value={item} />
          )}
        </Picker>
      </View>
    </View>
  )
}

PickerReddit.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default PickerReddit
