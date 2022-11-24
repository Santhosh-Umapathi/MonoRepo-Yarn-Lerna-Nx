import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const Button = () => {
  return (
    <TouchableOpacity>
      <View style={{ backgroundColor: 'orange', width: '100%' }}>
        <Text>Button</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
